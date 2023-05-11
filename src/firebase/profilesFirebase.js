import {
  collection,
  addDoc,
  where,
  getDocs,
  query,
  orderBy,
  startAt,
  endAt,
} from "firebase/firestore";

import { geohashQueryBounds, distanceBetween } from "geofire-common";
import { getItem } from "../helpers/localStorage";

import { db } from "@/firebase";

const colRef = collection(db, "profile");
const intRef = collection(db, "interactions");

export async function getProfiles() {
  let profiles = [];
  const mP = await getItem("myProfile");
  const currentUserId = await getItem("user").uid;
  if (!mP || !currentUserId) return;

  const q1 = query(intRef, where("sender", "==", currentUserId));
  const q2 = query(intRef, where("recipient", "==", currentUserId));

  const q1Snap = await getDocs(q1);
  // const q2Snap = await getDocs(q2);

  const remProfileIds = [];
  const filteredProfiles = [];

  q1Snap.forEach((doc) => {
    if (doc.data().sender === currentUserId)
      remProfileIds.push(doc.data().recipient);
    else remProfileIds.push(doc.data().sender);
  });

  // q2Snap.forEach((doc) => {
  //   if (doc.data().recipient === currentUserId)
  //     remProfileIds.push(doc.data().sender);
  //   else remProfileIds.push(doc.data().recipient);
  // });

  if (!mP.searchGlobal) {
    console.log("xd");
    profiles = await getProfilesByRange(
      mP.location.position.coordinates,
      mP.range
    );
    profiles = getProfilesByBeers(profiles, mP);

    profiles.forEach((p) => {
      if (!remProfileIds.includes(p.id)) filteredProfiles.push(p);
    });
    console.log(filteredProfiles);

    return filteredProfiles;
  }

  const profilesSnapshot = await getDocs(colRef);
  profilesSnapshot.forEach((doc) =>
    profiles.push({ ...doc.data(), id: doc.id })
  );

  profiles = getProfilesByBeers(profiles, mP);

  profiles.forEach((p) => {
    if (!remProfileIds.includes(p.id)) filteredProfiles.push(p);
  });

  console.log(filteredProfiles);
  return filteredProfiles;
}

function getProfilesByBeers(profiles, myProfile) {
  let p = [];

  if (!profiles) return;
  profiles.forEach((profile) => {
    for (let i = 0; i < profile.beers.length; i++) {
      if (myProfile.beers.indexOf(profile.beers[i].name)) {
        p.push(profile);
        break;
      }
    }
  });

  return p;
}

async function getProfilesByRange(point, range) {
  const radiusInM = range * 1000;

  const bounds = geohashQueryBounds(point, radiusInM);
  const promises = [];

  bounds.forEach((b) => {
    const q = query(
      colRef,
      orderBy("location.position.geohash"),
      startAt(b[0]),
      endAt(b[1])
    );
    promises.push(getDocs(q));
  });

  return await Promise.all(promises)
    .then((snapshots) => {
      const matchingDocs = [];
      snapshots.map((snap) => {
        snap.forEach((doc) => {
          const docPoint = doc.data().location?.position?.coordinates;
          const distanceInM = distanceBetween(docPoint, point) * 1000;
          if (distanceInM <= radiusInM)
            matchingDocs.push({ ...doc.data(), id: doc.id });
        });
      });
      return matchingDocs;
    })
    .then((matchingDocs) => {
      return matchingDocs;
    });
}

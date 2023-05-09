import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  startAt,
  endAt,
} from "firebase/firestore";

import { geohashQueryBounds, distanceBetween } from "geofire-common";
import { getItem as myProfile } from "../helpers/localStorage";

import { db } from "@/firebase";

const colRef = collection(db, "profile");

export async function getProfiles() {
  let profiles = [];
  const mP = myProfile("myProfile");
  if (!mP) return;

  if (!mP.searchGlobal) {
    profiles = await getProfilesByRange(
      mP.location.position.coordinates,
      mP.range
    );
    profiles = getProfilesByBeers(profiles, mP);
    return profiles;
  }

  const profilesSnapshot = await getDocs(colRef);
  profilesSnapshot.forEach((doc) =>
    profiles.push({ ...doc.data(), id: doc.id })
  );

  profiles = getProfilesByBeers(profiles, mP);
  return profiles;
}

function getProfilesByBeers(profiles, myProfile) {
  let p = [];

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

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
  const mP = myProfile("myProfile");
  if (!mP) return;
  console.log(mP);

  let profiles = await getProfilesByRange(
    mP.location.position.coordinates,
    mP.range
  );

  console.log(profiles, "XD");

  if (!profiles) return;
  return profiles;
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

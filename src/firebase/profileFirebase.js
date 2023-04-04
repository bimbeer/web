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

import { db } from "@/firebase";

const colRef = collection(db, "profile");

export async function addProfile(profile) {
  const docRef = await addDoc(colRef, { ...profile.getAllData() });
}

export async function getProfilesByRange(point, range) {
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

  Promise.all(promises)
    .then((snapshots) => {
      const matchingDocs = [];
      snapshots.map((snap) => {
        snap.forEach((doc) => {
          const docPoint = doc.data().location?.position?.coordinates;
          const distanceInM = distanceBetween(docPoint, point) * 1000;
          if (distanceInM <= radiusInM) matchingDocs.push(doc.data());
        });
      });
      return matchingDocs;
    })
    .then((matchingDocs) => {
      // do something with matched profile
      // profile mached only by range
      console.log(matchingDocs);
    });
}

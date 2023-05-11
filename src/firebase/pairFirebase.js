import {
  collection,
  addDoc,
  getDoc,
  query,
  orderBy,
  startAt,
  endAt,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { getItem } from "@/helpers/localStorage";
import { db } from "@/firebase";

const colRef = collection(db, "profile");
const intRef = collection(db, "interactions");

export async function getPairsProfiles(profilesIds) {
  if (profilesIds.length <= 0) {
    return;
  }

  const currentUserId = await getItem("user").uid;

  const q2 = query(
    intRef,
    where("sender", "==", currentUserId),
    where("reactionType", "==", "like")
  );

  const q3 = query(
    intRef,
    where("recipient", "==", currentUserId),
    where("reactionType", "==", "like")
  );

  const q2Snap = await getDocs(q2);
  const q3Snap = await getDocs(q3);

  const pendingIdProfiles = [];

  q2Snap.forEach((doc) => {
    if (doc.data().hasOwnProperty("pairId"))
      pendingIdProfiles.push({ ...doc.data(), id: doc.id });
  });

  q3Snap.forEach((doc) => {
    if (doc.data().hasOwnProperty("pairId"))
      pendingIdProfiles.push({ ...doc.data(), id: doc.id });
  });

  if (pendingIdProfiles <= 0) return;

  const idProfiles = [];
  pendingIdProfiles.forEach((pip) => {
    if (pip.sender === currentUserId) idProfiles.push(pip.recipient);
    else idProfiles.push(pip.sender);
  });

  const profiles = [];

  const q1 = query(colRef, where("__name__", "in", idProfiles));
  const q1Snap = await getDocs(q1);

  q1Snap.forEach((doc) => {
    profiles.push({ ...doc.data(), id: doc.id });
  });


  return profiles;
}

export async function getPairs(profilesIds) {
  if (profilesIds.length <= 0) {
    return;
  }

  const currentUserId = await getItem("user").uid;

  const q2 = query(
    intRef,
    where("sender", "==", currentUserId),
    where("reactionType", "==", "like")
  );

  const q3 = query(
    intRef,
    where("recipient", "==", currentUserId),
    where("reactionType", "==", "like")
  );

  const q2Snap = await getDocs(q2);
  const q3Snap = await getDocs(q3);

  const pendingIdProfiles = [];

  q2Snap.forEach((doc) => {
    if (doc.data().hasOwnProperty("pairId"))
      pendingIdProfiles.push({ ...doc.data(), id: doc.id });
  });

  q3Snap.forEach((doc) => {
    if (doc.data().hasOwnProperty("pairId"))
      pendingIdProfiles.push({ ...doc.data(), id: doc.id });
  });

  if (pendingIdProfiles <= 0) return;

  const idProfiles = [];
  const pairIds = [];

  pendingIdProfiles.forEach((pip) => {
    if (pip.sender === currentUserId) {
      idProfiles.push(pip.recipient);
      pairIds.push(pip.pairId);
    } else {
      idProfiles.push(pip.sender);
      pairIds.push(pip.pairId);
    }
  });

  let profiles = [];

  const q1 = query(colRef, where("__name__", "in", idProfiles));
  const q1Snap = await getDocs(q1);

  q1Snap.forEach((doc) => {
    profiles.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  for (let i = 0; i < profiles.length; i++) {
    profiles[i] = { ...profiles[i], pairId: pairIds[i] };
  }

  return profiles;
}

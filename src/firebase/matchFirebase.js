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
  updateDoc,
} from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";
import { db } from "@/firebase";

const colRef = collection(db, "interactions");

export async function addPairs(currentProfileId, recipientProfileId, recType) {
  const docRef = await addDoc(colRef, {
    sender: currentProfileId,
    recipient: recipientProfileId,
    reactionType: recType,
  });
}

export async function unpairUser(currentProfileId, recipientProfileId) {
  const q1 = query(
    colRef,
    where("sender", "==", currentProfileId),
    where("recipient", "==", recipientProfileId)
  );
  const q1Snap = await getDocs(q1);

  q1Snap.forEach((doc) => {
    deleteDoc(doc.ref);
  });

  const q2 = query(
    colRef,
    where("sender", "==", recipientProfileId),
    where("recipient", "==", currentProfileId)
  );
  const q2Snap = await getDocs(q2);

  q2Snap.forEach((doc) => {
    deleteDoc(doc.ref);
  });

  return "xd";
}

export async function checkMatch(
  currentProfileId,
  recipientProfileId,
  recType
) {
  const q1 = query(
    colRef,
    where("sender", "==", currentProfileId),
    where("recipient", "==", recipientProfileId),
    where("reactionType", "==", "like")
  );
  const q1Snap = await getDocs(q1);

  const q2 = query(
    colRef,
    where("sender", "==", recipientProfileId),
    where("recipient", "==", currentProfileId),
    where("reactionType", "==", "like")
  );

  const q2Snap = await getDocs(q2);

  if (q1Snap.empty && q2Snap.empty) {
    addPairs(currentProfileId, recipientProfileId, recType);
    return false;
  }
  await createPair(q1Snap, q2Snap);
  return true;
}

async function createPair(q1Snap, q2Snap) {
  const pairId = uuidv4();
  if (!q1Snap.empty) {
    q1Snap.forEach(async (doc) => {
      await updateDoc(doc.ref, { pairId });
    });
  }
  if (!q2Snap.empty) {
    q2Snap.forEach(async (doc) => {
      await updateDoc(doc.ref, { pairId });
    });
  }
}

export async function getAllLike(currentProfileId) {
  const profilesId = [];
  const q1 = query(
    colRef,
    where("sender", "==", currentProfileId),
    where("reactionType", "==", "like")
  );

  const q1Snap = await getDocs(q1);

  const q2 = query(
    colRef,
    where("recipient", "==", currentProfileId),
    where("reactionType", "==", "like")
  );

  const q2Snap = await getDocs(q2);

  q1Snap.forEach((doc) => {
    profilesId.push(doc.data().recipient);
  });

  q2Snap.forEach((doc) => {
    profilesId.push(doc.data().sender);
  });

  return profilesId;
}

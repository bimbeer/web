import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { deleteItem, getItem, setItem } from "../helpers/localStorage";
import { getProfile } from "./profileFirebase";

import {
  collection,
  doc,
  query,
  serverTimestamp,
  setDoc,
  orderBy,
  onSnapshot,
  where,
  addDoc,
  limit,
} from "firebase/firestore";

import { db } from "@/firebase";

const msgRef = collection(db, "messages");

export async function sendMessage(msg, pairId, currentUserId) {
  console.log(pairId);
  await addDoc(msgRef, {
    pairId: pairId,
    text: msg,
    uid: currentUserId,
    createdAt: serverTimestamp(),
  });
}

export async function getMessage(pairId, messages) {
  const q = query(
    collection(db, "messages"),
    where("pairId", "==", pairId),
    orderBy("createdAt", "asc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        console.log(change.doc.data());
        messages.push(change.doc.data());
      }
    });
  });
}

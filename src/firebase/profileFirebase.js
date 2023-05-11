import {
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  orderBy,
  startAt,
  endAt,
  setDoc,
} from "firebase/firestore";

import { db } from "@/firebase";
import { getItem, setItem } from "../helpers/localStorage";

const colRef = collection(db, "profile");

export async function addProfile(profile) {
  const user = getItem("user");
  if (!user) return;

  const userDocRef = doc(colRef, user.uid);
  const docRef = await setDoc(userDocRef, { ...profile.getAllData() });
}

export async function getProfile(userId) {
  const userDocRef = doc(colRef, userId);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    setItem(docSnap.data(), "myProfile");
  }
}

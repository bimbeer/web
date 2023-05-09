import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  startAt,
  endAt,
} from "firebase/firestore";

import { db } from "@/firebase";

const colRef = collection(db, "profile");

export async function addProfile(profile) {
  const docRef = await addDoc(colRef, { ...profile.getAllData() });
}

export async function getProfile() {}

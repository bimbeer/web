import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { deleteItem, getItem, setItem } from "../helpers/localStorage";
import { getProfile } from "./profileFirebase";

import { doc, setDoc } from "firebase/firestore";

import { db } from "@/firebase";

const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  // add error handler
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setItem(user, "user");
      await addUserToDb(user);
      await getProfile(user.uid);
      if (getItem("myProfile")) document.location.href = "/main/recs";
      else document.location.href = "/main/profile";
    })
    .catch((error) => {});
}

export function signIn(email, password) {
  // add error handler
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      setItem(user, "user");
      await getProfile(user.uid);
      if (getItem("myProfile")) document.location.href = "/main/recs";
      else document.location.href = "/main/profile";
    })
    .catch((error) => {});
}

export function signUp(email, password) {
  // add error handler
  createUserWithEmailAndPassword(auth, email, password).then(
    async (userCredential) => {
      const user = userCredential.user;
      setItem(user, "user");
      await addUserToDb(user);
      document.location.href = "/main/profile";
    }
  );
}

async function addUserToDb(user) {
  const userDocRef = doc(db, "users", user.uid);
  const docRef = await setDoc(userDocRef, {
    emailAddress: user.email,
  });
}

export function logout() {
  deleteItem("user");
  deleteItem("myProfile");
}

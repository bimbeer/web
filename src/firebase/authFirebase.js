import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  // add error handler
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const code = error.code;
      if (code === "auth/account-exists-with-different-credential")
        console.log("User's email already exists");
    });
}

export function signIn(email, password) {
  // add error handler
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function signUp(email, password) {
  // add error handler
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      console.log(user);
    }
  );
}

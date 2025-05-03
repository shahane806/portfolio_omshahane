import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
export const SignInWithPopUp = async () => {
  try {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    const isNewUser = getAdditionalUserInfo(res).isNewUser;

    if (isNewUser) {
      console.log("New User Registered Successfully");
    } else {
      console.log("User Logged In Successfully");
    }

    console.log("User Data:", res);
    return res;
  } catch (e) {
    console.error("SignIn Error:", e);
    return null;
  }
};
export const SignInWithEmailAndPassword = async (data) => {
  signInWithEmailAndPassword(auth, data.email, data.password).then((res) => {
    if (res == undefined) {
      return null;
    } else {
      return res;
    }
  }).catch((e) => {
    console.log("SignInWithEmailAndPassword" + e)
    return null;
  })
}
export const CreateUserWithEmailAndPassword = async (data) => {
  createUserWithEmailAndPassword(auth, data.email, data.password).then((res) => {
    if (res == undefined) {
      return null;
    } else {
      return res;
    }
  }).catch((e) => {
    console.log("CreateUserWithEmailAndPassword" + e);
    return null;
  })
}
export const SignOutFirebaseAccount = async () => {
  const res = await signOut(auth)
    .then(() => {
      console.log("SignOut Successfully");
      return true;
    })
    .catch((e) => {
      console.log(e);
    });
  return res;
};

export const SendPasswordResetEmail = async(data) =>{}
export const ConfirmPasswordReset = async(data)=>{}
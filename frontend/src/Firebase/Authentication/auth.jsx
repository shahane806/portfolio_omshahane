import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
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

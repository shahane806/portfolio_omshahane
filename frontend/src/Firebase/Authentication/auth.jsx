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
import { setUserDetails } from "../RealtimeDatabase/functions";

const auth = getAuth(app);

export const fetchRegistrationData = async()=>{
  
}

export const SignInWithPopUp = async () => {
  try {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    const isNewUser = getAdditionalUserInfo(res).isNewUser;

    if (isNewUser) {
      console.log("New User Registered Successfully");
      const user = 
      { id: res.user.uid, username: res.user.displayName, mobile: res.user.phoneNumber, date: res.user.metadata.creationTime, lastLogin: res.user.metadata.lastSignInTime };
    
      setUserDetails(user);
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
 try {
  const res = await signInWithEmailAndPassword(auth, data.email, data.password);
  if(res == undefined){
    return null;
  }else{
    return res;
  }
 } catch (error) {
    return null;
 }
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

export const SendPasswordResetEmail = async(data) =>{
  await sendPasswordResetEmail(auth,data.email).then(()=>{
    console.log("Password Reset Email Sent Successfully")
    return true;
  }).catch((e)=>{
    console.log("Error in sending Password Reset Email",e);
    return null;
  })
  
}
export const ConfirmPasswordReset = async(data)=>{}
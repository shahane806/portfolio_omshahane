import { app } from "../firebase";
import {
  getDatabase,
  get,
  ref,
  set,
  update,
  remove,
} from "firebase/database";

const firebaseDatabase = getDatabase(app);
const myInfo = ref(firebaseDatabase, "myInfo/");
const contactMessages = ref(firebaseDatabase, "contactMessages/");
const blogMetaData = ref(firebaseDatabase,"blogs/blogMetaData/");
const blogs = ref(firebaseDatabase,"blogs/blogsData/");
const projectMetaData = ref(firebaseDatabase,"projects/projectMetaData/");
const professionalExperienceData = ref(firebaseDatabase,"experience/");

export const getMyInfo = async()=>{
    console.log("Fetching data from Firebase Realtime Database...");
    const snapshot = await get(myInfo);
    if(snapshot.exists()){
        console.log("Data:",snapshot.val())
        return snapshot.val()
    }else{
        console.log("No data available")
        return null
    }
}

export const setMyInfo = async(data)=>{
    console.log("Setting data to Firebase Realtime Database...");
    await set(myInfo, data);
    console.log("Data set successfully")
}

export const updateMyInfo = async(data)=>{
    console.log("Updating data in Firebase Realtime Database...");
    await update(myInfo, data);
    console.log("Data updated successfully")
}

export const deleteMyInfo = async()=>{
    console.log("Deleting data from Firebase Realtime Database...");
    await remove(myInfo);
    console.log("Data deleted successfully")
}

export const getContactMessages = async(data) =>{
    await get(contactMessages).then((snapshot)=>{
        if(snapshot.exists()){
            console.log("Data:",snapshot.val())
            return snapshot.val()
        }else{
            console.log("No data available")
            return null
        }
    });
}

export const setContactMessages = async(data) =>{
    console.log("Setting data to Firebase Realtime Database...");
    await set(contactMessages, data);
    console.log("Data set successfully")
}

export const getBlogMetaData = async() =>{
    const snapshot = await get(blogMetaData);
    if(snapshot.exists()){
        console.log("Data Fetching from BlogMetaData" + snapshot.val());
       
            return snapshot.val();
  
    }else{
        console.log("Blogs MetaData Not Available");
    }   
}
export const getBlogsData = async() =>{
    const snapshot = await get(blogs);
    if(snapshot.exists()){
        console.log("Data Fetching from Blogs" + snapshot.val());

    }else{
        console.log("Blogs Not Available");
    }
}

export const getProjectMetaData = async()=>{
    const snapshot = await get(projectMetaData);
    if(snapshot.exists()){
        console.log("Projects Meta Data is Fetching From Database" + snapshot.val())
        return snapshot.val();
    }else{
        console.log("Projects Meta Data is not Available");
        return null;
    }
}

export const getProfessionalExperienceData = async()=>{
    const snapshot = await get(professionalExperienceData);
    if(snapshot.exists()){
        console.log("Professional Experience Data is Fetching From Database"+ snapshot.val());
        return snapshot.val();
    }else{
        console.log("Professional Experience Data is Not Available");
        return null;
    }
}

export const setProfessionalDataExperienceData = async(data)=>{
    await set(professionalExperienceData,data);
    console.log("Professional Experience Data is Set in the Database ");
}
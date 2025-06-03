import { app } from "../firebase";
import {
  getDatabase,
  get,
  ref,
  set,
  update,
  remove,
  push,
} from "firebase/database";

const firebaseDatabase = getDatabase(app);
const myInfo = ref(firebaseDatabase, "myInfo/");
const contactMessages = ref(firebaseDatabase, "contactMessages/");
const blogMetaData = ref(firebaseDatabase,"blogs/blogMetaData/");
const blogs = ref(firebaseDatabase,"blogs/blogsData/");
const projects = ref(firebaseDatabase,"projects/projectsData/");
const projectMetaData = ref(firebaseDatabase,"projects/projectMetaData/");
const professionalExperienceData = ref(firebaseDatabase,"experience/");
const users = ref(firebaseDatabase,"users/");











//////////////////////////////////  SET /////////////////////////////////////
export const setMyInfo = async(data)=>{
    // console.log("Setting data to Firebase Realtime Database...");
    await set(myInfo, data);
    // console.log("Data set successfully")
}

//////////////////////////////////  GET /////////////////////////////////////
export const getUsersList = async()=>{

    const snapshot = await get(users);
    if(snapshot.exists()){
       
        return snapshot.val();
    }else{
        // console.log("No data available");
        return null;
    }
}
export const getMyInfo = async()=>{
    // console.log("Fetching data from Firebase Realtime Database...");
    const snapshot = await get(myInfo);
    if(snapshot.exists()){
        // console.log("Data:",snapshot.val())
        return snapshot.val()
    }else{
        // console.log("No data available")
        return null
    }
}
export const getContactMessages = async(data) =>{
    await get(contactMessages).then((snapshot)=>{
        if(snapshot.exists()){
            // console.log("Data:",snapshot.val())
            return snapshot.val()
        }else{
            // console.log("No data available")
            return null
        }
    });
}

export const getBlogMetaData = async() =>{
    const snapshot = await get(blogMetaData);
    if(snapshot.exists()){
        // console.log("Data Fetching from BlogMetaData" + snapshot.val());
       
            return snapshot.val();
  
    }else{
        // console.log("Blogs MetaData Not Available");
    }   
}

export const getBlogsData = async() =>{
    const snapshot = await get(blogs);
    if(snapshot.exists()){
        // console.log("Data Fetching from Blogs" + snapshot.val());

    }else{
        // console.log("Blogs Not Available");
    }
}

export const getProjectData = async()=>{
    const snapshot = await get(projects);
    if(snapshot.exists()){
        // console.log("Projects Data is Fetching from Database"+snapshot.val())
        return snapshot.val();
    }else{
        // console.log("Project Data is not available");
        return null;
    }
}

export const getProjectMetaData = async()=>{
    const snapshot = await get(projectMetaData);
    if(snapshot.exists()){
        // console.log("Projects Meta Data is Fetching From Database")
        console.log(Object.entries(snapshot.val()))
        return Object.entries(snapshot.val());
    }else{
        // console.log("Projects Meta Data is not Available");
        return null;
    }
}


export const getProfessionalExperienceData = async()=>{
    const snapshot = await get(professionalExperienceData);
    if(snapshot.exists()){
        // console.log("Professional Experience Data is Fetching From Database"+ snapshot.val());
        return snapshot.val();
    }else{
        // console.log("Professional Experience Data is Not Available");
        return null;
    }
}
//////////////////////////////////  push ////////////////////////////////////
export const setUserDetails = async(data)=>{
    // console.log("Inserting data to firebase realTimeDatabase")
    await push(users,data);
    // console.log("Data set successfully")
}
export const setContactMessages = async(data) =>{
    // console.log("Setting data to Firebase Realtime Database...");
    await push(contactMessages, data);
    // console.log("Data set successfully")
}


export const setBlogsData = async(data)=>{
    // console.log("Inserting the Blogs Data in Firebase");
    await push(blogs,data);
    // console.log("Blogs Data inserted into firebase")
}

export const setBlogMetaData = async(data)=>{
    // console.log("Inserting the BlogMetaData in Firebase");
    await push(blogMetaData,data);
    // console.log("BlogMetaData inserted into firebase")
}


export const setProjectData = async(data)=>{
    // console.log("Inserting the Project Data in Firebase");
    await push(projects,data);
    // console.log("Projects Data inserted into firebase");
}

export const setProjectMetaData = async(data)=>{
    // console.log("Inserting the Project Meta Data in Firebase");
    await push(projectMetaData,data);
    // console.log("ProjectMetaData is inserted into firebase");
}
export const setProfessionalDataExperienceData = async(data)=>{
    await push(professionalExperienceData,data);
    // console.log("Professional Experience Data is Set in the Database ");
}
//////////////////////////////////  delete //////////////////////////////////
export const deleteMyInfo = async()=>{
    // console.log("Deleting data from Firebase Realtime Database...");
    await remove(myInfo);
    // console.log("Data deleted successfully")
}


////////////////////////////////// update ///////////////////////////////////
export const updateMyInfo = async(data)=>{
    // console.log("Updating data in Firebase Realtime Database...");
    await update(myInfo, data);
    // console.log("Data updated successfully")
}

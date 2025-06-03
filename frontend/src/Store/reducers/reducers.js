import { clearAllLocalStorage, getUserCredentials, setUserCredentials } from "../../LocalStorage/local-storage";

export const baseReducer = async (state = [], action) => {
    switch (action.type) {
      case "signIn":
        // console.log("Base Reducer: signIn");
        if(action.payload != null){
        setUserCredentials(action.payload);
        return [action.payload];
        }
        return [];
      
      case "signOut":
        // console.log("Base Reducer: signOut");
        clearAllLocalStorage();
        return [];
      
        default:
        // console.log("Base Reducer: Hello Default");
        const res =  await getUserCredentials();
        // console.log("Base Reducer: User Data:", res);
        if(res != null){
            return [res];
        }
        return state;
    }
  };
  
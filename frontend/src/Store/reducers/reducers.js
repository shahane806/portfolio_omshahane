import { clearAllLocalStorage, getUserCredentials, setUserCredentials } from "../../LocalStorage/local-storage";

export const baseReducer = async (state = [], action) => {
    switch (action.type) {
      case "signIn":
        console.log("Base Reducer: signIn");
        setUserCredentials(action.payload);
        return [state, action.payload];
  
      case "signOut":
        console.log("Base Reducer: signOut");
        clearAllLocalStorage();
        return [];
      
        default:
        console.log("Base Reducer: Hello Default");
        const res = await getUserCredentials();
        console.log("Base Reducer: User Data:", res);
        if(res != null){
            return [state, res];
        }
        return state;
    }
  };
  
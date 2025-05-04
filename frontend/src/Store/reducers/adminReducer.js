import { clearAllLocalStorage, getAdminCredentials, setAdminCredentials } from "../../LocalStorage/local-storage";

export const adminReducer = async(state=[],action) =>{
switch(action.type){
    case "adminLogin":
        console.log("Admin Reducer: adminLogin");
        if(action.payload != null){
            console.log("Admin Reducer: adminLogin Payload",action.payload);
            setAdminCredentials(action.payload);
            const res =  getAdminCredentials();
            console.log("Admin Reducer: adminLogin res",res);
            if(res != null){
                return [action.payload];
            }
            return [];
        }
        return [];

    case "adminLogout":
        console.log("Admin Reducer: adminLogout");
        clearAllLocalStorage();
        return [];

    default:
        console.log("Admin Reducer: Hello Default");
        const res = await getAdminCredentials();
        console.log("Admin Reducer: Admin Data:",res);
        if(res != null){
            return [res];
        }
        return [];
}

}
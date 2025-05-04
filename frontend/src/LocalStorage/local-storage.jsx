export const setUserCredentials = async (payload) =>{
    localStorage.setItem("userCredentials",JSON.stringify(payload));
}
export const getUserCredentials = async () =>{
    const res = localStorage.getItem("userCredentials");
    return JSON.parse(res);
}
export const setAdminCredentials = async (payload) =>{
    localStorage.setItem("adminCredentials",JSON.stringify(payload));
}
export const getAdminCredentials = async () =>{
    const res = localStorage.getItem("adminCredentials");
    return JSON.parse(res);
}
export const clearAllLocalStorage = async () =>{
    localStorage.clear();
    console.clear();
}
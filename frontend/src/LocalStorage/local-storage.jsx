export const setUserCredentials = async (payload) =>{
    localStorage.setItem("userCredentials",JSON.stringify(payload));
}
export const getUserCredentials = async () =>{
    const res = localStorage.getItem("userCredentials");
    return JSON.parse(res);
}
export const clearAllLocalStorage = async () =>{
    localStorage.clear();
    console.clear();
}
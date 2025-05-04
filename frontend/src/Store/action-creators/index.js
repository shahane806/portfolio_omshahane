export const signInAction = async(dispatch,payload) =>{
    return dispatch({
        type:"signIn",
        payload
    });
}

export const signOutAction = async(dispatch,payload) =>{
    return dispatch({
        type:"signOut",
        payload
    })
}

export const adminLoginAction = async(dispatch,payload)=>{
    return dispatch({
        type:"adminLogin",
        payload
    })
}
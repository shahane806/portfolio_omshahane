export const baseReducer = async(
    initialState = [] , action
)=>{
    switch (action.type) {
        case "base":
            console.log("Base Reducer : Hello Base")
            break;
    
        default: console.log("Base Reducer : Hello Default")
            break;
    }
}
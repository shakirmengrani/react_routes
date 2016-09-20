let defaultState = [];

export default (state = defaultState, action) => {
    switch(action.type){
        case "ADD_TWEET":
            return Object.assign([],defaultState,defaultState.push({
                title: action.payload.title, 
                text: action.payload.text,
                created_by: action.payload.created_by
            }));
        default:    
            return state;
    }
}
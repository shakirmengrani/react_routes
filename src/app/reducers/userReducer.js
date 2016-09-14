let defaultState = {name: "Shakir Mengrani",age: 24 };

export default function reducer (state = defaultState, action)  {
    switch (action.type) {
        case "CHANGE_NAME":
            return Object.assign({},defaultState,{name:action.payload});
        case "CHANGE_AGE":
            return Object.assign({},defaultState,{age:action.payload});
        default:    
            return state;
    } 
}
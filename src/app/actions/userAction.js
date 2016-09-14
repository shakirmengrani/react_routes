export function fetchUserState(){
    return {
        type: "FETCH_USER_STATE",
        payload: {name: "shakir mengrani", age: 24}
    }
}

export function setName(name){
    return {
        type: "CHANGE_NAME",
        payload: name 
    }
}

export function setAge(age){
    return {
        type: "CHANGE_AGE",
        payload: age
    }
}
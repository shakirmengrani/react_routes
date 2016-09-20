export function add_tweet(title, text,created_by){
    return {
        type: "ADD_TWEET",
        payload: {title: title, text: text, created_by: created_by}
    }
}
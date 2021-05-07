import firebase from "firebase";

if(firebase.apps.length === 0){
    firebase.initializeApp({
        appId : process.env.REACT_APP_ID,
        apiKey : process.env.REACT_APP_API_KEY,
        projectId : process.env.REACT_APP_PROJECT_ID,
        storageBucket : process.env.REACT_APP_STORAGE_BUCKET,
        authDomain : process.env.REACT_APP_AUTH_DOMAIN,
        messagingSenderID : process.env.REACT_APP_MESSAGE_SENDER_ID,
        measurementID : process.env.REACT_APP_MEASUREMENT_ID 
    })
};

export default firebase;

export const githubProvider = new firebase.auth.GithubAuthProvider();
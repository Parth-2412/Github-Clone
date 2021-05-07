import React from 'react'
import firebase, { githubProvider } from './firebase'
import Logo from './Logo';

function Login({ setToken }) {
    const logIn = () => {
        githubProvider.addScope("repo")
        githubProvider.addScope("read:user")
        firebase
        .auth()
        .signInWithPopup(githubProvider)
        .then(result => {
            if(result.credential.accessToken) setToken(result.credential.accessToken);
        })
        .catch(error => {
            console.log(error)
        })
    };
    return (
        <div className="flex justify-center items-center mt-24 text-md ">
            <button onClick={logIn} className="flex items-center space-x-2 p-2.5 px-5 bg-green-600 ring-green-600 bg-opacity-70 hover:bg-opacity-90 text-gh-text ring-1 rounded">
                <Logo height={25 } />
                <div> Login With GitHub </div>
            </button>
        </div>
    )
}

export default Login

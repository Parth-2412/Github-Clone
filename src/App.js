import { useEffect, useState } from "react";
import Discover from "./Discover";
import Explore from "./Explore";
import Header from "./Header";
import Sidebar from "./Sidebar";
import firebase from "./firebase"
import Login from "./Login";
import { clientContext, userContext } from "./Context";
import github from "octonode"



function App() {
	const [margin, setMargin] = useState(0);
	const [height, setHeight] = useState(0);
    const [user, setUser] = useState(firebase.auth().currentUser);
    const [token, setToken] = useState(null);
	useEffect(() => {
		setHeight(window.innerHeight);
		const onResize = () => {
			setHeight(window.innerHeight);
		};
		window.onresize = onResize;
		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

    useEffect(() => {
        const unsubscribe=  firebase.auth().onAuthStateChanged(user => {
            if(user){
                console.log(user)
                setUser(user);
            }
            else { 
                setUser(null)
            }
        })
        return unsubscribe
    }, [])
	return (
        (user && token) ? 
        <userContext.Provider value={user}>
            <clientContext.Provider value={github.client(token)}>
                <div className="">
                    <Header setMargin={setMargin} />
                    <div
                        className="grid grid-cols-1 md:grid-cols-github-md lg:grid-cols-github-lg xl:grid-cols-github-xl 2xl:grid-cols-github-2xl"
                        style={{
                            height: height - margin,
                            marginTop: margin,
                        }}
                    >
                        <Sidebar />
                        <Discover />
                        <Explore />
                    </div>
                </div>
            </clientContext.Provider>
        </userContext.Provider>
        : <Login setToken={setToken}/>
	);
}

export default App;

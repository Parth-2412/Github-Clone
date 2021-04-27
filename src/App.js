import { useState } from "react";
import Discover from "./Discover";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
const [margin, setMargin] = useState(0);
  return (
    <div className="">
    <Header setMargin={setMargin}/>   
      <div className="grid grid-cols-1 md:grid-cols-github-md lg:grid-cols-github-lg xl:grid-cols-github-xl 2xl:grid-cols-github-2xl" style={{height : window.innerHeight - margin, marginTop : margin}}>
        <Sidebar/>
        <Discover />
      </div>
    </div>
  );
}

export default App;

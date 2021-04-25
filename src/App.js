import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="">
      <Header/>
      <div className="grid grid-cols-1 lg:grid-cols-github md:grid-cols-github-md h-screen">
        <Sidebar/>
        {/* Footer */}
        {/* Discover */}
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Discover from "./Discover";
import Explore from "./Explore";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
	const [margin, setMargin] = useState(0);
	const [height, setHeight] = useState(0);
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
	return (
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
	);
}

export default App;

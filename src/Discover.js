import React from "react";
import Link from "./Link";
import { LightBulbIcon, WifiIcon } from "@heroicons/react/outline";
import Footer from "./Footer";

function Discover() {
	const Watch = <Link href="http://github.com/trending" text="watch" />;
	const Follow = (
		<Link href="http://github.com/trending/developers" text="follow" />
	);
	return (
		<div className="flex flex-col justify-between py-8 md:px-6 px-3 w-full">
			<div className="space-y-5">
				<div className="border border-opacity-80 border-gray-700 p-7 bg-gh-sidebar rounded-xl">
					<div className="font-bold text-2xl text-gray-200 text-opacity-90 mb-3">
						Discover interesting projects and people to populate
						your personal news feed.
					</div>
					<div className="text-gray-400">
						<>
							Your news feed helps you keep up with recent
							activity on repositories you
						</>{" "}
						{Watch}
						<> and people you </>
						{Follow}.
					</div>
					<button onClick={() => { window.location.href = "http://github.com/explore"}} className="text-blue-400 border active:bg-blue-700 active:text-white font-semibold border-gray-700 p-2 px-4 rounded hover:border-blue-500 hover:bg-gray-800 bg-gray-900 text-sm mt-6">
						Explore Github
					</button>
				</div>
				<div
					className="text-gray-400 space-y-1.5 md:px-0 px-2"
					style={{ fontSize: 13 }}
				>
					<div className="flex space-x-1 items-start">
						<LightBulbIcon className="h-4" />
						<span>
							<span className="font-bold">ProTip! </span>
							The feed shows you events from people you {
								Follow
							}{" "}
							and repositories you {Watch}.
						</span>
					</div>
					<div className="flex space-x-1 items-center">
						<WifiIcon className="h-4 transform rotate-45" />
						<span>Subscribe to your news feed</span>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Discover;



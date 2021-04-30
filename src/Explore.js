import React from "react";
import ExploreItem from "./ExploreItem";

const data = [
	{
		username: "octokit",
		name: "octokit.js",
		description: "Github API wrapper",
		language: "TypeScript",
		stars: "34",
		color: "blue",
	},
	{
		username: "redis",
		name: "redis",
		description: "In memory database",
		language: "C",
		stars: "48.7k",
		color: "gray",
	},
	{
		username: "git",
		name: "git",
		description: "Distributed Version Control system",
		language: "C",
		stars: "37.8k",
		color: "gray",
	},
];
function Explore() {
	return (
		<div className="lg:flex flex-col hidden mt-7 px-4">
			<div className="font-medium">
				<div className="font-semibold text-sm text-gray-300">
					Explore Repositories
				</div>
				{data.map((repo) => (
					<ExploreItem {...repo} />
				))}
			</div>
		</div>
	);
}

export default Explore;

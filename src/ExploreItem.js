import { StarIcon } from "@heroicons/react/outline";
import React from "react";

function ExploreItem({ username, name, language, stars, description, color }) {
	return (
		<div className="text-xs my-5 border-b border-gray-800">
			<div
				className="text-gray-300 cursor-pointer hover:text-blue-400"
				onClick={() =>
					(window.location.href = `https://github.com/${username}/${name}`)
				}
			>
				{username}/{name}
			</div>
			<div className="text-gray-400 font-normal my-0.5 truncate">
				{description}
			</div>
			<div className="my-2 text-gray-400 font-normal flex space-x-4">
				<div className="flex items-center">
					<div
						className={`h-3 w-3 rounded-full mr-1 bg-${color}-600`}
					/>
					<div>{language}</div>
				</div>
				<div className="flex items-center space-x-1">
					<StarIcon className="h-4" />
					<div>{stars}</div>
				</div>
			</div>
		</div>
	);
}

export default ExploreItem;

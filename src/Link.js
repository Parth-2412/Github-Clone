import React from "react";

function Link({ href, text, children }) {
	return (
		<a
			className="text-blue-400 font-semibold my-1 hover:underline"
			href={href}
		>
			{text || children}
		</a>
	);
}

export default Link;

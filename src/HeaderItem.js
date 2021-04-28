function HeaderItem({ title, ...props }) {
	return (
		<div className="hover:opacity-80 cursor-pointer">
			<div {...props}>{title}</div>
		</div>
	);
}

export default HeaderItem;

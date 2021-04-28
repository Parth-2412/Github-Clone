import HeaderItem from "./HeaderItem";
import {
	PlusIcon,
	BellIcon,
	ChevronDownIcon,
	MenuIcon,
} from "@heroicons/react/outline";
import Avatar from "./Avatar";
import Input from "./Input";
import Logo from "./Logo";
import { useEffect, useRef } from "react";

function Header({ setMargin }) {
	const ref = useRef();

	useEffect(() => {
		setMargin(ref.current.offsetHeight);
	}, [ref.current?.offsetHeight, setMargin]);
	return (
		<header
			ref={ref}
			className="flex bg-gh-navbar py-3.5 items-center justify-between text-sm md:px-7 px-4 absolute top-0 left-0 w-screen"
		>
			<MenuIcon className="md:hidden h-8 cursor-pointer hover:opacity-80" />
			<div className="cursor-pointer hover:opacity-80 flex justify-center">
				<Logo />
			</div>
			<div className="md:flex items-center justify-between flex-1 hidden">
				<div className="ml-5 mx-2">
					<Input placeholder="Search or jump to..." />
				</div>
				<div className="flex flex-1 justify-start font-bold mx-3 space-x-5">
					<HeaderItem title="Pull Requests" />
					<HeaderItem title="Issues" />
					<HeaderItem title="Marketplace" />
					<HeaderItem title="Explore" />
				</div>
			</div>
			<div className="flex items-center space-x-3.5">
				<div className="hover:opacity-80 cursor-pointer">
					<BellIcon className="h-5" />
				</div>
				<div className="md:flex hidden items-center cursor-pointer hover:opacity-80">
					<PlusIcon className="h-6" />
					<ChevronDownIcon className="h-3.5" />
				</div>
				<div className="md:flex hidden items-center group cursor-pointer space-x-1">
					<Avatar src="https://avatars.githubusercontent.com/u/71689619?s=60&v=4" />
					<ChevronDownIcon className="h-3.5 group-hover:opacity-80 " />
				</div>
			</div>
		</header>
	);
}

export default Header;

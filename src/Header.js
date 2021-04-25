import HeaderItem from "./HeaderItem";
import { PlusIcon, BellIcon, ChevronDownIcon , MenuIcon } from "@heroicons/react/outline"
import Avatar from "./Avatar";
import Input from "./Input";

function Header() {
    return (
        <div className="flex bg-gh-navbar py-3.5 items-center justify-between text-sm md:px-7 px-4">
			<MenuIcon className="md:hidden h-8 cursor-pointer hover:opacity-80"/>
			<div className="cursor-pointer hover:opacity-80 flex justify-center">
				<svg className="fill-current text-white-600 octicon octicon-mark-github v-align-middle" height="35" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
					<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
					</path>
				</svg>
			</div>
			<div className="md:flex items-center justify-between flex-1 hidden">
				<div className="ml-5 mx-2">
					{/* <input className="bg-gh-search pl-4 pr-10 ring-blue-500 focus:ring-1 outline-none py-1 rounded-sm origin-left" placeholder="Search or jump to..."/> */}
                    <Input placeholder="Search or jump to..." />
				</div>
				<div className="flex flex-1 justify-start font-bold mx-3 space-x-5">
					<HeaderItem title="Pull Requests"/>
					<HeaderItem title="Issues" />
					<HeaderItem title="Marketplace" />
					<HeaderItem title="Explore" />
				</div>
			</div>
			<div className="flex items-center space-x-3.5">
				<div className="hover:opacity-80 cursor-pointer">
					<BellIcon className="h-5"/>
				</div>
				<div className="md:flex hidden items-center cursor-pointer hover:opacity-80">
					<PlusIcon className="h-6"/>
					<ChevronDownIcon className="h-3.5"/>
				</div>
				<div className="md:flex hidden items-center group cursor-pointer space-x-1">
					<Avatar src="https://avatars.githubusercontent.com/u/71689619?s=60&v=4" />
                    <ChevronDownIcon className="h-3.5 group-hover:opacity-80 "/>
				</div>
			</div>
        </div>
    )
}

export default Header

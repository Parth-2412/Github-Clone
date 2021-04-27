import React from "react";
import Link from "./Link";
import { LightBulbIcon, WifiIcon } from "@heroicons/react/outline"
import Logo from "./Logo";

function Discover() {
    const  Watch = <Link href="http://github.com/trending" text="watch" />;
    const Follow =  <Link href="http://github.com/trending/developers" text="follow" />
    const FooterLink = ({ children }) => (
        <span className="hover:text-blue-500 hover:underline cursor-pointer">
            {children}
        </span>
    )
    return (
		<div className="flex flex-col justify-between py-8 md:px-6 px-3 w-full">
            <div className="space-y-5">
                <div className="border border-opacity-80 border-gray-700 p-7 bg-gh-sidebar rounded-xl">
                    <div className="font-bold text-2xl text-gray-200 text-opacity-90 mb-3">
                        Discover interesting projects and people to populate your
                        personal news feed.
                    </div>
                    <div className="text-gray-400">
                        <>	
                            Your news feed helps you keep up with recent activity on
                            repositories you
                        </>
                        {" "}
                        {Watch}
                        <> and people you </>
                        {Follow}.
                    </div>
                    <button className="text-blue-400 border active:bg-blue-700 active:text-white font-semibold border-gray-700 p-2 px-4 rounded hover:border-blue-500 hover:bg-gray-800 bg-gray-900 text-sm mt-6">
                        Explore Github
                    </button>
                </div>
                <div className="text-gray-400 space-y-1.5 md:px-0 px-2" style={{fontSize : 13}}>
                    <div className="flex space-x-1 items-start">
                        <LightBulbIcon className="h-4"/>
                        <span>
                            <span className="font-bold">
                                ProTip!{" "}
                            </span>
                            The feed shows you events from people you {Follow} and repositories you {Watch}.
                        </span>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <WifiIcon className="h-4 transform rotate-45"/>
                        <span>
                            Subscribe to your news feed
                        </span>
                    </div>
                </div>
            </div>
            <footer className="text-xs md:text-sm text-gray-400 flex w-full md:justify-between md:mt-0 mt-10 md:px-0 px-3">
                <div className="lg:flex items-start hidden cursor-pointer">
                    <div className="flex items-center space-x-1 group">
                        <Logo height="27px" className="text-white opacity-50 group-hover:opacity-70"/>
                        <span>
                            © 2021 GitHub, Inc.
                        </span>
                    </div>
                </div>
                <>
                    <div className="flex flex-col space-y-1 lg:flex-initial flex-1">
                        <FooterLink>Blog</FooterLink>
                        <FooterLink>About</FooterLink>
                        <FooterLink>Shop</FooterLink>
                        <FooterLink>Contact GitHub</FooterLink>
                        <FooterLink>Pricing</FooterLink>
                        
                    </div>
                    <div className="flex flex-col space-y-1 lg:flex-initial flex-1">
                        <FooterLink>API</FooterLink>
                        <FooterLink>Training</FooterLink>
                        <FooterLink>Status</FooterLink>
                        <FooterLink>Security</FooterLink>
                    </div>
                    <div className="flex flex-col space-y-1 lg:flex-initial flex-1">
                        <FooterLink>Text</FooterLink>
                        <FooterLink>Privacy</FooterLink>
                        <FooterLink>Docs</FooterLink>
                    </div>
                </>

            </footer>
		</div>
	);

}

export default Discover;

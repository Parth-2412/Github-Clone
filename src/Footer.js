import React from 'react'
import FooterLink from './FooterLink';
import Logo from "./Logo";


function Footer() {
    return <footer className="text-xs md:text-sm text-gray-400 grid w-full grid-cols-3 lg:grid-cols-5 md:mt-0 mt-10 lg:gap-x-6 md:px-0 px-3">
        <div className="lg:flex items-start hidden col-span-2">
            <div className="flex items-center space-x-1 group cursor-pointer ">
                <Logo
                    height="27px"
                    className="text-white opacity-50 group-hover:opacity-70" />
                <span>© 2021 GitHub, Inc.</span>
            </div>
        </div>
        <>
            <div className="flex flex-col space-y-1.5">
                <FooterLink href="https://github.blog">Blog</FooterLink>
                <FooterLink href="https://github.com/about">About</FooterLink>
                <FooterLink href="https://shop.github.com">Shop</FooterLink>
                <FooterLink href="https://support.github.com">Contact GitHub</FooterLink>
                <FooterLink href="https://github.com/pricing">Pricing</FooterLink>
            </div>
            <div className="flex flex-col space-y-1.5">
                <FooterLink href="https://docs.github.com">API</FooterLink>
                <FooterLink href="https://services.github.com">Training</FooterLink>
                <FooterLink href="https://githubstatus.com">Status</FooterLink>
                <FooterLink href="https://docs.github.com/articles/github-security">Security</FooterLink>
            </div>
            <div className="flex flex-col space-y-1.5 ">
                <FooterLink href="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</FooterLink>
                <FooterLink href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</FooterLink>
                <FooterLink href="https://docs.github.com">Docs</FooterLink>
            </div>
        </>
    </footer>
}

export default Footer

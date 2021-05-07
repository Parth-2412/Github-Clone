import React from 'react'

function FooterLink({ children, href }){
    href = href ?? "https://github.com";
    return (
        <a
            className="hover:text-blue-500 mr-auto hover:underline cursor-pointer"
            // onClick={() => (window.location.href = href)}
            href={href}
        >
            {children}
        </a>
    );
};
export default FooterLink

function Input({ placeholder, className, ...props }) {
    return (
        <div>
            <input className={"bg-gh-search pl-4 pr-10 ring-blue-500 focus:ring-1 outline-none py-1 rounded origin-left " + className || ""} placeholder={placeholder} {...props}/>
        </div>
    )
}

export default Input


const Navbar = () => {
    return (
        <div className="flex align-center justify-center backdrop-blur-sm sticky top-0 z-10">
            <div className="w-[100vw] h-[60px] flex items-center justify-around">
                <div className="flex items-center cursor-pointer">
                    <p className="text-white text-[50px] monoton-regular">M</p>
                </div>
                <div className="">
                    <ul className="flex items-center gap-8">
                        <li className="nav-btn">Home</li>
                        <li className="nav-btn">About</li>
                        <li className="nav-btn">Contact</li>
                        <li className="nav-btn">Projects</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar

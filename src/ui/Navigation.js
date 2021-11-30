const Navigation = (props) => {
    const { drawerMenuIsOpen } = props
	return (
		<nav className="text-white">
			<ul className={
                "absolute top-0 left-0 z-0" + 
                " transform ease-in-out transition-all duration-500 translate-x-0" +
                " w-screen h-screen divide-y px-2 pt-14 text-xl" +
                " bg-drawer-menu bg-contain bg-no-repeat bg-right-bottom bg-secondary bg-opacity-90" + 
                (drawerMenuIsOpen ? " translate-x-0" : " -translate-x-full")
            }>
                <li className="px-3">Projects</li>
                <li className="px-3">Work</li>
                <li className="px-3">Eduction</li>
                <li className="px-3">Resume</li>
                <li className="px-3">About</li>
            </ul>
		</nav>
	)
}

export default Navigation

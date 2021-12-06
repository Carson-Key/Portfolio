// Packages
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    const { drawerMenuIsOpen } = props
	return (
		<nav className="text-white lg:my-auto">
			<ul className={
                // Mobile
                "absolute top-0 left-0 -z-10" + 
                " transform ease-in-out transition-all duration-500 translate-x-0" +
                " w-screen h-screen divide-y px-2 pt-14 text-xl" +
                " bg-drawer-menu bg-contain bg-no-repeat bg-right-bottom bg-secondary bg-opacity-90" + 
                (drawerMenuIsOpen ? " translate-x-0" : " -translate-x-full") +
                // Small Computer
                " lg:static lg:flex" +
                " lg:transform-none" +
                " lg:w-auto lg:h-auto lg:divide-y-0 lg:divide-x lg:mr-0 lg:ml-8 lg:p-0 lg:text-2xl" + 
                " lg:bg-none lg:bg-transparent" +
                // Large Computer
                " xl:text-3xl" +
                // Extremely Large Computer
                " 2xl:text-4xl"
            }>
                <Link to="/Projects"><li className="px-3 lg:px-4">Projects</li></Link>
                <Link to="/Work"><li className="px-3 lg:px-4">Work</li></Link>
                <Link to="/Education"><li className="px-3 lg:px-4">Education</li></Link>
                <Link to="/Resume"><li className="px-3 lg:px-4">Resume</li></Link>
                <Link to="/About"><li className="px-3 lg:px-4">About</li></Link>
            </ul>
		</nav>
	)
}

export default Navigation

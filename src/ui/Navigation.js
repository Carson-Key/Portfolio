import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Logo512 from '../assets/Logo-512.png'

const Navigation = () => {
    const [drawerMenuIsOpen, setDrawerMenuIsOpen] = useState(false)

    const openDrawerMenu = () => {
        setDrawerMenuIsOpen(!drawerMenuIsOpen)
    }

	return (
		<nav className="text-white">
            <div className="flex relative w-screen h-14 z-40 bg-secondary">
                <button onClick={openDrawerMenu}><MdMenu className="absolute inset-y-0 left-0 h-14 text-2xl ml-2"/></button>
                <div className="flex justify-center my-auto mx-auto">
                    <h1 className="my-auto text-lg font-helvetica">Carson</h1>
                    <img src={Logo512} className="h-10 ml-1" alt="" />
                    <h1 className="my-auto text-lg font-helvetica ml-1">Key</h1>
                </div>
            </div>
			<ul className={"absolute transform ease-in-out transition-all duration-500 translate-x-0 top-0 left-0 z-0 w-screen h-screen bg-secondary bg-opacity-90 pt-14" + (drawerMenuIsOpen ? " translate-x-0" : " -translate-x-full")}>
                <li>Projects</li>
                <li>Work</li>
                <li>Eduction</li>
                <li>Resume</li>
                <li>About</li>
            </ul>
		</nav>
	)
}

export default Navigation

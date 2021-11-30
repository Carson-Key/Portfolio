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
			<ul className={
                "absolute top-0 left-0 z-0" + 
                " transform ease-in-out transition-all duration-500 translate-x-0" +
                " w-screen h-screen divide-y px-2 pt-14" +
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

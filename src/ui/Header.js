// Packages
import { useState } from 'react'
// UI
import Banner from './Banner'
import Navigation from './Navigation'

const Header = () => {
    const [drawerMenuIsOpen, setDrawerMenuIsOpen] = useState(false)

    const openDrawerMenu = () => {
        setDrawerMenuIsOpen(!drawerMenuIsOpen)
    }

	return (
		<header className="flex relative w-screen h-14 z-40 text-white bg-secondary lg:h-20 lg:text-2xl xl:h-24 xl:text-3xl 2xl:h-28 2xl:text-4xl">
			<Banner openDrawerMenu={openDrawerMenu} drawerMenuIsOpen={drawerMenuIsOpen} />
			<Navigation openDrawerMenu={openDrawerMenu} drawerMenuIsOpen={drawerMenuIsOpen} />
		</header>
	)
}

export default Header
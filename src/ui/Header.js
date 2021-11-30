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
		<header className="flex relative w-screen h-14 z-40 text-white bg-secondary lg:h-20 lg:text-2xl">
			<Banner openDrawerMenu={openDrawerMenu} />
			<Navigation drawerMenuIsOpen={drawerMenuIsOpen} />
		</header>
	)
}

export default Header
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
		<>
			<Banner openDrawerMenu={openDrawerMenu} />
			<Navigation drawerMenuIsOpen={drawerMenuIsOpen} />
		</>
	)
}

export default Header
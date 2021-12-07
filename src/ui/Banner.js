// Packages
import { MdMenu } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
// Assets
import Logo512 from '../assets/Logo-512.png'

const Banner = (props) => {
	const { toggleDrawerMenu, drawerMenuIsOpen, closeDrawerMenu } = props

	return (
		<>
			<button 
				onClick={toggleDrawerMenu} 
				aria-hidden='true'
				aria-expanded={drawerMenuIsOpen}
				aria-label="Mobile Navigation Button" 
				className="lg:hidden"
			>
				<MdMenu className="absolute inset-y-0 left-0 h-14 text-2xl ml-2"/>
			</button>
			<NavLink to="/" className="flex justify-center my-auto mx-auto lg:mx-3"  onClick={closeDrawerMenu}>
				<h1 className="my-auto text-lg font-helvetica lg:text-2xl xl:text-3xl 2xl:text-4xl" aria-label="Title first name">Carson</h1>
				<img src={Logo512} className="h-10 ml-1 lg:h-14 xl:h-16 2xl:h-20" alt="Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key " />
				<h1 className="my-auto text-lg font-helvetica ml-1 lg:text-2xl xl:text-3xl 2xl:text-4xl"  aria-label="Title last name">Key</h1>
			</NavLink>
		</>
	)
}

export default Banner

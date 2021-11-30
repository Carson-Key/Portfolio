import { MdMenu } from 'react-icons/md'
import Logo512 from '../assets/Logo-512.png'

const Header = (props) => {
	const { openDrawerMenu } = props

	return (
		<header className="flex relative w-screen h-14 z-40 text-white bg-secondary">
			<button onClick={openDrawerMenu}><MdMenu className="absolute inset-y-0 left-0 h-14 text-2xl ml-2"/></button>
			<div className="flex justify-center my-auto mx-auto">
				<h1 className="my-auto text-lg font-helvetica">Carson</h1>
				<img src={Logo512} className="h-10 ml-1" alt="" />
				<h1 className="my-auto text-lg font-helvetica ml-1">Key</h1>
			</div>
		</header>
	)
}

export default Header

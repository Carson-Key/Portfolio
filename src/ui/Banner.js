import { MdMenu } from 'react-icons/md'
import Logo512 from '../assets/Logo-512.png'

const Header = (props) => {
	const { openDrawerMenu } = props

	return (
		<>
			<button onClick={openDrawerMenu} className="lg:hidden"><MdMenu className="absolute inset-y-0 left-0 h-14 text-2xl ml-2"/></button>
			<div className="flex justify-center my-auto mx-auto lg:mx-3">
				<h1 className="my-auto text-lg font-helvetica lg:text-2xl xl:text-3xl">Carson</h1>
				<img src={Logo512} className="h-10 ml-1 lg:h-14 xl:h-16" alt="" />
				<h1 className="my-auto text-lg font-helvetica ml-1 lg:text-2xl xl:text-3xl">Key</h1>
			</div>
		</>
	)
}

export default Header

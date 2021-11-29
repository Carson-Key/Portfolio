import { MdMenu } from 'react-icons/md'
import Logo512 from '../assets/Logo-512.png'

const Navigation = () => {
	return (
		<nav className="flex w-screen h-14 bg-secondary text-white">
            <MdMenu className="absolute inset-y-0 left-0 h-full text-2xl ml-2"/>
            <div className="flex justify-center col-span-2 w-2/3 my-auto mx-auto">
                <img src={Logo512} className="h-10" alt="" />
                <h1 className="my-auto text-xl ml-1">Carson Key</h1>
            </div>
			{/* <ul>
                <li>Projects</li>
                <li>Work</li>
                <li>Eduction</li>
                <li>Resume</li>
                <li>About</li>
            </ul> */}
		</nav>
	)
}

export default Navigation

import { MdMenu } from 'react-icons/md'
import Logo512 from '../assets/Logo-512.png'

const Navigation = () => {
	return (
		<nav>
            <div className="flex relative w-screen h-14 z-40 bg-secondary text-white">
                <MdMenu className="absolute inset-y-0 left-0 h-14 text-4xl ml-2"/>
                <div className="flex justify-center my-auto mx-auto">
                    <h1 className="my-auto text-lg font-helvetica">Carson</h1>
                    <img src={Logo512} className="h-10 ml-1" alt="" />
                    <h1 className="my-auto text-lg font-helvetica ml-1">Key</h1>
                </div>
            </div>
			<ul className="absolute top-0 left-0 z-0 w-screen h-screen bg-secondary bg-opacity-90 pt-14">
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

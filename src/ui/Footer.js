// Packages
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiHandshake } from "react-icons/si";

const Footer = () => {
	return (
		<footer className="bg-secondary text-white mt-10 py-3 px-1 relative inset-x-0 bottom-0">
            <div>
                <h4 className="font-bold">Links:</h4>
                <div className="w-16 grid grid-cols-3 gap-x-2">
                    <a href="https://www.linkedin.com/in/carson-key-720a04b6/" className="text-lg"><FaLinkedin className="inline" title="link to LinkedIn"/></a>
                    <a href="https://github.com/Carson-Key" className="text-lg"><FaGithub className="inline" title="link to Github"/></a>
                </div>
            </div>
		</footer>
	)
}

export default Footer

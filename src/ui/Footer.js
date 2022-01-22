// Packages
import { FaLinkedin, FaGithub, FaReact, FaSwift, FaRegCopyright, FaNodeJs, FaGitlab, FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiPhp, SiAmazonaws, SiFirebase, SiFlutter, SiRubyonrails, SiJest, SiCplusplus } from 'react-icons/si'
import { DiRuby, DiMysql, DiGit } from 'react-icons/di'

const Footer = () => {
	return (
		<footer className="bg-secondary text-white mt-10 py-3 px-1 relative inset-x-0 bottom-0">
            <div className="flex justify-evenly my-2">
                <div>
                    <h4 className="font-bold">Links</h4>
                    <div className="w-16 grid grid-cols-3 gap-x-2">
                        <a href="https://www.linkedin.com/in/carson-key-720a04b6/" className="text-lg"><FaLinkedin className="inline" title="link to LinkedIn"/></a>
                        <a href="https://github.com/Carson-Key" className="text-lg"><FaGithub className="inline" title="link to Github"/></a>
                    </div>
                </div>
                <div className="overflow-scroll scrollbar-hide">
                    <h4 className="font-bold mx-auto">Technologies Learned So Far</h4>
                    <div className="flex justify-evenly text-lg my-1">
                        <FaReact title="react logo" />
                        <IoLogoJavascript title="java script logo" />
                        <FaSwift title="swift logo" />
                        <SiPhp title="php logo" />
                        <DiRuby title="ruby logo" />
                        <FaNodeJs title="node.js logo" />
                        <SiAmazonaws title="aws logo" />
                        <SiFirebase title="firebase logo" />
                        <DiMysql title="sql logo" />
                        <SiFlutter title="flutter logo" />
                        <DiGit title="git logo" />
                        <FaGithub title="github logo" />
                        <FaGitlab title="gitlab logo" />
                        <FaHtml5 title="html logo" />
                        <FaCss3Alt title="css logo" />
                        <SiRubyonrails title="ruby on rails logo" />
                        <SiJest title="jest logo" />
                        <SiCplusplus title="C++ logo" />
                    </div>
                </div>
            </div>
            <p className="my-auto text-xs"><FaRegCopyright title="copyright symbol" className="inline" /> {new Date().getFullYear()} Carson Key</p>
		</footer>
	)
}

export default Footer

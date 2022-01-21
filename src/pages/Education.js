// Packages
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
// Components
import Container from '../components/Container'

const Education = () => {
	
    return (
		<Container className="divide-y divide-solid">
			<div className="w-screen h-14 bg-slate-400 flex justify-between">
				<h3 className="text-white text-3xl py-2 px-2">Oregon State University</h3>
				<h3 className="text-white text-center my-1 text-3xl py-2 px-2"><MdKeyboardArrowDown/></h3>
			</div>
			<div className="w-screen h-14 bg-slate-400 flex justify-between">
				<h3 className="text-white text-3xl py-2 px-2">Summit High School</h3>
				<h3 className="text-white text-center my-1 text-3xl py-2 px-2"><MdKeyboardArrowDown/></h3>
			</div>
		</Container>
	)
}

export default Education

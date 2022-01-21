// Packages
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const EducationSection = (props) => {
    const { name } = props
	
    return (
        <div className="w-screen h-14 bg-slate-400 flex justify-between">
            <h3 className="text-white text-3xl py-2 px-2">{name}</h3>
            <h3 className="text-white text-center my-1 text-3xl py-2 px-2"><MdKeyboardArrowDown/></h3>
        </div>
	)
}

export default EducationSection

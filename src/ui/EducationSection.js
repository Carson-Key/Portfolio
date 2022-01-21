// Packages
import { useState } from 'react'
// Packages
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const EducationSection = (props) => {
    const { name } = props

    const moreComponent = <MdKeyboardArrowDown/>
	const lessComponent = <MdKeyboardArrowUp/>

    const [expanded, setExpanded] = useState(false)
    const [expandIcon, setExpandIcon] = useState(moreComponent)

    const changeElementOnExpandedChange = (setState, collapsed, extdended) => {
		if (expanded) {
			setState(collapsed)
		} else {
			setState(extdended)
		}
	}

	const toggleExpanded = () => {
		setExpanded(!expanded)
		changeElementOnExpandedChange(setExpandIcon, moreComponent, lessComponent)	
    }
	
    return (
        <button 
            className="w-screen h-14 bg-slate-400 flex justify-between"
            onClick={toggleExpanded}
        >
            <h3 className="text-white text-3xl py-2 px-2">{name}</h3>
            <h3 className="text-white text-center my-1 text-3xl py-2 px-2">{expandIcon}</h3>
        </button>
	)
}

export default EducationSection

// Packages
import { useState } from 'react'
// Packages
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const EducationSection = (props) => {
    const { name, expand } = props

    const moreComponent = <MdKeyboardArrowDown/>
	const lessComponent = <MdKeyboardArrowUp/>
    const expandedSection = "h-104"
	const collapsedSection = "h-0 hidden"

    const initExpanded = (expand) ? true : false
    const initIcon = (expand) ? lessComponent : moreComponent
    const initSection = (expand) ? expandedSection : collapsedSection

    const [expanded, setExpanded] = useState(initExpanded)
    const [expandIcon, setExpandIcon] = useState(initIcon)
    const [expandSectionClass, setExpandSectionClass] = useState(initSection)

    const changeElementOnExpandedChange = (setState, collapsed, extdended) => {
		if (expanded) {
			setState(collapsed)
		} else {
			setState(extdended)
		}
	}

	const toggleExpanded = () => {
		setExpanded(!expanded)
		changeElementOnExpandedChange(
            setExpandIcon, moreComponent, lessComponent
        )
        changeElementOnExpandedChange(
            setExpandSectionClass, collapsedSection, expandedSection
        )
    }
	
    return (
        <article>
            <button 
                className="w-screen bg-slate-400 flex justify-between"
                onClick={toggleExpanded}
            >
                <h3 className="text-white text-3xl py-2 px-2">{name}</h3>
                <h3 className="text-white text-center my-1 text-3xl py-2 px-2">{expandIcon}</h3>
            </button>
            <div className={"" + expandSectionClass}>

            </div>
        </article>
	)
}

export default EducationSection

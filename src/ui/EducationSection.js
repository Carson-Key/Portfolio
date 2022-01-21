// Packages
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
// Components
import ConditionalRender from '../components/ConditionalRender'

const EducationSection = (props) => {
    const { name, expand, children, years, gpa } = props

    const moreComponent = <MdKeyboardArrowDown/>
	const lessComponent = <MdKeyboardArrowUp/>
    const expandedSection = "h-128"
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
                <div className="text-white text-3xl my-auto flex divide-x divide-solid">
                    <h3 className="text-base lg:text-3xl my-2 lg:my-3 px-2">{name}</h3>
                    <h3 className="text-base lg:text-3xl my-2 lg:my-3 px-2">{years}</h3>
                    <ConditionalRender condition={gpa} >
                        <h3 className="text-base lg:text-3xl my-2 lg:my-3 px-2">GPA: {gpa}</h3>
                    </ConditionalRender>
                </div>
                <h3 className="text-white text-center my-2 text-3xl py-2 px-2">{expandIcon}</h3>
            </button>
            <div className={"flex flex-wrap justify-evenly overflow-scroll " + expandSectionClass}>
                {children}
            </div>
        </article>
	)
}

export default EducationSection

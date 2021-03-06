// Packages
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
// Components
import Card from '../../components/Card'
import CardTitle from '../../components/CardTitle'
// UI
import ExperienceCardBody from './ExperienceCardBody'
import ExperienceCardFooter from './ExperienceCardFooter'

const WorkCard = (props) => {
	const { 
		title, id,
		imageSrc, imageAlt,
		description, role, years,
		shortDecription, projects
	} = props

	const moreComponent = <p>more<MdKeyboardArrowDown className="inline" /></p>
	const lessComponent = <p>less<MdKeyboardArrowUp className="inline" /></p>
	const expandedCardClass = "h-112 lg:h-96 lg:w-128"
	const collapsedCardClass = "h-96 lg:w-80"
	const expandedCardBodyClass = "h-100 lg:h-72"
	const collapsedCardBodyClass = "h-72"
	const expadedImgClass = "mt-1 lg:mx-3 lg:mt-2 lg:mb-0 lg:float-left "
	const collapsedImgClass = "mt-1"

	const [expanded, setExpanded] = useState(false)
	const [expandButtonText, setExpandButtonText] = useState(moreComponent)
	const [expandCardClass, setExpandCardClass] = useState(collapsedCardClass)
	const [expandCardBodyClass, setExpandCardBodyClass] = useState(collapsedCardBodyClass)
	const [expandImgClass, setExpandImgClass] = useState(collapsedImgClass)

	const changeElementOnExpandedChange = (setState, collapsed, extdended) => {
		if (expanded) {
			setState(collapsed)
		} else {
			setState(extdended)
		}
	}

	const toggleExpanded = () => {
		setExpanded(!expanded)
		changeElementOnExpandedChange(setExpandButtonText, moreComponent, lessComponent)
		changeElementOnExpandedChange(setExpandCardClass, collapsedCardClass, expandedCardClass)
		changeElementOnExpandedChange(setExpandCardBodyClass, collapsedCardBodyClass, expandedCardBodyClass)
		changeElementOnExpandedChange(setExpandImgClass, collapsedImgClass, expadedImgClass)
	}

    return (
		<Card id={id} className={"transition-all duration-500 ease-out " + expandCardClass}>
			<CardTitle>
				{title}
			</CardTitle>
			<ExperienceCardBody 
				expanded={expanded}
				imageSrc={imageSrc}
				imageAlt={imageAlt}
				description={description}
				role={role}
				projects={projects}
				expandImgClass={expandImgClass}
				expandCardBodyClass={expandCardBodyClass}
				shortDecription={shortDecription}
			/>
			<ExperienceCardFooter
				years={years}
				toggleExpanded={toggleExpanded}
				expandButtonText={expandButtonText}
			/>
		</Card>
	)
}

export default WorkCard

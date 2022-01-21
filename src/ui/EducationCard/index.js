// Packages
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
// Components
import Card from '../../components/Card'
import CardTitle from '../../components/CardTitle'
// UI
import EducationCardBody from './EducationCardBody'
import EducationCardFooter from './EducationCardFooter'

const EducationCard = (props) => {
	const { 
		title, id,
		term, year,
		objective, textbook,
		grade, credits, projects,
		requirments, description, disableMore
	} = props

	const moreComponent = <p>more<MdKeyboardArrowDown className="inline" /></p>
	const lessComponent = <p>less<MdKeyboardArrowUp className="inline" /></p>
	const expandedCardClass = "h-112 lg:h-96 lg:w-128"
	const collapsedCardClass = "h-96 lg:w-80"
	const expandedCardBodyClass = "h-102 lg:h-76"
	const collapsedCardBodyClass = "h-76"

	const [expanded, setExpanded] = useState(false)
	const [expandButtonText, setExpandButtonText] = useState(moreComponent)
	const [expandCardClass, setExpandCardClass] = useState(collapsedCardClass)
	const [expandCardBodyClass, setExpandCardBodyClass] = useState(collapsedCardBodyClass)

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
	}

    return (
		<Card id={id} className={"transition-all duration-500 ease-out " + expandCardClass}>
			<CardTitle>
				{title}
			</CardTitle>
			<EducationCardBody 
				expanded={expanded}
				expandCardBodyClass={expandCardBodyClass}
				objective={objective}
				textbook={textbook}
				grade={grade}
				credits={credits}
				projects={projects}
				requirments={requirments}
				description={description}
			/>
			<EducationCardFooter
				term={term}
				year={year}
				toggleExpanded={toggleExpanded}
				expandButtonText={expandButtonText}
				disableMore={disableMore}
			/>
		</Card>
	)
}

export default EducationCard

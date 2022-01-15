// Packages
import { useState } from 'react'
// Components
import Card from '../../components/Card'
import CardTitle from '../../components/CardTitle'
import ConditionalRender from '../../components/ConditionalRender'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
// UI
import ProjectCardBody from './ProjectCardBody'
import ProjectCardFooter from './ProjectCardFooter'

const ProjectCard = (props) => {
	const { 
		title, 
		imageSrc, imageAlt,
		shortDescription, longDescription, techDescription,
		projectLink, githubLink, work, education
	} = props

	const moreComponent = <p>more<MdKeyboardArrowDown className="inline" /></p>
	const lessComponent = <p>less<MdKeyboardArrowUp className="inline" /></p>
	const expandedCardClass = "h-112 lg:h-96 lg:w-128"
	const collapsedCardClass = "h-96 lg:w-80"
	const expandedCardBodyClass = "h-98 lg:h-68"
	const collapsedCardBodyClass = "h-68"
	const expadedImgClass = "float-left mx-3 mt-2 mb-0"
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
		<Card className={"transition-all duration-500 ease-out " + expandCardClass}>
			<CardTitle>
				{title}
			</CardTitle>
			<ProjectCardBody 
				imageSrc={imageSrc}
				imageAlt={imageAlt}
				shortDescription={shortDescription}
				longDescription={longDescription}
				techDescription={techDescription}
				expanded={expanded}
				expandImgClass={expandImgClass}
				expandCardBodyClass={expandCardBodyClass}
				projectLink={projectLink}
				work={work}
				education={education}
			/>
			<ProjectCardFooter
				githubLink={githubLink}
				toggleExpanded={toggleExpanded}
				expandButtonText={expandButtonText}
			/>
		</Card>
	)
}

export default ProjectCard

// Packages
import { useState } from 'react'
// Components
import Card from '../components/Card'
import CardTitle from '../components/CardTitle'
import ConditionalRender from '../components/ConditionalRender'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = (props) => {
	const { 
		title, 
		imageSrc,
		imageAlt,
		shortDescription,
		longDescription,
		techDescription,
		projectLink, 
		githubLink,
		work
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

	const changeExpandButtonText = (currentExpand) => {
		if (currentExpand) {
			setExpandButtonText(moreComponent)
		} else {
			setExpandButtonText(lessComponent)
		}
	}
	const changeExpandCardClass = (currentExpand) => {
		if (currentExpand) {
			setExpandCardClass(collapsedCardClass)
		} else {
			setExpandCardClass(expandedCardClass)
		}
	}
	const changeExpandCardBodyClass = (currentExpand) => {
		if (currentExpand) {
			setExpandCardBodyClass(collapsedCardBodyClass)
		} else {
			setExpandCardBodyClass(expandedCardBodyClass)
		}
	}
	const changeExpandImgClass = (currentExpand) => {
		if (currentExpand) {
			setExpandImgClass(collapsedImgClass)
		} else {
			setExpandImgClass(expadedImgClass)
		}
	}
	const toggleExpanded = () => {
		setExpanded(!expanded)
		changeExpandButtonText(expanded)
		changeExpandCardClass(expanded)
		changeExpandCardBodyClass(expanded)
		changeExpandImgClass(expanded)
	}

    return (
		<Card className={"transition-all duration-500 ease-out " + expandCardClass}>
			<CardTitle>
				{title}
			</CardTitle>
			<div className={"transition-all duration-500 ease-out overflow-scroll " + expandCardBodyClass}>
				<ConditionalRender condition={imageSrc && imageAlt}>
					<img className={"w-44 mx-auto h-auto mb-1 " + expandImgClass} src={imageSrc} alt={imageAlt} />
				</ConditionalRender>
				<ConditionalRender condition={shortDescription && !expanded}>
					<p className="block my-3 mx-2 text-center">{shortDescription}</p>
				</ConditionalRender>
				<ConditionalRender condition={longDescription && expanded}>
					<h5 className="mt-2 mb-1 mx-2 font-bold">Project Description</h5>
					<p className="block mt-1 mb-3 mx-2">{longDescription}</p>
				</ConditionalRender>
				<ConditionalRender condition={techDescription && expanded}>
					<h5 className="mt-2 mb-1 mx-2 font-bold">Tech Description</h5>
					<p className="block mt-1 mb-3 mx-2">{techDescription}</p>
				</ConditionalRender>
			</div>
			<div className="transition-all duration-500 ease-out my-2 mx-auto">
				<center>
					<ConditionalRender condition={projectLink}>
						<a className="mx-2 bg-primary rounded text-white px-2 py-1" href={projectLink}>To Project</a>
					</ConditionalRender>
					<ConditionalRender condition={work}>
						<a className="mx-2 bg-primary rounded text-white px-2 py-1" href={work}>To Word Card</a>
					</ConditionalRender>
				</center>
			</div>
			<div className="transition-all duration-500 ease-out flex justify-between mx-3 mb-1 mt-2">
				<div>
					<ConditionalRender condition={githubLink}>
						<a href={githubLink} className="text-2xl"><FaGithub /></a>
					</ConditionalRender>
				</div>
				<button onClick={toggleExpanded} className="text-lg text-primary underline">{expandButtonText}</button>
			</div>
		</Card>
	)
}

export default ProjectCard

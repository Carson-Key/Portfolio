// Packages
import { useState } from 'react'
// Components
import Card from '../components/Card'
import Anchor from '../components/Anchor'
import CardTitle from '../components/CardTitle'
import ConditionalRender from '../components/ConditionalRender'
import { MdKeyboardArrowDown } from 'react-icons/md'

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
	const [expanded, setExpanded] = useState(false)
	const [expandButtonText, setExpandButtonText] = useState(<p>more<MdKeyboardArrowDown className="inline" /></p>)

	const changeExpandButtonText = (currentExpand) => {
		if (currentExpand) {
			setExpandButtonText("more")
		} else {
			setExpandButtonText("less")
		}
	}
	const toggleExpanded = () => {
		setExpanded(!expanded)
		changeExpandButtonText(expanded)
	}

    return (
		<Card>
			<CardTitle>
				{title}
			</CardTitle>
			<ConditionalRender condition={imageSrc && imageAlt}>
				<img className="w-full h-auto block mb-2" src={imageSrc} alt={imageAlt} />
			</ConditionalRender>
			<ConditionalRender condition={shortDescription && !expanded}>
				<p className="block my-2 mx-2 text-center">{shortDescription}</p>
			</ConditionalRender>
			<ConditionalRender condition={longDescription && expanded}>
				<p className="block my-2 mx-2">{longDescription}</p>
			</ConditionalRender>
			<ConditionalRender condition={techDescription && expanded}>
				<p className="block my-2 mx-2">{techDescription}</p>
			</ConditionalRender>
			<section className="my-2 mx-auto">
				<center>
					<ConditionalRender condition={projectLink}>
						<a className="mx-2 bg-primary rounded text-white px-2 py-1" href={projectLink}>To Project</a>
					</ConditionalRender>
					<ConditionalRender condition={githubLink}>
						<a className="mx-2" href={githubLink}>To Github</a>
					</ConditionalRender>
					<ConditionalRender condition={work}>
						<a className="mx-2 bg-primary rounded text-white px-2 py-1" href={work}>To Word Card</a>
					</ConditionalRender>
				</center>
			</section>
			<section className="flex justify-end mx-3 mb-1">
				<button onClick={toggleExpanded}>{expandButtonText}</button>
			</section>
		</Card>
	)
}

export default ProjectCard

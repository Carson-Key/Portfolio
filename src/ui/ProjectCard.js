// Packages
import { useState } from 'react'
// Components
import Card from '../components/Card'
import CardTitle from '../components/CardTitle'
import ConditionalRender from '../components/ConditionalRender'

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

	const toggleExpanded = () => {
		setExpanded(!expanded)
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
				<p className="block my-2 mx-2">{shortDescription}</p>
			</ConditionalRender>
			<ConditionalRender condition={longDescription && expanded}>
				<p className="block my-2 mx-2">{longDescription}</p>
			</ConditionalRender>
			<ConditionalRender condition={techDescription && expanded}>
				<p className="block my-2 mx-2">{techDescription}</p>
			</ConditionalRender>
			<ConditionalRender condition={projectLink}>
				<a className="block my-2 mx-2" href={projectLink}>Link to Project</a>
			</ConditionalRender>
			<ConditionalRender condition={githubLink}>
				<a className="block my-2 mx-2" href={githubLink}>Link to Github</a>
			</ConditionalRender>
			<ConditionalRender condition={work}>
				<a className="block my-2 mx-2" href={work}>Link to Word Card</a>
			</ConditionalRender>
			<button onClick={toggleExpanded}>more</button>
		</Card>
	)
}

export default ProjectCard

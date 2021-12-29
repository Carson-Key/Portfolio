// Components
import Card from '../components/Card'
import CardTitle from '../components/CardTitle'
import ConditionalRender from '../components/ConditionalRender'

const ProjectCard = (props) => {
	const { 
		title, 
		imageSrc,
		imageAlt, 
		description, 
		projectLink, 
		githubLink,
		work
	} = props

    return (
		<Card>
			<CardTitle>
				{title}
			</CardTitle>
			<ConditionalRender condition={imageSrc && imageAlt}>
				<img className="w-full h-auto block" src={imageSrc} alt={imageAlt} />
			</ConditionalRender>
			<p className="block">{description}</p>
			<ConditionalRender condition={projectLink}>
				<a className="block" href={projectLink}>Link to Project</a>
			</ConditionalRender>
			<ConditionalRender condition={githubLink}>
				<a className="block" href={githubLink}>Link to Github</a>
			</ConditionalRender>
			<ConditionalRender condition={work}>
				<a className="block" href={work}>Link to Word Card</a>
			</ConditionalRender>
		</Card>
	)
}

export default ProjectCard

// Components
import Card from '../components/Card'
import CardTitle from '../components/CardTitle'

const ProjectCard = (props) => {
	const { 
		title, 
		image, 
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
			<img className="w-full h-auto block" src={image.src} alt={image.alt} />
			<p className="block">{description}</p>
			<a className="block" href={projectLink}>Link to Project</a>
			<a className="block" href={githubLink}>Link to Github</a>
			<a className="block" href={work}>Link to Word Card</a>
		</Card>
	)
}

export default ProjectCard

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
			<img src={image.src} alt={image.alt} />
			<p>{description}</p>
			<a href={projectLink}>Link to Project</a>
			<a href={githubLink}>Link to Github</a>
			<a href={work}>Link to Word Card</a>
		</Card>
	)
}

export default ProjectCard

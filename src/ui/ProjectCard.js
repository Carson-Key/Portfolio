// Components
import Card from '../components/Card'

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
			<h3 className="rounded-t-xl bg-secondary text-white h-10 content-center">
				<center>
					{title}
				</center>
			</h3>
			<img src={image.src} alt={image.alt} />
			<p>{description}</p>
			<a href={projectLink}>Link to Project</a>
			<a href={githubLink}>Link to Github</a>
			<a href={work}>Link to Word Card</a>
		</Card>
	)
}

export default ProjectCard

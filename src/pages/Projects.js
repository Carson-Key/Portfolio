// Components
import Container from '../components/Container'
import ProjectCard from '../ui/ProjectCard'
// Assets
import BabyYoda from '../assets/baby_yoda.jpeg'

const Projects = () => {
    return (
		<Container className="flex flex-wrap justify-evenly">
			<ProjectCard
				title="Test Card"
				image={
					{
						src: BabyYoda,
						alt: "baby yoda"
					}
				}
				description="This is a test project"
				projectLink="google.com"
				githubLink="github.com"
				work="brokengm.com"
			 />
		</Container>
	)
}

export default Projects

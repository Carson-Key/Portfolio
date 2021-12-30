// Components
import Container from '../components/Container'
import ProjectCard from '../ui/ProjectCard'
// Assets
import Logo from '../assets/Portfolio-Logo-Card.png'

const Projects = () => {
    return (
		<Container className="flex flex-wrap justify-evenly">
			<ProjectCard
				title="This Very Portfolio!"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				description="I wanted to make a portfolio that would both display my accomplishments and experiences, but to also act as one. This portfolio website was created using React.js for frontend, Tailwind for css, GraphQL for backend, and AWS Amplify as a serverless framework. In a design perspective this is overkill, a portfolio website is as static of a website as they come. HTML and Tailwind would have done the job at a far better labor cost. But I decided that the extra costs in design, testing, and implemtation would not outweigh the benefits of having a far more presentable portfolio with a better display of my skills."
				projectLink="/"
				githubLink="https://github.com/Carson-Key/Portfolio"
			 />
		</Container>
	)
}

export default Projects

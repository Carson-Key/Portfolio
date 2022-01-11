// Components
import Container from '../components/Container'
import ProjectCard from '../ui/ProjectCard'
// Assets
import Logo from '../assets/Logo-512.png'
import LogoGuardianGroup from '../assets/Logo-GuardianGroup.png'
import LogoCBTNuggets from '../assets/Logo-CBTNuggets.png'
import LogoOSU from '../assets/Logo-OSU.png'
import LogoAHC from '../assets/Logo-AHC.jpg'

const Projects = () => {
    return (
		<Container className="flex flex-wrap justify-evenly">
			<ProjectCard
				title="This Very Portfolio!"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				shortDescription="This portfolio is far more than a static page, it uses React for frontend and AWS Amplify to handle all the backend."
				longDescription="I wanted to make a portfolio that would both display my accomplishments and experiences, but to also act as one. This portfolio website was created using React.js for frontend, Tailwind for css, GraphQL for backend, and AWS Amplify as a serverless framework. In a design perspective this is overkill, a portfolio website is as static of a website as they come. HTML and Tailwind would have done the job at a far better labor cost. But I decided that the extra costs in design, testing, and implemtation would not outweigh the benefits of having a far more presentable portfolio with a better display of my skills."
				techDescription="In this project I used some cutting egde frameworks, libraries, project managment and design techiques. To start the frontend is done in React, and utilised to dynamically render a variable amount of data gathered from a GraphQL backend. React is also used to provided a responsive user experience with seemless page navigation and interaction. To handle all the backend and hosting I decided to use AWS's Amplify. Which uses a Dynamo database to store all content, then a GraphQL endpoint to request this data from a client browser in a CMS like fashion."
				projectLink="/"
				githubLink="https://github.com/Carson-Key/Portfolio"
			 />
			 <ProjectCard
				title="Portfolio Manager"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				shortDescription=""
				longDescription=""
				techDescription=""
			 />
			 <ProjectCard
				title="OSU-C Capstone - Guardian Group"
				imageSrc={LogoGuardianGroup}
				imageAlt={"A capital blue G with a side shot of a light blue face silhouette inside"}
				shortDescription=""
				longDescription=""
				techDescription=""
			 />
			 <ProjectCard
				title="Roll20 MM 3e Chrome Extension"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				shortDescription=""
				longDescription=""
				techDescription=""
				githubLink="https://github.com/Carson-Key/Metamorph-Manager-Chrome"
			 />
			 <ProjectCard
				title="CBT Nuggets - QA Test Project"
				imageSrc={LogoCBTNuggets}
				imageAlt={"Two lower case g's made of three golden circles"}
				shortDescription=""
				longDescription=""
				techDescription=""
			 />
			 <ProjectCard
				title="CBT Nuggets - QA Statistics Dashboard"
				imageSrc={LogoCBTNuggets}
				imageAlt={"Two lower case g's made of three golden circles"}
				shortDescription=""
				longDescription=""
				techDescription=""
			 />
			 <ProjectCard
				title="OSU IT - Product Status Page"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription=""
				longDescription=""
				techDescription=""
			 />
			 <ProjectCard
				title="DnD Timeline"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				shortDescription=""
				longDescription=""
				techDescription=""
				githubLink="https://github.com/Carson-Key/dnd-timeline"
			 />
			 <ProjectCard
				title="Alyce Hatch Center Website"
				imageSrc={LogoAHC}
				imageAlt={"Alyce Hatch Center written out with a child reaching for a star next to the words"}
				shortDescription=""
				longDescription=""
				techDescription=""
				githubLink="https://github.com/Carson-Key/AlyceHatchWebSite"
			 />
			 <ProjectCard
				title="SE 303 - Final Project"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription=""
				longDescription=""
				techDescription=""
				githubLink="https://github.com/Carson-Key/SE-303-House-Project"
			 />
			 <ProjectCard
				title="SE 201 - Final Project"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription=""
				longDescription=""
				techDescription=""
				githubLink="https://github.com/Carson-Key/trade-wars-static"
			 />
			 <ProjectCard
				title="CS 261 - Final Project"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription=""
				longDescription=""
				techDescription=""
				githubLink="https://github.com/Carson-Key/data-structures-handbook"
			 />
		</Container>
	)
}

export default Projects

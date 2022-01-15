// Components
import Container from '../components/Container'
import ProjectCard from '../ui/ProjectCard'
// Assets
import Logo from '../assets/Logo-512.png'
import LogoGuardianGroup from '../assets/Logo-GuardianGroup.png'
import LogoCBTNuggets from '../assets/Logo-CBTNuggets.png'
import LogoOSU from '../assets/Logo-OSU.png'
import LogoAHC from '../assets/Logo-AHC.png'
import LogoMM from '../assets/Logo-MM.png'

const Projects = () => {
    return (
		<Container className="flex flex-wrap justify-evenly">
			<ProjectCard
				title="This Very Portfolio!"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				shortDescription="This portfolio is far more than a static page, it uses React for frontend and AWS Amplify to handle all the backend."
				longDescription="I wanted to make a portfolio that would both display my accomplishments and experiences, but to also act as one. This portfolio website was created using React.js for frontend, Tailwind for css, GraphQL for backend, and AWS Amplify as a serverless framework. In a design perspective this is overkill, a portfolio website is as static of a website as they come. HTML and Tailwind would have done the job at a far better labor cost. But I decided that the extra costs in design, testing, and implemtation would not outweigh the benefits of having a far more presentable portfolio with a better display of my skills."
				techDescription="In this project I used some cutting egde frameworks, libraries, project managment and design techiques. To start the frontend is done in React, and utilised to dynamically render a variable amount of data gathered from a GraphQL backend. React is also used to provided a responsive user experience with seemless page navigation and interaction. To handle all the backend and hosting I decided to use AWS's Amplify. Which uses a Dynamo database to store all content, then a GraphQL endpoint to request this data from a client browser in a CMS like fashion. Finally I used tailwind to style the front end."
				projectLink="/"
				githubLink="https://github.com/Carson-Key/Portfolio"
			 />
			 <ProjectCard
				title="Portfolio Manager"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				shortDescription="To manange the content of this portfolio, there is an electron app that hits the endpoint for instant changes/additions."
				longDescription="Because I wanted my portfolio website to be the best display of my skills possible, I decided to make a psuedo CMS website. But to manage the CMS I wanted to do something more than just add an admin page to the site, so I went with an electron app to show a more diverse set of skills than just pure web development."
				techDescription="To accomplish my goals I went with a React based Electron app, with AWS' amplify to hit the portfolio's GarphQL backend. The tech stack for this project is almost the exact same as the portfolio, with the addition of Electron, so for a more detailed look expand the Portfolio card under the Projects page."
				githubLink="https://github.com/Carson-Key/Portfolio-Manager"
			 />
			 <ProjectCard
				title="OSU-C Capstone - Guardian Group"
				imageSrc={LogoGuardianGroup}
				imageAlt={"A capital blue G with a side shot of a light blue face silhouette inside"}
				shortDescription="This project was a web based application to help automate the Guardian Groups mission"
				longDescription="For my senior capstone project me and two other computer science seniors created a web product for Guardian Group, and it was such a pleasure to work on. The idea was to make a platform for a community of volunteers to help the non profit Guardian Group. Unfortunatly because of an NDA I am limited in my discussion of this project. However I can say some stuff, like this was a green field idea and had no prior work done. To start we worked with a local firm, Effectual, to help us get the start for the project. We worked with a UI/UX to get a basic wireframe of the project. After that our team gathered requirments from the client (Guardian Group/Effectual). Then we all decided (The team of seniors and Effectual) to make a React front end with an AWS Amplify backend, so that we could make a high quility application with relative quickness. The main goal of this application was give us valuible industry experience to use in our careers. This included Agile development, modern frame works, modern backend, requirments gathering, working with a UI/UX team, deployemnt automations, test suite development, and team based full stack projects."
				techDescription="Because of an NDA I can't go into great detail of the technology used. However, we used React, AWS Amplify, GraphQl, and Tailwind."
			 />
			 <ProjectCard
				title="Roll20 MM Chrome Extension"
				imageSrc={LogoMM}
				imageAlt={"A dull red flatted 20 sided dice with overlaying Ms in the middle"}
				shortDescription="A personal project to make my virtual M&M (like Dungeons & Dragons, but super heros) experience easier"
				longDescription="During my summer after gratuating me and my Dungeons and Dragons group started playing a similar table top called Mutants and Masterminds. While playing I noticed that there were a lot of dynamic changing that our virtual table top (Roll 20) didn't support. So I decided to make a chrome extension to handle this for me. Which ended up taking a lot more work than I originally thought. I needed to learnhow to use the chrome extension library to scrap a website, and then I needed to learn how Roll20 handled its data in the DOM without the source code. This posed a pretty difficult problem, of working entirely in the DOM. Ultimatly I made something I'm proud of, can be refactored for other aspects of the game with ease, and a better understanding/appreciation of the DOM."
				techDescription="This project doesn't use anything too fancy like some of my other projects. It uses Jquerry for easy DOM searching, and Chrome's extension library. One of the things I'm most proud of accomplishing in this project was the web scrapping. I'd done web scrapping before, but never to a site like Roll20. Roll20 uses some form of Ruby on Rails or PHP equivalent to modify values, and some form of a canvas to render them. This lead to manipulating a grabbing fields being more than just a simple querry with jquerry. I had to dig and come up with creative solutions to overcome the challenges."
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
				githubLink=""
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
			 <ProjectCard
				title="CS 493 - Project: Front End"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription=""
				longDescription=""
				techDescription=""
				projectLink="https://cs-493-hw1.web.app/"
				githubLink="https://github.com/Carson-Key/CS493-FrontEnd"
			 />
			 <ProjectCard
				title="CS 493 - Project: Back End"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription=""
				longDescription=""
				techDescription=""
				projectLink="https://cs-493-hw1.web.app/"
				githubLink="https://github.com/Carson-Key/CS-493-BackEnd"
			 />
			 <ProjectCard
				title="CS 493 - Project: Electron"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription=""
				longDescription=""
				techDescription=""
				projectLink="https://cs-493-hw1.web.app/"
				githubLink="https://github.com/Carson-Key/carson-key-aws-and-s3-electron-app"
			 />
		</Container>
	)
}

export default Projects

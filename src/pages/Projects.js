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
				years="2022"
			/>
			<ProjectCard
				title="Portfolio Manager"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				shortDescription="To manange the content of this portfolio, there is an electron app that hits the endpoint for instant changes/additions."
				longDescription="Because I wanted my portfolio website to be the best display of my skills possible, I decided to make a psuedo CMS website. But to manage the CMS I wanted to do something more than just add an admin page to the site, so I went with an electron app to show a more diverse set of skills than just pure web development."
				techDescription="To accomplish my goals I went with a React based Electron app, with AWS' amplify to hit the portfolio's GarphQL backend. The tech stack for this project is almost the exact same as the portfolio, with the addition of Electron, so for a more detailed look expand the Portfolio card under the Projects page."
				githubLink="https://github.com/Carson-Key/Portfolio-Manager"
				years="2022"
			/>
			<ProjectCard
				title="OSU-C Capstone - Guardian Group"
				imageSrc={LogoGuardianGroup}
				imageAlt={"A capital blue G with a side shot of a light blue face silhouette inside"}
				shortDescription="This project was a web based application to help automate the Guardian Groups mission"
				longDescription="For my senior capstone project me and two other computer science seniors created a web product for Guardian Group, and it was such a pleasure to work on. The idea was to make a platform for a community of volunteers to help the non profit Guardian Group. Unfortunatly because of an NDA I am limited in my discussion of this project. However I can say some stuff, like this was a green field idea and had no prior work done. To start we worked with a local firm, Effectual, to help us get the start for the project. We worked with a UI/UX to get a basic wireframe of the project. After that our team gathered requirments from the client (Guardian Group/Effectual). Then we all decided (The team of seniors and Effectual) to make a React front end with an AWS Amplify backend, so that we could make a high quility application with relative quickness. The main goal of this application was give us valuible industry experience to use in our careers. This included Agile development, modern frame works, modern backend, requirments gathering, working with a UI/UX team, deployemnt automations, test suite development, and team based full stack projects."
				techDescription="Because of an NDA I can't go into great detail of the technology used. However, we used React, AWS Amplify, GraphQl, and Tailwind."
			 	years="2020-2021"
			/>
			<ProjectCard
				title="Roll20 MM Chrome Extension"
				imageSrc={LogoMM}
				imageAlt={"A dull red flatted 20 sided dice with overlaying Ms in the middle"}
				shortDescription="A personal project to make my virtual M&M (like Dungeons & Dragons, but super heros) experience easier"
				longDescription="During my summer after gratuating me and my Dungeons and Dragons group started playing a similar table top called Mutants and Masterminds. While playing I noticed that there were a lot of dynamic changing that our virtual table top (Roll 20) didn't support. So I decided to make a chrome extension to handle this for me. Which ended up taking a lot more work than I originally thought. I needed to learnhow to use the chrome extension library to scrap a website, and then I needed to learn how Roll20 handled its data in the DOM without the source code. This posed a pretty difficult problem, of working entirely in the DOM. Ultimatly I made something I'm proud of, can be refactored for other aspects of the game with ease, and a better understanding/appreciation of the DOM."
				techDescription="This project doesn't use anything too fancy like some of my other projects. It uses Jquerry for easy DOM searching, and Chrome's extension library. One of the things I'm most proud of accomplishing in this project was the web scrapping. I'd done web scrapping before, but never to a site like Roll20. Roll20 uses some form of Ruby on Rails or PHP equivalent to modify values, and some form of a canvas to render them. This lead to manipulating a grabbing fields being more than just a simple querry with jquerry. I had to dig and come up with creative solutions to overcome the challenges."
				githubLink="https://github.com/Carson-Key/Metamorph-Manager-Chrome"
				years="2021"
			/>
			<ProjectCard
				title="CBT Nuggets - Bug Hunt"
				imageSrc={LogoCBTNuggets}
				imageAlt={"Two lower case g's made of three golden circles"}
				shortDescription="A Scavenger Hunt for Bugs, to use in QA Engineer interviews"
				background="CBT Nuggets was looking to better their QA engineer interview process to test canidents in selenium (and other test automation frameworks/libraries). They hired me as an Intern to create a 'Scanvenger Hunt' like project to accomplish his goal. I am unfortunatly limited in my discussion of details by an NDA."
				longDescription="This project was the first industry expeirence that I ever did, and it was a blast! The idea of behind the project was to intentionally create a bug filled website, which was perfect for an 18 year old college freshmen. That's not to say I didn't spend time on debugging and QA, I still fixed everything that caused compelete application breakdown. It put less pressure on me to make a bug free production application, because every litle bug could help in the interview. The actual project was based on a college assignment that some of my colluges at OSU - Cascades did in a class, it was a population simulatur. The population was represented by a bunch of dots, these dots would duplicate if they were near another dot and each dot had enough food to duplicate. The simulation had configuarable settings to control the populations growth/start, which could change how the simulation went. I terms of bugs there was all kinds, from a static copyright date to a wrong title, to a crash when a specific thing happened, to a serverside console log."
				techDescription="The project used React for frontend, and was my first exposure into React and helped develope my love for the framework. It used Firebase for backend to maintain a saved setting configuration for cross device saving. Finally it used Bootstarpe as a baseline CSS library"
				work="/"
				years="2018"
			/>
			<ProjectCard
				title="CBT Nuggets - QA Statistics Dashboard"
				imageSrc={LogoCBTNuggets}
				imageAlt={"Two lower case g's made of three golden circles"}
				shortDescription="An addition to the CBT Nuggets internal dashboard to show continuous testing statistics"
				background="After compeleting the Bug Hunt project I still had some time left at CBT Nuggets, so my team lead gave me an extra project. Which was to add a Test Automation section to CBT Nuggets internal dashboard, and display the reports given by our continuous tests product (SauceLabs in this situation). Unfortunatly I am limited in my discussion of this project, because of an NDA."
				longDescription="This was a fairly simple project, only using the SauceLabs api to gather statistcs and display them in a meaningful way with charts/tables/ect. The main goal was to show the rest of the company as to how powerful test automation is. This project was really cool, I love to mess with data and display tthem in a dashboard."
				techDescription="This project used React as a frontend, some internally developed libraries for the dashboard functionality, S3/Lambda for api key hosting, SauceLabs API to grab the test data, and an internally developed CSS library."
				work="/"
				years="2018"
			/>
			<ProjectCard
				title="OSU IT - Product Status Page"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription="A dashboard to display the status of various products that Oregon State University IT maintains"
				background="At Oregon State University every moring the director of IT goes to five product websites (this includs Microsoft 365, Box, Kaltura, Instruture, and Zoom), looks at their status, and then sends out an email to all employees on the current status. My boss, who was an assitant director under the directer thought that the process could be automatted, and she had me develope a dashboard to display the statuses."
				longDescription="This is hands down my favorite project, I love making dashboards that hit an API and display data. When I first started this project I thought that I might have to do some funky web scraping workarounds to automate the data retrival. Then while looking into how the product's status pages worked I found that 4 (Microsoft 365 used an admin blocked page to display status) of them used the exact same API to get their data and those APIs were all public! After making a card system to display each status page (similar to the one used in this portfolio!) I thought that I could make this dashboard work for a variable amount of status pages that used the same API. After getting approval from the client (in this situation it was my boss), I made a page to add new status cards and a way through url atributes. Where all new status pages get saved as a cookie, and can be enabled/disabled and deleted when the used doesn't need it. I did this because I wanted to make a dashboard that would outlive my employment at OSU, which knowing that these products would change as time went on I found the variable approach the best option. And it would allow each user to set up a different array for their indiviual needs."
				techDescription="This project uses React for the frontend, Firebase for hosting, react-cookies for hook based cookie managment, and Tailwind for a CSS library."
				githubLink="https://github.com/Carson-Key/OSU-Products-Dashboard"
				projectLink="https://osu-products-status.web.app/"
				work="/"
				years="2021"
			/>
			<ProjectCard
				title="DnD Timeline"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				shortDescription="A website to help give history and life to my D&D worlds and share them to my players"
				background="One of my life's passions is D&D, and other Tabletop RPGs, its the thing I look forward to every week. One of the problems I saw in 2019 was that I couldn't share my world with my players. So, I came up wih DnD Timeline tto help solve that issue. In the begining I used this as a way to keep track for my sake, but eventually I added functionality that would allow me to share it to my players and even use as a way to share new character knowledge to thier player."
				longDescription="This is a personal project I started to keep track of historical events of my various D&D worlds, eventually becoming a place for my players to visit as well. This was my frist presonal project that I made to better my personal life, and although I may have moved onto a professionally managed application, this project still helped further develope my love for react that started at my CBT Nuggets job."
				techDescription="This is a fairly simple project (tech stack wise, there is some more complex javascript going on in the project), only using React for frontend and Bootstrap for CSS."
				githubLink="https://github.com/Carson-Key/dnd-timeline"
				projectLink="https://carson-key.github.io/dnd-timeline/"
				years="2019-2020"
			/>
			<ProjectCard
				title="Alyce Hatch Center Website"
				imageSrc={LogoAHC}
				imageAlt={"Alyce Hatch Center written out with a child reaching for a star next to the words"}
				shortDescription="A website for the non-profit Alyce Hatch Center, which is a pre-school for children with special needs"
				background="In high school my brother, who has aniridia and various vision problems associated with it, started attending he school. Their website at the was pretty old and lacked a lot of modern features and designs that they needed to get donors. So I offered to make them a website, and maintained that website until 2021 when their board disolved the non-profit and donated their assests to High Desert Education."
				longDescription="This project was just a simple static website, which would display various peices of information. Including: mission, testamonials, volunteering, their facebook feed, and a donation link. The only dynamic portion of the website (besides the facebook feed) was a background image on the donation page that would change based on the season."
				techDescription="This website, despite being static, actually posed some intereting challenges. The hosting service that AHC used was very old and limited, where all I could use was html and had to imbed all my styling/scripts in each page. However, the only tech used was HTML for frontend, a custom made CSS library, and javascriptt for the dynamic part."
				githubLink="https://github.com/Carson-Key/AlyceHatchWebSite"
				years="2016-2021"
			/>
			<ProjectCard
				title="SE 303 - Final Project"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription="The rhyme 'The House That Jack Built' in Ruby that uses tecniques discussed by Sandy Metz and Martin Fowler"
				background="This was a project that spaned the enire 3 months of the course SE 303 (Software engineering 3), and the goal was to learn the refactoring techniques that Sandi Metz and Martin Fowler discuss in their books '99 Bottles of OOP' (By Sandy Metz) and 'Refactoring: Improving the Design of Code' (by Marttin Fowler). With more on an emphathis on Metz's teaching for refactoring for new requirments."
				longDescription="This project was to learn using the concepts of Shameless Green as a starting point, then using the Flocking Rules to develope out the project. Which were both discussed by Metz in her book (title mention above). We started the project out by exercising Shameless Green, which is just getting the requirments met with minimum amount of thinking, and in this case that was just printing out the song outright. But then the requirments started to slowly change (as projects do), were we needed to start using the Flocking rules to refactor, which at simplest is just do the tiniest change you can do. The end result was to refactor until the addtions we needed to make for the new requirments wouldn't be changing exsiting code, but adding new code. This line of thought had an end result of some very elegant solutions, and I recommend looking at the commit log and seeing the evolution of the projeect, its quite amazing."
				techDescription="The tech stack for this project was very simple, Ruby for the core of the project and minitests for the testing suit."
				education="/"
				githubLink="https://github.com/Carson-Key/SE-303-House-Project"
				years="2021"
			/>
			<ProjectCard
				title="SE 201 - Final Project"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription=""
				longDescription=""
				techDescription=""
				githubLink="https://github.com/Carson-Key/trade-wars-static"
				years="2019"
			/>
			<ProjectCard
				title="CS 261 - Final Project"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription=""
				longDescription=""
				techDescription=""
				githubLink="https://github.com/Carson-Key/data-structures-handbook"
				years="2019"
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
				years="2021"
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
				years="2021"
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
				years="2021"
			/>
		</Container>
	)
}

export default Projects

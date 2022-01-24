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
				id="portfolio"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				shortDescription="This portfolio is far more than a static page, it uses React for frontend and with plans for an AWS backend"
				background="In my time at OSU Cascades, I learned that one of the best ways to show a potential employer your abilities is in the form of a website. Although I wanted to go a step further and make a portfolio that would both display my accomplishments and experiences, but I also wanted it to act as one."
				longDescription="From a design perspective this is overkill, a portfolio website is as static of a website as they come. HTML and Tailwind would have done the job at a far better labor cost. But I decided that the extra costs in design, testing, and implementation would outweigh their costs by providing a far more presentable portfolio with a better display of my skills."
				techDescription="In this project I used React for a responsive and interactive frontend, React-Scripts for a testing suite, AWS Amplify for hosting with continuous deployment from github, and Tailwind for a CSS library."
				projectLink="/"
				githubLink="https://github.com/Carson-Key/Portfolio"
				years="2022"
			/>
			<ProjectCard
				title="OSU-C Capstone - Guardian Group"
				id="capstone"
				imageSrc={LogoGuardianGroup}
				imageAlt={"A capital blue G with a side shot of a light blue face silhouette inside"}
				shortDescription="This project was a web based application to help automate the Guardian Groups mission"
				background="For my senior Capstone project me and two other computer science seniors created a web product for Guardian Group, and it was such a pleasure to work on. The core idea was to make a platform for a community of volunteers to help the non profit Guardian Group. Unfortunately because of an NDA I am limited in my discussion of this project."
				longDescription="This was almost a complete greenfield project, with only a basic wireframe from a UI/UX team. We worked with a local firm, Effectual, to help us get a start on the project. We worked with a UI/UX to get the existing wireframe of the project. After that our team gathered requirements from the client (Guardian Group and Effectual). In consultation with Effectual, the team decided to make a React frontend with an AWS Amplify backend. Our reasoning being, we could make a high quality application with relative quickness. That could be maintained by Effectual (this tech stack was their standard for greenfield projects). The main goal of this application was to give us valuable industry experience to use in our careers. This included Agile development, modern frameworks, modern backend, requirements gathering, working with a UI/UX team, deployment automations, test suite development, and team based full stack workflows."
				techDescription="Because of an NDA I can't go into great detail of the technology used. However, we used React, AWS Amplify, and Tailwind."
			 	education="#capstoneclass"
				years="2020-2021"
			/>
			<ProjectCard
				title="Roll20 MM Chrome Extension"
				id="rollmm"
				imageSrc={LogoMM}
				imageAlt={"A dull red flatted 20 sided dice with overlaying Ms in the middle"}
				shortDescription="A personal project to make my virtual M&M (like Dungeons & Dragons, but super heros) experience easier"
				background="During my summer after graduating me and my Dungeons and Dragons group started playing a similar table top called Mutants and Masterminds. While playing I noticed that there were a lot of dynamic changes that our virtual tabletop (Roll 20) didn't support. So I decided to make a chrome extension to handle this for me."
				longDescription="This project, like most, ended up taking a lot more work than originally thought. I needed to learn how to use the chrome extension library to scrape a website, and then I needed to learn how Roll20 handled its data in the DOM without the source code. This posed a pretty difficult problem, of working entirely in the DOM. Ultimately I made something I'm very proud of, something that can be refactored for other aspects of the game with ease, and a better understanding/appreciation of the DOM."
				techDescription="This project doesn't use anything too fancy like some of my other projects. It uses Jquery for easy DOM querying, and Chrome's extension library. One of the things I'm most proud of accomplishing in this project was the web scraping. I'd done web scraping before, but never to a site like Roll20. Roll20 uses some form of Ruby on Rails or the PHP equivalent to modify values, and some form of a canvas to render them. This led to manipulating/viewing fields being more than just a simple query with Jquery. I had to dig and come up with creative solutions to overcome the challenges, which I thoroughly enjoyed."
				githubLink="https://github.com/Carson-Key/Metamorph-Manager-Chrome"
				years="2021"
			/>
			<ProjectCard
				title="CBT Nuggets - Bug Hunt"
				id="cbtnuggetsbughunt"
				imageSrc={LogoCBTNuggets}
				imageAlt={"Two lower case g's made of three golden circles"}
				shortDescription="A Scavenger Hunt for Bugs, to use in QA Engineer interviews"
				background="CBT Nuggets was looking to better their QA engineer interview process to test candidates in Selenium (and other test automation frameworks/libraries). They hired me as an Intern to create a 'Scavenger Hunt' like project to accomplish this goal. I am unfortunately limited in my discussion of details by an NDA."
				longDescription="This project was the first industry experience that I ever had, and it was a blast! The idea behind the project was to intentionally create a bug filled website, which was perfect for an 18 year old college freshmen. That's not to say I didn't spend time on debugging and QA, I still fixed everything that caused complete application breakdown. The core concept of this project put less pressure on me to make a bug free production application, because every little bug could help in the interview. The actual project was based on a college assignment that some of my colleagues at OSU - Cascades did in a class, which was a population simulator. The population was represented by a bunch of dots, these dots would duplicate if they were near another dot and if each dot had enough food. The simulation had configurable settings to control the population's growth/start, which could change how the simulation went. In terms of bugs there were all kinds, from a static copyright date to a wrong title, to a crash when a specific thing happened, to a server side console log. I wanted to make the application encompass as many kinds of bugs as possible."
				techDescription="The project used React for frontend, and was my first exposure into React which helped develop my love for the framework. It used Firebase for backend to maintain a saved setting configuration for cross device saving. Finally it used Bootstarp as a CSS library."
				work="#cbtnuggets"
				years="2018"
			/>
			<ProjectCard
				title="CBT Nuggets - QA Statistics Dashboard"
				id="cbtnuggetsqadashboard"
				imageSrc={LogoCBTNuggets}
				imageAlt={"Two lower case g's made of three golden circles"}
				shortDescription="An addition to the CBT Nuggets internal dashboard to show continuous testing statistics"
				background="After completing the Bug Hunt project I still had some time left at CBT Nuggets, so my team's lead gave me an extra project. Which was to add a Test Automation section to CBT Nuggets internal dashboard, and display the reports given by our continuous tests product (SauceLabs in this situation). Unfortunately I am limited in my discussion of this project, because of an NDA."
				longDescription="This was a fairly simple project, only using the SauceLabs API to gather statistics and display them in a meaningful way with charts/tables/ect. The main goal was to show the rest of the company how powerful test automation is, with fun displays of data. This project was really cool, I love to mess with data and display them in ways such as a dashboard."
				techDescription="This project used React as a frontend, some internally developed libraries for the dashboard functionality, S3/Lambda for API key hosting, SauceLabs API to grab the test data, and an internally developed CSS library."
				work="#cbtnuggets"
				years="2018"
			/>
			<ProjectCard
				title="OSU IT - Product Status Page"
				id="osustatus"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription="A dashboard to display the status of various products that Oregon State University IT maintains"
				background="At Oregon State University every morning the director of IT goes to five product websites (this includes Microsoft 365, Box, Kaltura, Instructure, and Zoom), looks at their status, and then sends out an email to all employees on the current statuses. My boss, who was an assistant director under that director, thought that the process could be automated, and she had me develop a dashboard to display the statuses, for use by the director or the employees."
				longDescription="This is hands down my favorite project, I love making dashboards that hit an API and display data. When I first started this project I thought that I might have to do some funky web scraping workarounds to automate the data retrieval. Then while looking into how the product's status pages worked I found that 4 (Microsoft 365 used an admin blocked page to display status) of them used the exact same API to get their data and those APIs were all public! After making a card system to display each status page (similar to the one used in this portfolio!) I thought that I could make this dashboard work for a variable amount of status pages that used the same API. After getting approval from the client (in this situation it was my boss), I made a page to add new status cards and also a way to add more through url attributes. All new status pages get saved as a cookie, they can be enabled/disabled and deleted when the user doesn't need it. I did this because I wanted to make a dashboard that would outlive my employment at OSU, which knowing that these products would change as time went on I found the variable approach the best option. It would also allow each user to set up a different array for their individual needs."
				techDescription="This project uses React for the frontend, Firebase for hosting, react-cookies for react hooks cookie management, and Tailwind for a CSS library."
				githubLink="https://github.com/Carson-Key/OSU-Products-Dashboard"
				projectLink="https://osu-products-status.web.app/"
				work="#osuittemp"
				years="2021"
			/>
			<ProjectCard
				title="DnD Timeline"
				id="dndtimeline"
				imageSrc={Logo}
				imageAlt={"Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"}
				shortDescription="A website to help give history and life to my D&D worlds and share them to my players"
				background="One of my life's passions is D&D, and other Tabletop RPGs, it's the thing I look forward to every weekend. One of the problems I saw was that I couldn't share the world I made with my players. So, I came up with DnDTimeline to help solve that issue. In the beginning I used this as a way to keep track for my sake until I developed better functionality, but eventually it was ready to be shared with my players."
				longDescription="This is a personal project I started to keep track of historical events of my various D&D worlds, eventually becoming a place for my players to visit as well. This was my first personal project that I made to better my life, and although I may have moved onto a professionally managed application, this project still helped further develop my love for React that started at CBT Nuggets."
				techDescription="This is a fairly simple project (tech stack wise, there is some more complex javascript going on in the project), only using React for frontend and Bootstrap for CSS."
				githubLink="https://github.com/Carson-Key/dnd-timeline"
				projectLink="https://carson-key.github.io/dnd-timeline/"
				years="2019-2020"
			/>
			<ProjectCard
				title="Alyce Hatch Center Website"
				id="ahcwebsite"
				imageSrc={LogoAHC}
				imageAlt={"Alyce Hatch Center written out with a child reaching for a star next to the words"}
				shortDescription="A website for the non-profit Alyce Hatch Center, which is a pre-school for children with special needs"
				background="In high school (around 2016) my brother, who has aniridia and various vision problems associated with it, started attending this school. Their website was pretty old and lacked a lot of modern features and designs that they needed to get donors. So I offered to make them a website, and maintained that website until 2021 when their board dissolved the non-profit and donated their assets to High Desert Education."
				longDescription="This project was just a simple static website, which would display various pieces of information. Including: mission, testimonials, volunteering, their facebook feed, and a donation link. The only dynamic portion of the website (besides the facebook feed) was a background image on the donation page that would change based on the season."
				techDescription="This website, despite being static, actually posed some interesting challenges. The hosting service that AHC used was very old and limited, where all I could use was html and had to embed all my styling/scripts in each page. However, the only tech used was HTML for frontend, a custom made CSS library, and javascript for the dynamic part."
				githubLink="https://github.com/Carson-Key/AlyceHatchWebSite"
				work="#ahc"
				years="2016-2021"
			/>
			<ProjectCard
				title="SE 303 - Final Project"
				id="se303final"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription="The rhyme 'The House That Jack Built' in Ruby that uses techniques discussed by Sandy Metz and Martin Fowler"
				background="This was a project that spanned the entire 3 months of the course SE 303 (Software engineering 3), and the goal was to learn the refactoring techniques that Sandi Metz and Martin Fowler discuss in their books '99 Bottles of OOP' (By Sandi Metz) and 'Refactoring: Improving the Design of Code' (by Martin Fowler). With more of an emphasis on Metz's teaching for refactoring for new requirements. Fowler's book was more designed for legacy refactoring."
				longDescription="This project was to learn using the concepts of Shameless Green as a starting point, then using the Flocking Rules to develop the project. Both concepts were discussed by Metz in her book (title mentioned above). We started the project out by exercising Shameless Green, which is just getting the requirements met with minimum amount of thinking, and in this case that was just printing out the song outright. But then the requirements started to slowly change (as projects do), where we needed to start using the Flocking rules to refactor, which at simplest is just do the tiniest change you can do until you reach the goal of the refactor. The end result was to refactor until the additions for the new requirement wouldn't need to change any of the existing code, but by adding new code. This line of thought had an end result of some very elegant solutions, and I recommend looking at the commit log of this project and seeing its evolution, it's quite amazing."
				techDescription="The tech stack for this project was very simple, Ruby for the core of the project and minitests for the testing suite."
				education="#se303"
				githubLink="https://github.com/Carson-Key/SE-303-House-Project"
				years="2021"
			/>
			<ProjectCard
				title="SE 201 - Final Project"
				id="se201final"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription="A modern clone of the classic game Trade Wars"
				background="This project's main goal was to teach us how to start a project with nothing more than a bare bones spec doc. As well as introduce us to topics further explored in future classes. Along with having to explore new concepts and technologies with little to no help, and collaboration. This was a duo project!"
				longDescription="This was actually a really fun project, me and my partner decided to split the workload along our strengths. My partner being a better GO programmer, and me being a better frontend developer. I decided to use React, and hit the GO API that my partner developed. To start we discussed what the API hits would entail, after which we split up and worked separately on each of our sections, ultimately creating something I was very proud of. The idea of this project was to create a multiplayer game that would simulate an intergalactic trade system. However, it was never the goal of the class to finish the project, but to get as much done and as close to the specs as possible. Along with learning how to divide the specs into manageable pieces."
				techDescription="This Project surprisingly has a complicated tech stack. The backend was all done in GO (I'm not to sure with the specifics, so all I can mention now is just GO), React for the frontend, Pixi.js (React version) for a canvas manager library for the game screen itself, JS websockets to manage player connections, redux (react) to manage the global data (mainly the socket object), and Bootstrap for a CSS library."
				projectLink="https://carson-key.github.io/trade-wars-static/#/game"
				education="#se201"
				githubLink="https://github.com/Carson-Key/trade-wars-static"
				years="2019"
			/>
			<ProjectCard
				title="CS 493 - Project: FrontEnd"
				id="cs493finalfront"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription="The frontend of a fake music streaming platform"
				background="The main idea in this class was to have a single project that we would work on the entire three month term, and I had a lot of fun with it. With the main goal to teach us how to make a cloud based application."
				longDescription="This specific project is just the frontend portion of the whole project. However, to start the class out, I made a basic login screen using React and Firebase. Then later, after learning how to develop in AWS, I added UI to display artists and then their albums/songs. All of which was based on a very basic wireframe provided by the professor."
				techDescription="The tech stack for this project was React for frontend, Firebase frontend library, and tailwind for a CSS."
				projectLink="https://cs-493-hw1.web.app/"
				education="#cs493"
				githubLink="https://github.com/Carson-Key/CS493-FrontEnd"
				years="2021"
			/>
			<ProjectCard
				title="CS 493 - Project: Back End"
				id="cs493finalback"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription="The back end of a fake music streaming platform"
				background="The main idea in this class was to have a single project that we would work on the entire three month term, and I had a lot of fun with it. With the main goal to teach us how to make a cloud based application."
				longDescription="This part of the CS 493 project was the backend, which was mainly just the endpoints that the frontend uses. This includes getting all artists, all their albums, then all the songs. It also included all AWS management, including IAM user management to secure access to the project and all AWS services. Most of which was all done using cloud formation. However, my favorite part of this class was learning NoSQL access patterns. We used AWS' DynamoDB and a primary/secondary key combo for data consistency."
				techDescription="The tech stack for this project was: Serverless (express) for the lambda framework, firebase admin to check auth token from the frontend, DynamoDB for a db, S3 to store songs, and AWS' javascript library to access services."
				education="#cs493"
				githubLink="https://github.com/Carson-Key/CS-493-BackEnd"
				years="2021"
			/>
			<ProjectCard
				title="CS 493 - Project: Electron"
				id="cs493finalelectron"
				imageSrc={LogoOSU}
				imageAlt={"A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"}
				shortDescription="The data manager of a fake music streaming platform"
				background="The main idea in this class was to have a single project that we would work on the entire three month term, and I had a lot of fun with it. With the main goal to teach us how to make a cloud based application."
				longDescription="To start out our learning of AWS, we made a way to upload songs to S3. I decided to go a step further and take the extra credit option to make this part of the project an Electron app, mainly to learn how to make an Electron app, which was really fun. The core idea of this was that an admin to the fake music service could add a new artist, album or upload a song. Where an admin is someone with an IAM user key with appropriate access."
				techDescription="The tech stack for this project is: Electron, for desktop functionality, React for frontend, AWS SDK for service access, and Tailwind for a CSS library."
				education="#cs493"
				githubLink="https://github.com/Carson-Key/carson-key-aws-and-s3-electron-app"
				years="2021"
			/>
		</Container>
	)
}

export default Projects

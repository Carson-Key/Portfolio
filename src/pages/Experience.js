// Components
import Container from '../components/Container'
import WorkCard from '../ui/ExperienceCard'
// Assets
import LogoCBTNuggets from '../assets/Logo-CBTNuggets.png'
import LogoOSU from '../assets/Logo-OSU.png'
import LogoAHC from '../assets/Logo-AHC.png'
import LogoRedHawk from '../assets/Logo-RedHawk.png'
import LogoSummit from '../assets/Logo-Summit.png'
import LogoMazama from '../assets/Logo-Mazama.png'
import LogoGG from '../assets/Logo-GuardianGroup.png'
import Logo from '../assets/Logo-512.png'

const Experience = () => {
    return (
		<Container className="flex flex-wrap justify-evenly">
			<WorkCard
				title="Mazama"
				id="mazama"
				imageSrc={LogoMazama}
				imageAlt="An M turned into a blue mountain"
				description={<>
					<ul>
						<li>- Full Stack development: Front-end, Back-end, Devops, Architecture, ect</li>
						<li>- Creating new features and improvements to a SaaS customer acquisition chat bot</li>
						<li>- Using various tech stacks like React, AWS, Python, and Twilio to accomplish tasks</li>
						<li>- Gathering requirements from key stakeholders</li>
						<li>- Helping Junior developers with any technical help they needed</li>
						<li>- Implementing CI/CD across all old systems</li>
						<li>- Refactoring legacy code</li>
						<li>- Complete over hall of all front-end (React) to a more maintainable and scalable code base</li>
						<li>- Onboarding new SaaS clients</li>
						<li>- Creating/Maintaining Python/Node REST APIs</li>
					</ul>
				</>}
				role="Software Developer"
				years={{from: "Oct 2022", to: "Present"}}
				shortDecription="Full Stack Development"
			/>
			<WorkCard
				title="Guardian Group"
				id="guardiangroup"
				imageSrc={LogoGG}
				imageAlt="A capital blue G with a side shot of a light blue face silhouette inside"
				description="I volunteered, as part of my capstone project at OSU - Cascades, to help build an application for the fantastic non-profit organisation Guardian Group, who are out there ending human traffiking!"
				role="Volunteer Software Developer"
				projects={[{name: "OSU-C Capstone - Guardian Group", id: "#capstone"}]}
				years={{from: "Sep 2020", to: "Jun 2021"}}
				shortDecription="Full Stack Development"
			/>
			<WorkCard
				title="CBT Nuggets"
				id="cbtnuggets"
				imageSrc={LogoCBTNuggets}
				imageAlt="Two lower case g's made of three golden circles"
				description="In this position my main task was developing a bug filled website to use in the QA engineer interview process. After finishing the project early, I moved onto creating a dashboard to display automated test statistics."
				role="Intern Developer"
				years={{from: "Jun 2018", to: "Sep 2018"}}
				projects={[{name: "Bug Hunt", id: "#cbtnuggetsbughunt"}, {name: "QA Statistics Dashboard", id: "#cbtnuggetsqadashboard"}]}
				shortDecription="React Programming"
			/>
			<WorkCard
				title="Freelance"
				id="freelance"
				imageSrc={Logo}
				imageAlt="Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"
				description="I did a wide range of different types of software development during my time as a freelance software developer. Anything from a static website for a small business to an entire authentication system for a startup company. During this time I learned to use so many different tech stacks that I could fill this whole page (and I had to remove most of them from my footer); mostly I worked in PHP, Javascript, HTML, CSS, and Python."
				role="Freelance Software Developer"
				years={{from: "Aug 2013", to: "May 2017"}}
				shortDecription="Anything and Everything Software Development"
			/>
			<WorkCard
				title="OSU - Cascades IT Student"
				id="osuitstudnet"
				imageSrc={LogoOSU}
				imageAlt="A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"
				description="My responsibilities at this position had a very wide scope. I did everything from maintain campus classrooms to helping professors debug problems, from maintaining network infrastructure to imaging computers. Although my degree is in Computer Science, I still learned a lot in this job that I will be using for all my career, and I loved working there."
				role="Student Worker"
				years={{from: "Feb 2018", to: "Jun 2021"}}
				shortDecription="Basic/Intermediate Tech II Tasks"
			/>
			<WorkCard
				title="OSU - Cascades IT Tech II"
				id="osuittemp"
				imageSrc={LogoOSU}
				imageAlt="A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"
				description="A continuation of my position as Student Worker after my graduation. My responsibilities were roughly the same, with a larger emphasis on longer term and complicated tasks that a Tech II would be doing. In my final months in this position the OSU-C IT team hired two tech IIs. Which gave me the added responsibilitty to help orientate and train the two new hires, which it was a blast to help orientate/train and meet them."
				role="Temp Tech II"
				years={{from: "Jun 2021", to: "Dec 2021"}}
				projects={[{name: "OSU IT Produects Status Page", id: "#osustatus"}]}
				shortDecription="Tech II Tasks"
			/>
			<WorkCard
				title="RedHawk Network Security"
				id="redhawk"
				imageSrc={LogoRedHawk}
				imageAlt="Two 90 degree swooshes, a lrager black one and a smaller red one, that form a square hawk head"
				description="In this position I was in charge of maintaining and fixing a legacy (20 years old) PHP dashboard for RedHawk. I really learned a lot about the development process of legacy code, which I have since learned are extremely valuable skills in the industry. Towards the end of my time at RedHawk I started work on an external user creation wizard using React, but because of a ramp up in school I didn't have the time to finish it."
				role="Intern Developer"
				years={{from: "Jul 2019", to: "Jan 2020"}}
				shortDecription="Legacy PHP Development"
			/>
			<WorkCard
				title="Alyce Hatch Center"
				id="ahc"
				imageSrc={LogoAHC}
				imageAlt="Alyce Hatch Center written out with a child reaching for a star next to the words"
				description="This was a volunteering experience, where I created and maintained the website for the Alyce Hatch Center. It was a really cool experience to work with this no-profit, and if they came back I would volunteer in a heartbeat."
				role="Web Developer"
				years={{from: "Jun 2016", to: "Jun 2021"}}
				projects={[{name: "Website", id: "#ahcwebsite"}]}
				shortDecription="Web Development"
			/>
			<WorkCard
				title="Summit High School"
				id="shs"
				imageSrc={LogoSummit}
				imageAlt="A capital green S with a lightning bolt going through it"
				description="During my senior year in high school, I was in a program called Cadet Teaching, for which I helped teach an intro class of Computer Science. After graduating I still really wanted to help out the growing CS program at Summit High School, so I started volunteering. I would help make curriculum decisions, teach when needed, and help answer questions. If it wasn't for the COVID-19 pandemic, I would still be volunteering whenever I had the chance."
				role="Teacher's Assistant"
				years={{from: "Jun 2017", to: "Mar 2020"}}
				shortDecription="Helping Students in CS"
			/>
			<WorkCard
				title="OSU-C Tech Club"
				id="osutechclub"
				imageSrc={LogoOSU}
				imageAlt="A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"
				description="During my Sophomore year in college I ran for treasurer of the OSU Cascades Tech club. This is a club that helps students better their portfolios and get them professional experiences in the tech world and having fun projects and activities to work on. I was lucky enough to get elected for three years in a row! My role for this club was submitting yearly budgets and maintaining financial records. In addition to helping with any event planning or any odd executive tasks."
				role="Treasurer"
				years={{from: "Sep 2018", to: "Jun 2021"}}
				shortDecription="Budget Managment"
			/>
		</Container>
	)
}

export default Experience

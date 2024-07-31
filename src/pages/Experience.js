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
				imageAlt="A M turned into a blue mountain"
				description={<>
					During my Time at Mazama I was mainly in charge of maintaining/owning our Frontend stacks and our AWS infrastructure along with building our code base to move towards a SaaS product. Here's some of the projects and tasks I completed/did at Mazama:
					<ul>
						<li>- Rebuild our legacy frontend stack using React.js, Typescript, and Tailwind to better fit within business needs and move towards a SaaS product</li>
						<li>- Build out a CMS lead generation form for non-technical employees to build out web forms</li>
						<li>- Build a template and easy to use foundational code for our AWS SAM Lambda functions. This included built in CI/CD using Github Actions, Cloudformation templates for IaC, cookiecutter for easy boilerplate generation, and a Python object that wraps the Lambda code and does a lot of the hard work for developers (like logging, secrets management, and error handling)</li>
						<li>- Build out integral APIs used to make our sales rate more efficient</li>
						<li>- Support the development team with my past experiences as a software developer</li>
						<li>- Build out a split AWS VPN using AWS' VPN Client Endpoint service for Mazama employees to connect to IP whitelisted resources</li>
						<li>- Administer our AWS Accelerated Landing Zone organization (which uses Control Tower and Identity Center)</li>
						<li>- Create an AWS Cloudformation template VPC for Lambdas to use so they can access IP whitelisted resources</li>
						<li>- Write up an error matrix to be used for building out a system health dashboard of our entire AWS system, and third party resources</li>
						<li>- Build a middle man program using Twilio to track inbound calls in a CRM</li>
						<li>- Maintain an automated customer acquisition chatbot</li>
					</ul>
				</>}
				role="Software Developer"
				years={{from: "Oct 2022", to: "Jul 2024"}}
				shortDecription="Full Stack Development"
			/>
			<WorkCard
				title="Guardian Group"
				id="guardiangroup"
				imageSrc={LogoGG}
				imageAlt="A capital blue G with a side shot of a light blue face silhouette inside"
				description={<>
					OSU Cascades and Effectual partnered together to help out a local charity, called Guardian Group, that aims to stop sex trafficking. I worked along side two other OSU Cascades students and a product team at Effectual to build out a full stack application that aims to crowd source case generation for Guardian Group. Here some of the things I accomplished with Guardian Group and Effectual:
					<ul>
						<li>- Build out a full stack web application using AWS Amplify (Which includes: React, GraphQL, Cognito, ect)</li>
						<li>- Use Agile to plan out project sprints to meet deadlines and create amazing code!</li>
						<li>- Work with Effectual's design team to turn their wire frames into a function!</li>
						<li>- Plan and work with fellow students to make sure we were on time and everyone was supported</li>
						<li>- Overcome and adapt to COVID era remote work</li>
						<li>- Use AWS Cloudformation to create other resources within Amplify</li>
					</ul>
				</>}
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
				description={<>
					At CBT Nuggets I had two main tasks: create a application to be used for interviewing QA engineers and a dashboard to show statistics on testing automation. I had a lot of fun working on these two projects and learned to much! Here are some of the specifics about my time at CBT Nuggets:
					<ul>
						<li>- Build out a bug filled web app using React and Firebase</li>
						<li>- Document all bugs so interviewers can know what to look for</li>
						<li>- Create a project plan and timeline so key stakeholders know what to expect</li>
						<li>- Add a page to the internal dashboard application that would pull and display statics from Sauce Labs</li>
						<li>- Use chart.js and SheetsJs to display and information in fun and meaningful ways</li>
						<li>- Create a lambda function to access secrets to keep Sauce Lab API Keys hidden</li>
					</ul>
				</>}
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

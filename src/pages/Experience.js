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
					<ul>
						<li>- Business: Internet Reseller</li>
						<li>- Meet with key stake holders to gather business requirements and own the build for a frontend rebuild using React, Tailwind, cloudfornt, Lambda@edge, and S3</li>
						<li>- Create requirements and own the development of a template using AWS SAM for developers to use when creating Python and NodeJS AWS Lambda functions</li>
						<li>- Support and unblock my peers when needed</li>
						<li>- Own the build of a VPN using AWS' VPN Client Endpoint and Cloudformation for employees to connect to IP whitelisted resources</li>
						<li>- Own the maintenance of an AWS Accelerated Landing Zone organization</li>
						<li>- Own the development of a VPC Cloudformation template for Lambdas to access IP whitelisted resources</li>
						<li>- Own the build and requirements of a Twillio middleman program to add inbound calls to a CRM</li>
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
					<ul>
						<li>- Business: Anti-sex trafficking charity</li>
						<li>- Work with key stake holders from both Guardian Group and Effectual to build project requirements</li>
						<li>- Own the development and requirements of project roadmap/components</li>
						<li>- Build out a full stack web application using AWS Amplify, React, GraphQL, Cognito, and Tailwind</li>
					</ul>
				</>}
				role="Software Developer"
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
					<ul>
						<li>- Business: Technical training platform</li>
						<li>- Own the creation of roadmap for a bug filled web app for interviewing QA engineers</li>
						<li>- Own the creation of roadmap for a testing automation stats dashboard</li>
						<li>- Create and report on a project plan and timeline for key stakeholders</li>
					</ul>
				</>}
				role="Software Developer"
				years={{from: "Jun 2018", to: "Sep 2018"}}
				projects={[{name: "Bug Hunt", id: "#cbtnuggetsbughunt"}, {name: "QA Statistics Dashboard", id: "#cbtnuggetsqadashboard"}]}
				shortDecription="Full Stack Development"
			/>
			<WorkCard
				title="Freelance"
				id="freelance"
				imageSrc={Logo}
				imageAlt="Brass colored Node.js hexagon logo with brass colored React logo inside, which has the nucleus replaced with a brass key"
				description={<>
					<ul>
						<li>- Business: For hire development</li>
						<li>- Build and own requirements/SOWs by working with clients on project needs</li>
						<li>- Take on learning new frameworks, programming languages, ect to meet pre-existing application requirements</li>
						<li>- Work with various types of clients from small mom-and-pop business to large corporations</li>
						<li>- Common technologies used: NodeJs, PHP, JavaScript, Python, HTML, and CSS</li>
					</ul>
				</>}
				role="Software Developer"
				years={{from: "Aug 2013", to: "May 2017"}}
				shortDecription="Full Stack Development"
			/>
			<WorkCard
				title="OSU - Cascades IT Student"
				id="osuitstudnet"
				imageSrc={LogoOSU}
				imageAlt="A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"
				description="My responsibilities at this position had a very wide scope. I did everything from maintain campus classrooms to helping professors debug problems, from maintaining network infrastructure to imaging computers. Although my degree is in Computer Science, I still learned a lot in this job that I will be using for all my career, and I loved working there."
				role="Student Worker"
				years={{from: "Feb 2018", to: "Jun 2021"}}
				shortDecription="Tech II"
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
				shortDecription="Tech II"
			/>
			<WorkCard
				title="RedHawk Network Security"
				id="redhawk"
				imageSrc={LogoRedHawk}
				imageAlt="Two 90 degree swooshes, a lrager black one and a smaller red one, that form a square hawk head"
				description={<ul>
					<li>- Business: IT security consultant</li>
					<li>- Own scoping, business requirements, and project buildout of new features and bug fixes to legacy applications</li>
					<li>- I maintained my own work schedule</li>
					<li>- Own the transition of legacy technology (PHP) to modern technologies (React, Node)</li>
				</ul>}
				role="Software Developer"
				years={{from: "Jul 2019", to: "Jan 2020"}}
				shortDecription="Full Stack Development"
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
				shortDecription="Budget Management"
			/>
		</Container>
	)
}

export default Experience

// Components
import Container from '../components/Container'
import WorkCard from '../ui/ExperienceCard'
// Assets
import LogoCBTNuggets from '../assets/Logo-CBTNuggets.png'
import LogoOSU from '../assets/Logo-OSU.png'
import LogoAHC from '../assets/Logo-AHC.png'
import LogoRedHawk from '../assets/Logo-RedHawk.png'
import LogoSummit from '../assets/Logo-Summit.png'

const Experience = () => {
    return (
		<Container className="flex flex-wrap justify-evenly">
			<WorkCard
				title="CBT Nuggets"
				id="cbtnuggets"
				imageSrc={LogoCBTNuggets}
				imageAlt="Two lower case g's made of three golden circles"
				description="At this position my main task was developing a bug filled website to use in the QA engineer interview process. After finishing the project early, I moved onto creating a dashboard to display automated test statistics."
				role="Intern Developer"
				years={{from: "Jun 2018", to: "Sep 2018"}}
				projects={[{name: "Bug Hunt", id: "#cbtnuggetsbughunt"}, {name: "QA Statistics Dashboard", id: "#cbtnuggetsqadashboard"}]}
				shortDecription="React Programming"
			/>
			<WorkCard
				title="OSU - Cascades IT Student"
				id="osuitstudnet"
				imageSrc={LogoOSU}
				imageAlt="A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"
				description="My responsibilities at this position had a very wide scope. I did everything from maintain campus classrooms to helping professors debug problems, from maintaining network infastruture to imaging computers. Although my degree is in Computer Science, I still leanred a lot in this job that I will be using for all my career, and I loved working there."
				role="Student Worker"
				years={{from: "Feb 2018", to: "Jun 2021"}}
				shortDecription="Basic/Intermediate Tech II Tasks"
			/>
			<WorkCard
				title="OSU - Cascades IT Tech II"
				id="osuittemp"
				imageSrc={LogoOSU}
				imageAlt="A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"
				description="A continuation of my position as Student Worker after my graduation. My responsibilities were roughly the same, with a larger emphasis on longer term and complicated tasks that a Tech II would be doing. Although I also had an added responsibility of showing around and helping train two new Tech IIs that started my final months, which it was really fun meeting and helping them."
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
				description="At this position I was in charge of maintaining and fixing a legacy (20 years old) php dashboard for RedHawk. I really learned a lot about the development process of legacy code, which I have since learned are exteremly valuable skills in the industry. Towards the end of my time at RedHawk I started work on an external user creation wizard using React, but because of a ramp up in school I didn't have the time to finish it."
				role="Intern Developer"
				years={{from: "Jul 2019", to: "Jan 2020"}}
				shortDecription="Legacy PHP Development"
			/>
			<WorkCard
				title="Alyce Hatch Center"
				id="ahc"
				imageSrc={LogoAHC}
				imageAlt="Alyce Hatch Center written out with a child reaching for a star next to the words"
				description="This was a volunteering experience, where I created and maintained the website for the Alyce Hatch Center. It was a really cool experience to work with this non profit, and if they came back I would volunteer in a heart beat."
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
				description=""
				role="Teacher's Assistant"
				years={{from: "Jun 2017", to: "Mar 2020"}}
				shortDecription="Helping Students in CS"
			/>
			<WorkCard
				title="OSU-C Tech Club"
				id="osutechclub"
				imageSrc={LogoOSU}
				imageAlt="A crest containing the shining sun over the water, the mountains with the stars above them, and a pine tree overlaying a book. With a beaver on top of the crest"
				description=""
				role="Treasurer"
				years={{from: "Sep 2018", to: "Jun 2021"}}
				shortDecription="Budget Managment"
			/>
		</Container>
	)
}

export default Experience

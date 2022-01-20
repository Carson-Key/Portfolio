// Components
import Container from '../components/Container'
import WorkCard from '../ui/WorkCard'
// Assets
import LogoGuardianGroup from '../assets/Logo-GuardianGroup.png'
import LogoCBTNuggets from '../assets/Logo-CBTNuggets.png'
import LogoOSU from '../assets/Logo-OSU.png'
import LogoAHC from '../assets/Logo-AHC.png'

const Work = () => {
    return (
		<Container className="flex flex-wrap justify-evenly">
			<WorkCard
				title="CBT Nuggets"
				imageSrc={LogoCBTNuggets}
				imageAlt="Two lower case g's made of three golden circles"
				description="At this position my main task was developing a bug filled website to use in the QA engineer interview process. After finishing the project early, I moved onto creating a dashboard to display automated test statistics."
				role="Intern"
				years={{from: "Jun 2018", to: "Sep 2018"}}
				projects={[{name: "Bug Hunt", id: "#cbtnuggetsbughunt"}, {name: "QA Statistics Dashboard", id: "#cbtnuggetsqadashboard"}]}
			/>
		</Container>
	)
}

export default Work

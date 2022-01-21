// Components
import Container from '../components/Container'
import EducationSection from '../ui/EducationSection'
import EducationCard from '../ui/EducationCard'

const Education = () => {
	
    return (
		<Container className="divide-y divide-solid">
			<EducationSection expand name="Oregon State University">
				<EducationCard
					title="CS 160"
					id="cs160"
				/>
			</EducationSection>
			<EducationSection name="Summit High School" />
		</Container>
	)
}

export default Education

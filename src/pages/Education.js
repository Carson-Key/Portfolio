// Components
import Container from '../components/Container'
import EducationSection from '../ui/EducationSection'
import EducationCard from '../ui/EducationCard'

const Education = () => {
	
    return (
		<Container className="divide-y divide-solid">
			<EducationSection expand name="Oregon State University" gpa="3.56" years="2017-2021">
				<EducationCard
					title="CS 160"
					id="cs160"
				/>
			</EducationSection>
			<EducationSection name="Summit High School" years="2013-2017"/>
		</Container>
	)
}

export default Education

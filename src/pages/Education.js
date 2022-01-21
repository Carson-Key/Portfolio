// Components
import Container from '../components/Container'
import EducationSection from '../ui/EducationSection'

const Education = () => {
	
    return (
		<Container className="divide-y divide-solid">
			<EducationSection expand name="Oregon State University" />
			<EducationSection name="Summit High School" />
		</Container>
	)
}

export default Education

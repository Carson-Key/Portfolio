// Packages
import { Document, Page } from 'react-pdf'
// Components
import Container from '../components/Container'

const Resume = () => {
    return (
		<Container>
			<Document 
				file="" 
			>
				<Page pageNumber={1} />
			</Document>
		</Container>
	)
}

export default Resume

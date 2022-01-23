// Packages
import { Document, Page } from 'react-pdf'
// Components
import Container from '../components/Container'

const Resume = () => {
    return (
		<Container className="scrollbar-hide overflow-x-scroll w-screen">
			<center>
				<Document
					file={process.env.PUBLIC_URL + "/Resume.pdf"}
				>
					<Page height={window.height} pageNumber={1} />
				</Document>
				<a className="w-auto mx-2 bg-primary rounded text-white py-1 px-2" href={process.env.PUBLIC_URL + "/Resume.pdf"}>Download</a>
			</center>
		</Container>
	)
}

export default Resume

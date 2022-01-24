// Packages
import { Document, Page } from 'react-pdf'
// Components
import Container from '../components/Container'

const Resume = () => {
	console.log(window.innerWidth)
    return (
		<Container className="scrollbar-hide overflow-scroll w-screen py-2">
			<center>
			<a className="w-auto mx-2 my-1 bg-primary rounded text-white py-1 px-2" href={process.env.PUBLIC_URL + "/Resume.pdf"}>Download</a>
				<Document
					file={process.env.PUBLIC_URL + "/Resume.pdf"}
				>
					<Page width={window.innerWidth} pageNumber={1} />
				</Document>
			</center>
		</Container>
	)
}

export default Resume

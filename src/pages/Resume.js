// Packages
import { Document, Page } from 'react-pdf'
// Components
import Container from '../components/Container'

const Resume = () => {
    return (
		<Container className="overflow-x-scroll w-screen">
			<center>
				<Document
					file="https://www.dropbox.com/s/3xjp930yfcby5n7/Resume.pdf?raw=1"
				>
					<Page height={window.height} pageNumber={1} />
				</Document>
				<a className="w-auto mx-2 bg-primary rounded text-white py-1 px-2" href={"https://www.dropbox.com/s/3xjp930yfcby5n7/Resume.pdf?raw=1"}>Download</a>
			</center>
		</Container>
	)
}

export default Resume

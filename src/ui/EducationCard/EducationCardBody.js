// Packages
import { HashLink } from 'react-router-hash-link'
// Components
import ConditionalRender from '../../components/ConditionalRender'

const EducationCardBody = (props) => {
	const { 
		expandCardBodyClass
	} = props

    return (
		<div className={expandCardBodyClass}>
		</div>
	)
}

export default EducationCardBody

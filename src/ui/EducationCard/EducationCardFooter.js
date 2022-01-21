// Packages
import { FaGithub } from 'react-icons/fa'
// Components
import ConditionalRender from '../../components/ConditionalRender'

const EducationCardFooter = (props) => {
	const {
        term, year,
        toggleExpanded, expandButtonText
	} = props

    return (
        <div className="flex justify-between mx-2 mb-1 mt-2 transition-all duration-500 ease-out">
            <div>
                <p>{term} Term {year}</p>
            </div>
            <button onClick={toggleExpanded} className="text-lg text-primary underline">{expandButtonText}</button> 
        </div>
	)
}

export default EducationCardFooter

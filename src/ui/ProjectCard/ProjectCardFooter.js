// Packages
import { FaGithub } from 'react-icons/fa'
// Components
import ConditionalRender from '../../components/ConditionalRender'

const ProjectCardFooter = (props) => {
	const {
		githubLink,
        toggleExpanded,
        expandButtonText
	} = props

    return (
        <div className="transition-all duration-500 ease-out flex justify-between mx-3 mb-1 mt-2">
            <div>
                <ConditionalRender condition={githubLink}>
                    <a href={githubLink} className="text-2xl"><FaGithub /></a>
                </ConditionalRender>
            </div>
            <button onClick={toggleExpanded} className="text-lg text-primary underline">{expandButtonText}</button>
        </div>
	)
}

export default ProjectCardFooter

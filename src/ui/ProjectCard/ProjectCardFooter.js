// Packages
import { FaGithub } from 'react-icons/fa'
// Components
import ConditionalRender from '../../components/ConditionalRender'

const ProjectCardFooter = (props) => {
	const {
		githubLink,
        toggleExpanded,
        expandButtonText,
        years
	} = props

    return (
        <div className="grid grid-cols-3 mx-2 mb-1 mt-2 transition-all duration-500 ease-out">
            <div className="flex justify-start">
                <ConditionalRender condition={githubLink}>
                    <a href={githubLink} className="text-2xl"><FaGithub /></a>
                </ConditionalRender>
            </div>
            <div className="mx-auto">
                <ConditionalRender condition={years}>
                    <p>{years}</p>
                </ConditionalRender>
            </div>
            <div className="flex justify-end">
                <button onClick={toggleExpanded} className="text-lg text-primary underline">{expandButtonText}</button> 
            </div>
        </div>
	)
}

export default ProjectCardFooter

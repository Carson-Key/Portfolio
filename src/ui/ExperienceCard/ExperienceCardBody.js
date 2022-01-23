// Packages
import { HashLink } from 'react-router-hash-link'
// Components
import ConditionalRender from '../../components/ConditionalRender'

const ExperienceCardBody = (props) => {
	const { 
		imageSrc, imageAlt, expanded,
		description, role, projects, shortDecription,
		expandImgClass, expandCardBodyClass
	} = props

	let nullProjects = projects ? projects : []

    return (
		<div className={"transition-all duration-500 ease-out scrollbar-hide overflow-scroll " + expandCardBodyClass}>
			<ConditionalRender condition={imageSrc && imageAlt}>
				<img className={"w-44 mx-auto h-auto mb-1 " + expandImgClass} src={imageSrc} alt={imageAlt} />
			</ConditionalRender>
			<div className="flex justify-evenly">
				<ConditionalRender condition={role}>
					<div>
						<h5 className="mt-2 mx-2 font-bold text-center">Role: </h5>
						<p className="block mx-4 text-center">{role}</p>
					</div>
				</ConditionalRender>
				<ConditionalRender condition={shortDecription}>
					<div>
						<h5 className="mt-2 mx-2 font-bold text-center">Main Responsibility: </h5>
						<p className="block mx-2 text-center">{shortDecription}</p>

					</div>
				</ConditionalRender>
			</div>
			<ConditionalRender condition={projects && expanded}>
				<h5 className="mt-4 mx-2 font-bold text-center">Projects: </h5>
				<div className="flex justify-center mt-2">
				{
					nullProjects.map((project, i) => {
						return (
							<HashLink 
								smooth
								className="w-auto mx-2 bg-primary rounded text-white px-2 py-1" 
								to={"/Projects" + project.id}
							>
								{project.name}
							</HashLink>
						)
					})
				}
				</div>
			</ConditionalRender>
			<ConditionalRender condition={description && expanded}>
				<h5 className="mt-6 mx-2 font-bold text-center">Job Description: </h5>
				<p className="block mb-2 mx-2 text-center">{description}</p>
			</ConditionalRender>
		</div>
	)
}

export default ExperienceCardBody

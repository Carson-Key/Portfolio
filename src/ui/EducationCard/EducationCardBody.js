// Packages
import { HashLink } from 'react-router-hash-link'
// Components
import ConditionalRender from '../../components/ConditionalRender'

const EducationCardBody = (props) => {
	const { 
		expanded, expandCardBodyClass, 
		objective, textbook,
		grade, credits, projects
	} = props

	let nullProjects = projects ? projects : []

    return (
		<div className={"overflow-scroll " + expandCardBodyClass}>
				<ConditionalRender condition={textbook}>
					<div className="mx-4 my-2">
						<h4 className="font-bold">Textbooks:</h4>
						<p>{textbook}</p>
					</div>
				</ConditionalRender>
				<ConditionalRender condition={grade}>
					<div className="flex gap-3 mx-4 my-2">
						<h4 className="font-bold">Grade:</h4>
						<p>{grade}</p>
					</div>
				</ConditionalRender>
				<ConditionalRender condition={credits}>
					<div className="flex gap-3 mx-4 my-2">
						<h4 className="font-bold">Credit Hours:</h4>
						<p>{credits}</p>
					</div>
				</ConditionalRender>
				<ConditionalRender condition={projects}>
					<div className="mx-4 my-2">
						<h4 className="font-bold">Projects:</h4>
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
					</div>
				</ConditionalRender>
				<ConditionalRender condition={objective && expanded}>
					<div className="mx-4 my-2">
						<h4 className="font-bold">Learning Objective:</h4>
						<p>{objective}</p>
					</div>
				</ConditionalRender>
		</div>
	)
}

export default EducationCardBody

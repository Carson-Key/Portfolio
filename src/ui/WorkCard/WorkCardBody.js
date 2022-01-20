// Components
import ConditionalRender from '../../components/ConditionalRender'

const WorkCardBody = (props) => {
	const { 
		imageSrc, imageAlt, expanded,
		description, role, projects, shortDecription,
		expandImgClass, expandCardBodyClass
	} = props

    return (
		<div className={"transition-all duration-500 ease-out overflow-scroll " + expandCardBodyClass}>
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
					{
						projects.map((project, i) => {
							return (
								<div>
									<p className="block my-3 mx-2 text-center">{project.name}</p>
									<p className="block my-3 mx-2 text-center">{project.id}</p>
								</div>
							)
						})
					}
				</ConditionalRender>
			<ConditionalRender condition={description && expanded}>
				<p className="block my-3 mx-2 text-center">{description}</p>
			</ConditionalRender>
		</div>
	)
}

export default WorkCardBody

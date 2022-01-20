// Components
import ConditionalRender from '../../components/ConditionalRender'

const WorkCardBody = (props) => {
	const { 
		imageSrc, imageAlt,
		description, role,
		years, projects,
		expandImgClass, expandCardBodyClass
	} = props

    return (
		<div className={"transition-all duration-500 ease-out overflow-scroll " + expandCardBodyClass}>
			<ConditionalRender condition={imageSrc && imageAlt}>
				<img className={"w-44 mx-auto h-auto mb-1 " + expandImgClass} src={imageSrc} alt={imageAlt} />
			</ConditionalRender>
			<ConditionalRender condition={description}>
				<p className="block my-3 mx-2 text-center">{description}</p>
			</ConditionalRender>
			<ConditionalRender condition={role}>
				<p className="block my-3 mx-2 text-center">{role}</p>
			</ConditionalRender>
			<ConditionalRender condition={years}>
				<p className="block my-3 mx-2 text-center">{years}</p>
			</ConditionalRender>
			<ConditionalRender condition={projects}>
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
		</div>
	)
}

export default WorkCardBody

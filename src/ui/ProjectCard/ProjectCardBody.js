// Components
import ConditionalRender from '../../components/ConditionalRender'

const ProjectCardBody = (props) => {
	const { 
		imageSrc, imageAlt,
		shortDescription, longDescription, techDescription,
		expanded, expandImgClass, expandCardBodyClass,
		projectLink, work, education
	} = props

    return (
		<>
			<div className={"transition-all duration-500 ease-out overflow-scroll " + expandCardBodyClass}>
				<ConditionalRender condition={imageSrc && imageAlt}>
					<img className={"w-44 mx-auto h-auto mb-1 " + expandImgClass} src={imageSrc} alt={imageAlt} />
				</ConditionalRender>
				<ConditionalRender condition={shortDescription && !expanded}>
					<p className="block my-3 mx-2 text-center">{shortDescription}</p>
				</ConditionalRender>
				<ConditionalRender condition={longDescription && expanded}>
					<h5 className="mt-2 mb-1 mx-2 font-bold">Project Description</h5>
					<p className="block mt-1 mb-3 mx-2">{longDescription}</p>
				</ConditionalRender>
				<ConditionalRender condition={techDescription && expanded}>
					<h5 className="mt-2 mb-1 mx-2 font-bold">Tech Description</h5>
					<p className="block mt-1 mb-3 mx-2">{techDescription}</p>
				</ConditionalRender>
			</div>
			<div className="flex justify-center h-6 transition-all duration-500 ease-out my-2 mx-auto overflow-scroll">
				<ConditionalRender condition={projectLink}>
					<a className="w-auto mx-2 bg-primary rounded text-white px-2" href={projectLink}>To Project</a>
				</ConditionalRender>
				<ConditionalRender condition={work}>
					<a className="w-auto mx-2 bg-primary rounded text-white px-2" href={work}>To Word Card</a>
				</ConditionalRender>
				<ConditionalRender condition={work}>
					<a className="w-auto mx-2 bg-primary rounded text-white px-2" href={education}>To Education Card</a>
				</ConditionalRender>
			</div>
		</>
	)
}

export default ProjectCardBody

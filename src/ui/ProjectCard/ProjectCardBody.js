// Packages
import { HashLink } from 'react-router-hash-link'
// Components
import ConditionalRender from '../../components/ConditionalRender'

const ProjectCardBody = (props) => {
	const { 
		imageSrc, imageAlt,
		shortDescription, background, longDescription, techDescription,
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
				<ConditionalRender condition={background && expanded}>
					<h5 className="mt-2 mb-1 mx-2 font-bold">Project Background</h5>
					<p className="block mb-2 mx-2">{background}</p>
				</ConditionalRender>
				<ConditionalRender condition={longDescription && expanded}>
					<h5 className="mt-2 mb-1 mx-2 font-bold">Project Description</h5>
					<p className="block mb-2 mx-2">{longDescription}</p>
				</ConditionalRender>
				<ConditionalRender condition={techDescription && expanded}>
					<h5 className="mx-2 mb-1 font-bold">Tech Description</h5>
					<p className="block mb-2 mx-2">{techDescription}</p>
				</ConditionalRender>
			</div>
			<div className="flex justify-center h-6 transition-all duration-500 ease-out my-2 mx-auto overflow-scroll">
				<ConditionalRender condition={projectLink}>
					<a className="w-auto mx-2 bg-primary rounded text-white px-2" href={projectLink}>To Project</a>
				</ConditionalRender>
				<ConditionalRender condition={work}>
					<HashLink 
						smooth
						className="w-auto mx-2 bg-primary rounded text-white px-2" 
						to={"/Experience" + work}
					>
						To Experience Page
					</HashLink>
				</ConditionalRender>
				<ConditionalRender condition={education}>
					<HashLink 
						smooth
						className="w-auto mx-2 bg-primary rounded text-white px-2" 
						to={"/Education" + education}
					>
						To Education Page
					</HashLink>
				</ConditionalRender>
			</div>
		</>
	)
}

export default ProjectCardBody

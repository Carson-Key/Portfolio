// Components
import ConditionalRender from '../../components/ConditionalRender'

const WorkCardFooter = (props) => {
	const {
        toggleExpanded,
        expandButtonText
	} = props

    return (
        <div className="grid grid-cols-3 mx-2 mb-1 mt-2 transition-all duration-500 ease-out">
            <div className="flex justify-end">
                <button onClick={toggleExpanded} className="text-lg text-primary underline">{expandButtonText}</button> 
            </div>
        </div>
	)
}

export default WorkCardFooter

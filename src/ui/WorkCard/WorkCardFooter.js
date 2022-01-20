// Components
import ConditionalRender from '../../components/ConditionalRender'

const WorkCardFooter = (props) => {
	const {
        toggleExpanded, expandButtonText, 
        years
	} = props

    return (
        <div className="flex justify-between h-10 mx-2 mb-1 mt-2 transition-all duration-500 ease-out">
            <ConditionalRender condition={years}>
                <div className="w-2/3 text-sm grid grid-cols-2">
                    <p>From</p><p>To</p>
				    <p>{years.from}</p><p>{years.to}</p>
                </div>
            </ConditionalRender>
            <div className="flex justify-end w-1/3">
                <button onClick={toggleExpanded} className="text-lg text-primary underline">{expandButtonText}</button> 
            </div>
        </div>
	)
}

export default WorkCardFooter

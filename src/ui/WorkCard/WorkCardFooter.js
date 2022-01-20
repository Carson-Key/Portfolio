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
                <div className="text-sm grid grid-cols-2 gap-x-4">
                    <p className="font-bold">From</p><p className="font-bold">To</p>
				    <p>{years.from}</p><p>{years.to}</p>
                </div>
            </ConditionalRender>
            <div className="flex justify-end">
                <button onClick={toggleExpanded} className="text-lg text-primary underline">{expandButtonText}</button> 
            </div>
        </div>
	)
}

export default WorkCardFooter

// Components
import ConditionalRender from '../../components/ConditionalRender'

const EducationCardFooter = (props) => {
	const {
        term, year,
        toggleExpanded, expandButtonText, disableMore
	} = props

    console.log(disableMore)

    return (
        <div className="flex justify-between mx-2 mb-1 mt-2 transition-all duration-500 ease-out">
            <div>
                <p>{term} Term {year}</p>
            </div>
            <ConditionalRender condition={!disableMore}>
                <button onClick={toggleExpanded} className="text-lg text-primary underline">{expandButtonText}</button> 
            </ConditionalRender>
        </div>
	)
}

export default EducationCardFooter

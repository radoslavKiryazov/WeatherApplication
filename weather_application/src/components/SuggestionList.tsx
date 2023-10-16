import { Location } from "../types/types"

interface SuggestionListProps {
    suggestions: Location[],
    onSuggestionClick: (suggestions: Location) => void,
}



const SuggestionList = ({suggestions, onSuggestionClick}: SuggestionListProps):JSX.Element => {
    return (
        <ul className='absolute top-7'>
        {suggestions.map((suggestion: Location, index: number) => (
        <li key={index}> 
        <button onClick={() => onSuggestionClick(suggestion)}>
            {suggestion.name}, {suggestion.country}
        </button> 
        </li>
        ))}
    </ul>
    )
}
export default SuggestionList;
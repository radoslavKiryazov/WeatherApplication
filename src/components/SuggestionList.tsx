import { Location } from "../types/types"

interface SuggestionListProps {
    suggestions: Location[],
    onSuggestionClick: (suggestions: Location) => void,
}



const SuggestionList = ({suggestions, onSuggestionClick}: SuggestionListProps):JSX.Element => {
    return (
        <ul className='absolute px-1 top-7 left-5 bg-white ml-1 rounded-b-md'>
        {suggestions.map((suggestion: Location, index: number) => (
        <li key={index}> 
        <button onClick={() => onSuggestionClick(suggestion)}>
            {suggestion.name}, <span className='text-green-400 font-bold'>{suggestion.country}</span>
        </button> 
        </li>
        ))}
    </ul>
    )
}
export default SuggestionList;
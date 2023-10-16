import {ChangeEvent} from 'react';
import { Location } from '../types/types';
import WeatherSearchHeader from './WeatherSearchHeader';
import SuggestionList from './SuggestionList';

interface WeatherSearchProps {
    searchField: string,
    locationSuggestions: Location[],
    onInput: (event: ChangeEvent<HTMLInputElement>) => void,
    onSuggestionClick: (suggestion: Location) => void,
    onSearchClick: () => void
}

const WeatherSearch = ({searchField, locationSuggestions, onInput, onSuggestionClick, onSearchClick}: WeatherSearchProps):JSX.Element =>{

    return(
        <div className="lg:h-[500px] lg:w-[600px] p-24 flex flex-col justify-center items-center bg-red-600">
        <WeatherSearchHeader/>
        <div className="flex relative">
        <input type='text' className='px-2' value={searchField} onInput={onInput}/>

        <SuggestionList suggestions={locationSuggestions} onSuggestionClick={onSuggestionClick}/>
        <button className='cursor-pointer' onClick={onSearchClick} >
        Search
        </button>
        </div>
        </div>
        
    )

}
export default WeatherSearch;
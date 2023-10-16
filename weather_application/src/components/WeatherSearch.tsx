import {ChangeEvent} from 'react';
import { Location } from '../types/types';
import SearchBar from './SearchBar';
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
        <div className="w-full h-full md:max-w-[600px] md:max-h-[350px] md:px-10 lg:h-[500px] lg:w-[600px] lg:p-24  flex flex-col
        p-4 text-center items-center justify-center bg-black/50 backdrop-blur-ls rounded-lg drop-shadow-lx">
        <WeatherSearchHeader/>
        <div className="flex relative">
        <SearchBar value={searchField} onInput={onInput}/>
        <button className='ml-1 p-1 text-sm font-thin cursor-pointer outline outline-1 outline-green-400 rounded-xl text-white bg-black' onClick={onSearchClick} >
        Search
        </button>
        <SuggestionList suggestions={locationSuggestions} onSuggestionClick={onSuggestionClick}/>
        </div>
        </div>
        
    )

}
export default WeatherSearch;
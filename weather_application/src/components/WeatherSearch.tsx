import {useState, ChangeEvent, useEffect} from 'react';
import { Location } from '../types/types';
import { WeatherData } from '../types/types';

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
        <h1 className='text-4xl'>
        Whats the weather like?
        </h1>
        <p className='text-sm'>
        Search for a place to find the current weather conditions.
        </p>
        <div className="flex relative">
        <input type='text' className='px-2' value={searchField} onInput={onInput}/>
        <ul className='absolute top-7'>
        {locationSuggestions.map((suggestion: Location, index: number) => (
        <li key={index}> 
        <button onClick={() => onSuggestionClick(suggestion)}>
            {suggestion.name}, {suggestion.country}
        </button> 
        </li>
        ))}
    </ul>
        <button className='cursor-pointer' onClick={onSearchClick} >
        Search
        </button>
        </div>
        </div>
        
    )

}
export default WeatherSearch;
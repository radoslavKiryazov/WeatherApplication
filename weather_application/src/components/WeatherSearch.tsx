import {useState, ChangeEvent} from 'react';
import { LocationSuggestion } from '../types/types';
import { get } from 'http';

const WeatherSearch = ():JSX.Element =>{
const API_BASE_URL: string = `http://api.openweathermap.org/geo/1.0/direct`;
const [searchField, setSearchField] = useState<string>('');
const [locationSuggestions, setLocationSuggestions] = useState<LocationSuggestion[]>([]);

const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
    getSuggestions(event.target.value);
}

const getSuggestions = async (searcField: string) => {
    fetch(`${API_BASE_URL}?q=${searcField}&limit=5&appid=${process.env.REACT_APP_APIKEY}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    
    .catch((error) => console.log(error));
}
    return(
        <div className="lg:h-[500px] lg:w-[600px] p-24 flex flex-col justify-center items-center bg-red-600">
        <h1 className='text-4xl'>
        Whats the weather like?
        </h1>
        <p className='text-sm'>
        Search for a place to find the current weather conditions.
        </p>
        <div className="flex">
        <input type='text' className='px-2' onInput={onInput}/>
        <button className='cursor-pointer border-solid border-light-blue-500'>
        Search
        </button>
        </div>
        </div>
        
    )

}
export default WeatherSearch;
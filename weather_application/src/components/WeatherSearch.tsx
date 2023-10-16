import {useState, ChangeEvent} from 'react';
import { Location } from '../types/types';
import { WeatherData } from '../types/types';

const WeatherSearch = ():JSX.Element =>{
const API_BASE_URL: string = `http://api.openweathermap.org/geo/1.0/direct`;

const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
const [searchField, setSearchField] = useState<string>('');
const [locationSuggestions, setLocationSuggestions] = useState<Location[]>([]);

const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
    getSuggestions(event.target.value);
}

const getSuggestions = async (searchField: string) => {
    fetch(`${API_BASE_URL}?q=${searchField}&limit=5&appid=${process.env.REACT_APP_APIKEY}`)
    .then((response) => response.json())
    .then((data) => setLocationSuggestions(data))
    
    .catch((error) => console.log(error));
}
const onSuggestionClick = (suggestion: Location) => {
    console.log(suggestion.name);
    setSearchField(suggestion.name);
    setSelectedLocation(suggestion);
}
const onSearchClick = () => {
    if(selectedLocation === null) return;
    getWeather(selectedLocation);
}
const getWeather = async (selectedLocation: Location) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}&appid=${process.env.REACT_APP_APIKEY}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const weatherData = mapToWeatherData(data);
        console.log(weatherData);
    }).catch((error) => console.log(error));
}

const mapToWeatherData = (data: any): WeatherData => {
    
    const temp: WeatherData = {
        name: data.name,
        country: data.sys.country,
        weather: data.weather[0],
        main: {...data.main}
    }
    return temp;
}



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
            {suggestion.name}
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
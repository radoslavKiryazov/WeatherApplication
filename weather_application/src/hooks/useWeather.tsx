import { ChangeEvent, useEffect, useState } from "react";
import { WeatherData, Location} from '../types/types';
import { mapToWeatherData } from "../helperFunctions";

const useWeather = () => {
    const API_BASE_URL: string = `http://api.openweathermap.org/geo/1.0/direct`;

    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [searchField, setSearchField] = useState<string>('');
    const [locationSuggestions, setLocationSuggestions] = useState<Location[]>([]);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    
    const onInput = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
    
        setSearchField(value);
    
        if(value === '') return;
        getSuggestions(value);
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
            setWeatherData(weatherData);
        }).catch((error) => console.log(error));
    }    
    useEffect(() => {
        if(searchField === '') setLocationSuggestions([]);
    
    },[searchField])

    return {
        searchField,
        locationSuggestions,
        weatherData,
        onInput,
        onSuggestionClick,
        onSearchClick
    }
    
}
export default useWeather;
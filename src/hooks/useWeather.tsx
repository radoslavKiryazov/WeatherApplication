import { ChangeEvent, useEffect, useState } from "react";
import { WeatherData, Location} from '../types/types';
import { mapToWeatherData } from "../helperFunctions";
//todo switch to axios at some point

const useWeather = () => {
    const API_BASE_URL: string = `https://api.openweathermap.org`;

    const [searchField, setSearchField] = useState<string>('');
    const [locationSuggestions, setLocationSuggestions] = useState<Location[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    
    const onInput = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
    
        setSearchField(value);
    
        if(value === '') return;
        getSuggestions(value);
    }

    const onResetButton = ():void => {
        setWeatherData(null);
    }
    
    const getSuggestions = async (searchField: string) => {
        
        try{

            const response = await fetch(`${API_BASE_URL}/geo/1.0/direct?q=${searchField}&limit=4&appid=${process.env.REACT_APP_APIKEY}`);
            const data = await response.json();
            setLocationSuggestions(data);

        } catch(error) {
            console.log(error);
        }
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
        try{
        const response = await fetch(`${API_BASE_URL}/data/2.5/weather?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}&appid=${process.env.REACT_APP_APIKEY}&units=metric`);
        const data = await response.json();

        const weatherData = mapToWeatherData(data);
        setWeatherData(weatherData);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(searchField === '') setLocationSuggestions([])
    
    },[searchField])

    useEffect(() => {
    if(selectedLocation){

    setSearchField(selectedLocation.name);
    setLocationSuggestions([]);
    }
    }, [selectedLocation])

    return {
        searchField,
        locationSuggestions,
        weatherData,
        onInput,
        onSuggestionClick,
        onSearchClick,
        onResetButton
    }
    
}
export default useWeather;
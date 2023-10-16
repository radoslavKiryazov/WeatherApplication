export interface Location {
    name: string,
    country: string,
    lat: number,
    lon: number
}

export interface WeatherData {
    name: string,
    country: string,
    weather: Weather,
    main: Main,
}

interface Main {
    feels_like: number,
    humidity: number,
    temp: number,
    temp_max: number,
    temp_min: number
}
interface Weather{
    description: string,
    icon: string,
    id:number,
    main: string
}
import { WeatherData } from "../types/types";

export const mapToWeatherData = (data: any): WeatherData => {
        
    const temp: WeatherData = {
        name: data.name,
        country: data.sys.country,
        weather: data.weather[0],
        main: {...data.main}
    }
    return temp;
}
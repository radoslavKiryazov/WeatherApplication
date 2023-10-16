import WeatherSearch from './components/WeatherSearch';
import useWeather from './hooks/useWeather';

function WeatherApp() {
  const {searchField,
    locationSuggestions,
    weatherData,
    onInput,
    onSuggestionClick,
    onSearchClick} = useWeather();
  return (
    <div className='flex justify-center items-center w-full bg-blue-200 h-[100vh]'>
      {weatherData ? ( 
        weatherData.main.temp
      ):(
    <WeatherSearch searchField={searchField} locationSuggestions={locationSuggestions} onInput={onInput} onSuggestionClick={onSuggestionClick} onSearchClick={onSearchClick}/>
    )}
    </div>
  );
}

export default WeatherApp;

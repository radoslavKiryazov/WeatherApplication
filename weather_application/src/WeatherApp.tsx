import WeatherSearch from './components/WeatherSearch';
import useWeather from './hooks/useWeather';
import Dashboard from './components/Dashboard';

function WeatherApp() {
  const {searchField,
    locationSuggestions,
    weatherData,
    onInput,
    onSuggestionClick,
    onSearchClick} = useWeather();
  return (
    <div className='flex justify-center items-center w-full bg-meadow h-[100vh]'>
      {weatherData ? ( 
        <Dashboard data={weatherData} />
      ):(
    <WeatherSearch searchField={searchField} locationSuggestions={locationSuggestions} onInput={onInput} onSuggestionClick={onSuggestionClick} onSearchClick={onSearchClick}/>
    )}
    </div>
  );
}

export default WeatherApp;

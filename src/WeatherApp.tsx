import WeatherSearch from './components/WeatherSearch';
import useWeather from './hooks/useWeather';
import Dashboard from './components/Dashboard';

function WeatherApp() {
  const {searchField,
    locationSuggestions,
    weatherData,
    onInput,
    onSuggestionClick,
    onSearchClick,
  onResetButton} = useWeather();
  
  return (
    <div className='flex justify-center items-center w-full bg-meadow bg-cover h-[100vh]'>
      {weatherData ? ( 
        <Dashboard data={weatherData} onResetButton={onResetButton} />
      ):(
    <WeatherSearch searchField={searchField} locationSuggestions={locationSuggestions} onInput={onInput} onSuggestionClick={onSuggestionClick} onSearchClick={onSearchClick}/>
    )}
    </div>
  );
}

export default WeatherApp;

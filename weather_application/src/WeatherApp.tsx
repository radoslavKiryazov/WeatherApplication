import React from 'react'
import WeatherSearch from './components/WeatherSearch';

function WeatherApp() {
  return (
    <div className='flex justify-center items-center w-full bg-blue-200 h-[100vh]'>
    <WeatherSearch/>
    </div>
  );
}

export default WeatherApp;

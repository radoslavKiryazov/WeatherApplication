const WeatherSearch = ():JSX.Element => {
    return(
        <div className="lg:h-[500px] lg:w-[600px] p-24 flex flex-col justify-center items-center bg-red-600">
        <h1 className='text-4xl'>
        Whats the weather like?
        </h1>
        <p className='text-sm'>
        Search for a place to find the current weather conditions.
        </p>
        <div className="flex">
        <input type='text' className='px-2'/>
        <button className='cursor-pointer border-solid border-light-blue-500'>
        Search
        </button>
        </div>
        </div>
        
    )

}
export default WeatherSearch;
const WeatherSearchHeader = (): JSX.Element => {
    return (
        <>
        <h1 className='text-4xl font-thin text-white'>
        Whats the <span className='font-normal text-green-500'>weather</span> like?
        </h1>
        <p className='text-sm pt-1 pb-5 text-white'>
        Search for a place to find the <span className='font-normal text-green-400'>current weather</span> conditions.
        </p>
        </>
    )
}
export default WeatherSearchHeader;
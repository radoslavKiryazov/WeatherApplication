interface DashboardHeaderProps {
    name: string,
    country: string,
    mainWeather: string,
    description: string,

}

const DashboardHeader = ({name, country, mainWeather, description}: DashboardHeaderProps): JSX.Element => {
    return(
        <>
        <h1 className="font-thin text-white"> {name}, <span className='text-green-400 font-normal'>{country}</span></h1>
            <p className='text-base text-green-400 font-normal'>{mainWeather}</p>
            <p className='font-normal text-sm italic text-white'>{description}</p>
        </>
    )

}
export default DashboardHeader;
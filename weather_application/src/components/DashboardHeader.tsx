interface DashboardHeaderProps {
    name: string,
    country: string,
    mainWeather: string,
    description: string,

}

const DashboardHeader = ({name, country, mainWeather, description}: DashboardHeaderProps): JSX.Element => {
    return(
        <>
        <h1> {name}{country}</h1>
            <p className='text-sm'>{mainWeather}</p>
            <p className='text-xs italic'>{description}</p>
        </>
    )

}
export default DashboardHeader;
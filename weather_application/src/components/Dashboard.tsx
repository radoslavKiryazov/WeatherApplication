import { WeatherData } from "../types/types";
import InfoBox from "./InfoBox";
import { degreeParser } from '../helperFunctions';
import DashboardHeader from "./DashboardHeader";
import DashboardIcon from "./DashboardIcon";

interface DashboardProps {
    data: WeatherData;
}

const Dashboard = ({data}: DashboardProps): JSX.Element => {
    return (
        <div className="flex justify-center items-center w-full bg-blue-200 h-[100vh]">
            <div className='mx-auto w-[300px]'>
                
            <section className='text-center text-2xl font-thin'>
            <DashboardHeader name={data.name} country={data.country} mainWeather={data.weather.main} description={data.weather.description}/>
            <DashboardIcon icon_id={data.weather.icon} temp={data.main.temp}/>
            </section>

            <section className='flex justify-center space-x-6'>
            <InfoBox title='Min:'information={degreeParser(data.main.temp_min)}/>
            <InfoBox title='Feels Like:'information={degreeParser(data.main.feels_like)}/>
            <InfoBox title='Max:'information={degreeParser(data.main.temp_max)}/>
            </section>

            <section className='flex text-center justify-center pt-2'>
                    <InfoBox title='Humidity:'information={`${data.main.humidity}%`}/>
            </section>

            </div>
        </div>
    )

}
export default Dashboard;
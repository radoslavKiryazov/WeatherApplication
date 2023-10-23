import { WeatherData } from "../types/types";
import InfoBox from "./InfoBox";
import { degreeParser } from '../helperFunctions';
import DashboardHeader from "./DashboardHeader";
import DashboardIcon from "./DashboardIcon";
import useWeather from "../hooks/useWeather";

interface DashboardProps {
    data: WeatherData;
    onResetButton: () => void;
}

const Dashboard = ({data, onResetButton}: DashboardProps): JSX.Element => {

    return (
        <div className="w-full h-full md:max-w-[600px] md:max-h-[300px] md:px-10 lg:h-[500px] lg:w-[600px] lg:p-24  flex flex-col
        p-5 text-center items-center justify-center bg-black/50 backdrop-blur-ls rounded-lg drop-shadow-lx">
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
            <button className="bg-green-500" onClick={onResetButton}> reset</button>
            </div>
        </div>
    )

}
export default Dashboard;
import { WeatherData } from "../types/types";
import InfoBox from "./InfoBox";
import { degreeParser } from '../helperFunctions';

interface DashboardProps {
    data: WeatherData;
}

const Dashboard = ({data}: DashboardProps): JSX.Element => {
    return (
        <div className="flex justify-center items-center w-full bg-blue-200 h-[100vh]">
            <div className='mx-auto w-[300px]'>
            <section className='text-center text-2xl font-thin'>
            <h1>{data.name}{data.country}</h1>
            <p className='text-sm'>{data.weather.main}</p>
            <p className='text-xs italic'>{data.weather.description}</p>
            <section className='flex justify-center'>
                    <img src={`https://openweathermap.org/img/wn/${data.weather.icon}.png`} alt='icon'/>
                    <span className='text-xl'>{degreeParser(data.main.temp)}</span>
                    </section>
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
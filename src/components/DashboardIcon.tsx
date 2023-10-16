import { degreeParser } from '../helperFunctions';

interface DashboardIconProps {
    icon_id: string,
    temp: number,
}

const DashboardIcon = ({icon_id, temp}: DashboardIconProps): JSX.Element => {
    return (
        <section className='flex justify-center -space-x-2'>
                    <img src={`https://openweathermap.org/img/wn/${icon_id}.png`} alt='icon'/>
                    <span className='text-xl text-white'>{degreeParser(temp)}</span>
        </section>

    )

}
export default DashboardIcon;
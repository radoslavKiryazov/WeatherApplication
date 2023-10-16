interface InfoBoxProps {
    title: string,
    information: string | number
}

const InfoBox = ({ title, information}: InfoBoxProps) => {
    return (
    <div className='w-[120px] text-s flex flex-col items-center bg-white/10 -space-y-2 rounded-md'>
    <span className='text-s font-thin text-white'>{title}</span>
    <span className='text-xl font-normal text-green-400'> {information} </span>
    </div>);
}

export default InfoBox;
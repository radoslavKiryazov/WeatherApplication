interface InfoBoxProps {
    title: string,
    information: string | number
}

const InfoBox = ({ title, information}: InfoBoxProps) => {
    return (
    <div className='lg:h-[500px] lg:w-[600px] p-24 flex flex-col justify-center items-center bg-red-600'>
    <span className='text-xs'>{title}</span>
    <span className='text-xl font-bold'> {information} </span>
    </div>);
}

export default InfoBox;
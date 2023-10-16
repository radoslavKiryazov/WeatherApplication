interface InfoBoxProps {
    title: string,
    information: string | number
}

const InfoBox = ({ title, information}: InfoBoxProps) => {
    return (
    <div className='w-[120px] text-s flex flex-col items-center bg-black/40 rounded-xl pt-1'>
    <span className='text-xs'>{title}</span>
    <span className='text-xl font-bold'> {information} </span>
    </div>);
}

export default InfoBox;
import { ChangeEvent } from "react";

interface SearchBarProps {
    value: string,
    onInput: (event: ChangeEvent<HTMLInputElement>) => void,
}

const SearchBar = ({value, onInput}: SearchBarProps):JSX.Element => {
    return (
        <input type='text' className='rounded-xl pl-2' value={value} onInput={onInput}/>
    )
}
export default SearchBar;
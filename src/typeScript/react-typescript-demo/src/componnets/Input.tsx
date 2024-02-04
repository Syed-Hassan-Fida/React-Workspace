import { useState } from "react";
import { HandleChange } from './Types'


const Input = (props: HandleChange) => {
    const [inputValue, setInputValue] = useState(props.value || '');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        props.handleChange(event);
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
    )
}

export default Input
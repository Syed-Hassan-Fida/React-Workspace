import { useState } from "react";

type HandleChange = {
    value: string,
    handleChange:  (event: React.ChangeEvent<HTMLInputElement>) => void
}

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
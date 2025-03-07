import { useState } from "react"

function Input() {
    const myText = 'Tu nombre';
    const [myValue, setMyValue] = useState('');

    const handleInput = (e) => {
        setMyValue(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder={myText} value={myValue} onChange={handleInput} />
            <h2>{myValue}</h2>
        </div>
    )
}

export default Input
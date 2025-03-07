import { useState } from 'react'

function State(){
    const [number, setNumber] = useState(0);

    const addOne = ()=>{
        setNumber(number + 1);
    }
    
    return (
    <>
        <h2 onClick={addOne}>Number: {number}</h2>
    </>
    )
}

export default State;
import { useEffect } from "react"

function UseEffect() {
    
    useEffect(()=>{
        console.log('Se ha renderizado');
    })
    return (
        <div className="child">
            <h2>Componente en pantalla</h2>
        </div>
    )
}

export default UseEffect
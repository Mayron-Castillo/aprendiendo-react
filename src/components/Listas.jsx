const frutas = ['fresa', 'uvas', 'manzana', 'pera'];

function Listas() {

    const totalFrutas = frutas.map((movie, index)=>{
        return <p key={movie}> {index+1} - {movie}</p>
    })

    return (
        <div>
            <h2>Renderizado de listas</h2>
            {totalFrutas}
        </div>

    )
}

export default Listas
function Child(props) {
    const {msg, person} = props;
    return (
        <>
            <h2>Este es el componente hijo</h2>
            <p>{msg}</p>
            <p>{person.name} - {person.age}</p>
        </>
    )
}

export default Child
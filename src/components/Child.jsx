function Child(props) {
    const {msg, person} = props;
    return (
        <div className="child">
            <h2>Este es el componente hijo</h2>
            <p>{msg}</p>
            <p>{person.name} - {person.age}</p>
        </div>
    )
}

export default Child
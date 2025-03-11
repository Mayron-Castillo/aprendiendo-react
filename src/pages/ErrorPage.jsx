import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <section>
            <h1>ERROR</h1>
            <h2>No puedes entrar ahi</h2>
            <Link to="/">Ir a Home</Link>
        </section>
    )
}

export default ErrorPage
import { Link } from "react-router-dom"
import Home from "../Home"
import Prueba from "../components/prueba"

function HomePage() {
    return (
        <>
        <ul className="list">
            <li><Link className="li" to='/'>Home</Link></li>
            <li><Link className="li" to='/blog'>Blog</Link></li>
        </ul>
        <h2>Home Page</h2>

        <Home/>
        
        </>
    )
}

export default HomePage
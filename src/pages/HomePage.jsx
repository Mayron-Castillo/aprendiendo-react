import { Link } from "react-router-dom"
import Home from "../Home"

function HomePage() {
    return (
        <>
        <h2>Home Page</h2>
        <ul className="list">
                <li><Link className="li" to='/'>Home</Link></li>
                <li><Link className="li" to='/blog'>Blog</Link></li>
        </ul>
        <Home/>
        
        </>
    )
}

export default HomePage
import { Link } from "react-router-dom"

function HeaderComponent() {
    return (
        <ul className="list">
            <li><Link className="li" to='/'>Home</Link></li>
            <li><Link className="li" to='/blog'>Blog</Link></li>
            <li><Link className="li" to='/settings'>Settings</Link></li>
        </ul>
    )
}

export default HeaderComponent
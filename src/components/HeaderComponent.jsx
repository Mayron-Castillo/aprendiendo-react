import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/user.context"

function HeaderComponent() {
    const {user} = useContext(UserContext);
    return (
        <section className="background">
            <h2 className="principal-text">Welcome {user}</h2>
            <ul className="list">
                <li><Link className="li" to='/'>Home</Link></li>
                <li><Link className="li" to='/blog'>Blog</Link></li>
                <li><Link className="li" to='/settings'>Settings</Link></li>
            </ul>
        </section>
    )
}

export default HeaderComponent
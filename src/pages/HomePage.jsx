
import { useContext } from "react"
import Home from "../Home"
import HeaderComponent from "../components/HeaderComponent"
import { UserContext } from "../contexts/user.context"

function HomePage() {
    const {user, login, logout} = useContext(UserContext);

    return (
        <>
        <HeaderComponent></HeaderComponent>
        <h2>Home Page</h2>
        <hr />
        <h2>Hola {user && <span>{user.name}</span>}</h2>
        <button onClick={()=> login()}>Login</button>
        <button onClick={()=> logout()}>Logout</button>
        <hr />
        <Home/>
        
        </>
    )
}

export default HomePage
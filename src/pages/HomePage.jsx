
import { useContext } from "react"
import Home from "../Home"
import HeaderComponent from "../components/HeaderComponent"
import { UserContext } from "../contexts/user.context"

function HomePage() {
    const {user} = useContext(UserContext);

    return (
        <>
        <HeaderComponent></HeaderComponent>
        <h2>Home Page</h2>
        <h2>Hola {user}</h2>

        <Home/>
        
        </>
    )
}

export default HomePage
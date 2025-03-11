import { useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { Navigate } from "react-router-dom";

function SettingsPage() {
    const [hasAccess, setAccess] = useState(true);

    if(!hasAccess) return <Navigate to={'/error'}/>

    return (
        <>
        <HeaderComponent></HeaderComponent>
        <div>SettingsPage</div>
        </>
    )
}

export default SettingsPage
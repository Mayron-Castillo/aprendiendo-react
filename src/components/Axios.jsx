import { useEffect, useState } from "react"
import axios from "axios";

function Axios() {
    const [users, setUsers] = useState([]);

    const getUsers = async ()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data);
    }

    useEffect(()=>{
        getUsers();
    }, [])

    const totalUsers = users.map((user)=>{
        return (
            <div key={user.id}>
                <h3>{user.name}</h3>
            </div>
        )
    })
    return (
        <div>
            <h1>Llamada a una API usando Axios en React</h1>
            {totalUsers}
        </div>
    )
}

export default Axios
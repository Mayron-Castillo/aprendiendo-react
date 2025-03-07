import { useEffect, useState } from "react"

function Fetch() {
    const [users, setUsers] = useState([]);

    const getUsers = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            throw new Error('error');
        }
        const data = await response.json();
        setUsers(data);
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
            <h1>Llamada a una API usando Fetch en React</h1>
            {totalUsers}
        </div>
    )
}

export default Fetch
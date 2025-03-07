import { useState } from "react";

function Form() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        console.log('El formulario se ha enviado');
    }

    const handleUserNameInput = (e)=>{
        setUser({...user, username: e.target.value});
    }

    const handlePasswordInput = (e)=>{
        setUser({...user, password: e.target.value});
    }

    return (
        <div>
            <h1>
                Formulario
            </h1>

            <form onSubmit={handleSubmit} >
                <fieldset>
                    <label htmlFor="username">User: </label>
                    <input type="text" id="username" onChange={handleUserNameInput} value={user.username}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" onChange={handlePasswordInput} value={user.password}/>
                </fieldset>
                <button>Send</button>
            </form>

            <button onClick={() => setUser({username: '', password: ''})}>Logout</button>
        </div>
    )
}

export default Form
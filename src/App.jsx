import { useState } from 'react'
import './App.css'
import './index.css'
import Menu from './components/Menu'
import State from './components/State'
import Input from './components/Input'
import Listas from './components/Listas'
import Objetos from './components/Objetos'
import Child from './components/Child'
import ChildToParent from './components/ChildToParent'
import ChildToChild from './components/ChildToChild'
import UseEffect from './components/UseEffect'
import Fetch from './components/Fetch'
import Axios from './components/Axios'
import Form from './components/Form'

function App() {
  const saySomething = () => {console.log('Something')}
  
  const message = 'prop desde el componente padre al componente hijo';
  
  const person = {
    name: 'Mayron',
    age: 22
  }
  const [displayName, setDisplayName] = useState('');

  const login = (name) =>{
    setDisplayName(name);
  }

  const [showEffect, setShowEffect] = useState(true);
  const changeEffect = () => {
    setShowEffect(!showEffect)
  }
  
  return (
    <>
      <h1 onClick={saySomething}>Hello World</h1>
      <hr />
      <Menu></Menu>
      <hr />
      <State></State>
      <hr />
      <Input></Input>
      <hr />
      <Listas></Listas>
      <hr />
      <Objetos></Objetos>
      <hr />
      <Child msg={message} person={person}></Child>
      <hr />
      <h2>Hola {displayName} desde el componente hijo al componente padre</h2>
      <ChildToParent handleLogin={login} userName= {displayName}></ChildToParent>
      <hr />
      <h2>Desde componente child al componente hermano</h2>
      <ChildToChild userName= {displayName}></ChildToChild>
      <hr />
      <h1>Use Effect</h1>
      <button onClick={changeEffect}>Toggle effect</button>
      {showEffect && <UseEffect></UseEffect>}
      <hr />
      <Fetch></Fetch>
      <hr />
      <Axios></Axios>
      <hr />
      <Form></Form>
    </>
  )
}

export default App

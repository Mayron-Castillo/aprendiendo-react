import './App.css'
import './index.css'
import Menu from './components/Menu'
import State from './components/State'
import Input from './components/Input'
import Listas from './components/Listas'
import Objetos from './components/Objetos'

function App() {
  const saySomething = () => {console.log('Something')}


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
    </>
  )
}

export default App

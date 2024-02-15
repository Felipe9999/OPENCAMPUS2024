import styled from 'styled-components'
import image from './assets/sabanahack.png'
import { useState } from 'react'
function App() {

  const [nombreState, setNombreState] = useState(null);

  const inscribirse = () =>{
    var nombre = ""
    if(nombre){
      setNombreState(nombre)
    }

  }

  return (
    <Container>
      <h1>
        Open Campus 2021
      </h1>
      <img src={image} />
      <h2>{nombreState?"Bienvenido: "+nombreState:"Por favor inscribase"}</h2>
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  background-color: green;
  img{
    width: 600px;
  }

  button{
    background-color: #23356C;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }

  h2{
    color: black;
    margin: 0;
  }
`
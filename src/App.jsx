import styled from 'styled-components'
import image from './assets/opencampus.png'
import { useState } from 'react'
function App() {

  const [nombreState, setNombreState] = useState(null);

  const inscribirse = () =>{
    var nombre = prompt("Entra tu nombre aqui")
    if(nombre){
      setNombreState(nombre)
    }

  }

  return (
    <Container>
      <h1>
        Open Campus 2024
      </h1>
      <img src={image} />
      <button onClick={inscribirse}>
        <h3>Inscribete</h3></button >
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
  background-color: #ffffff;
  img{
    width: 600px;
  }

  button{
    background-color: #23356C;
    border-radius: 5px;
    padding: 10px 20px;
    color: black;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }

  h2{
    color: #000066;
    margin: 0;
  }
  h3{
    color: #ffffff;
    margin: 0;
    font-size: 16px;
  }
`

import React from "react"; // Enn juevas versiones de react con vite no hace falta importar react
import './App.css'

function App() {
  
  const sumar = () => {
    
    const numero = 5;
    
    if (numero > 5 ) {
      console.log("Si, es mayor")
      
    } else {
      console.log("No es mayor")
    }
  }
  sumar();
  
  const edad = 18;
  

  return (
    <>
      <h1>Hola mundo</h1>
      
      {edad == 18 ? "Eres mayor de edad" : "Eres menor de edad"} 
      <p> {"Hola Mundo" .toUpperCase()} </p>

      <p>Un Parrafo</p>

      <img src="" />
      <input type="text" />
    </>
  )
}

export default App

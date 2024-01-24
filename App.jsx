import React from "react"; // Enn juevas versiones de react con vite no hace falta importar react
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import ListadoPacientes from "./components/ListadoPacientes/ListadoPacientes";

function App() {

  
  const [pacientes, setPacientes] = useState([]);// Arreglo
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      //console.log(typeof pacientesLS)
      setPacientes(pacientesLS)
    }
    obtenerLS();

  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = id => {
    //console.log("Eliminando Paciente", id);
    const pacientesActualizaados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizaados)
  } 

  const toma1Valor = (valor) => {
    console.log(valor)
  }
  

  return (
    <  >
    <div className="container mx-auto mt-20 bg-lime-400" >

      <Header 
        toma1Valor={toma1Valor} />
        
        <div className="flex content-center mt-12 bg-orange-600 md:flex">

          <Formulario 
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente} />

          <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />

        </div>
      
    </div>
    </>
  )
}

export default App

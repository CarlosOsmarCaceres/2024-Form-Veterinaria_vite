/* eslint-disable react/prop-types */
//Primer componente ListadoPacientes

import { useEffect } from "react";
import Paciente from "../Paciente/Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    useEffect(() => {
        if (pacientes.length > 0) {
            console.log("Nuevo paciente")
        }
        
    }, [pacientes]);

    return (
        <div className="p-[1rem] bg-blue-100 lg:w-3/5 md:h-screen overflow-y-scroll" >
            {pacientes && pacientes.length ? ( 
            <>
                <h2 className="text-3xl font-black text-center ">Listado de pacientes y Cita</h2>
                <p>Administra tus {""}
                <span className="font-bold text-indigo-600">Pacientes.</span></p>
                
                { pacientes.map(paciente => (
                    <Paciente
                    key={paciente.id}
                    paciente={paciente} 
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                    />                
                )) }
            </> ) : (
            <>
                <h2 className="text-3xl font-black text-center ">No hay pacientes</h2>
                <p> Comienza agregando pacientes {""}
                <span className="font-bold text-indigo-600">y a pareceran en este lugar.</span></p>
                
                { pacientes.map(paciente => (
                    <Paciente
                    key={paciente.id}
                    paciente={paciente} 
                    />                
                )) }
            </>
            )}
            

           



        </div>
    )
}


export default ListadoPacientes;

 
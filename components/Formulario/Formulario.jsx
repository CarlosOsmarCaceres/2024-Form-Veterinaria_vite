/* eslint-disable react/prop-types */
//Primer componente Formulario
import {useState, useEffect} from "react";
import Error from "../Error/Error";


function Formulario ({ pacientes, setPacientes, paciente, setPaciente}){

    //Primeros Hooks
    //Visualizo lols campos que voy completando.
    const [ nombre, setNombre ] = useState("");
    const [ propietario, setPropietario ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ fecha, setFecha ] = useState("");
    const [ sintomas, setSintomas ] = useState("");

    const [ error, setError] = useState(false);

    useEffect(() => {

        if ((Object.keys(paciente).length > 0)) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)

            
        } 
    }, [paciente])
    
   

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }    

    const handleSubmit = (e) => {

        e.preventDefault();
        //Validacion de formulario.
        if ( [ nombre, propietario, email, fecha, sintomas ].includes ('') ) {// arreglo que se mantiene en memoria por un tiempo
            console.log("Hay al menos un campo vacio")
            setError(true)
            return;
        } 
            setError(false);

            //Objeto de paciente
            const objetoPaciente = {
                nombre, 
                propietario, 
                email, 
                fecha, 
                sintomas,
            }
            if (paciente.id) {
                //Editando registro
                objetoPaciente.id = paciente.id                
                const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
                setPacientes(pacientesActualizados)
                setPaciente({})
                
            } else {
                //Nuevo registro
                objetoPaciente.id = generarId();
                setPacientes([...pacientes, objetoPaciente]);// agregamos cliente
            }


            //console.log(objetoPaciente)


            setNombre("")
            setPropietario("")
            setEmail("")
            setFecha("")
            setSintomas("")
    }

    return (
        <div className="bg-blue-200 p-[1rem] ">
            <h2 className="text-3xl font-black text-center" >Seguimiento de Pacientes</h2>
            <p className="text-center">
                Añade pacientes y {""}<span className="font-bold text-center text-indigo-600">Administralos</span> 
            </p>
            
            <form 
            onSubmit={handleSubmit}
            className="px-5 py-10 mx-2 my-2 mt-5 bg-white rounded-lg shadow-md" action="">
                { error && <Error> <p>Todos los campos son obligatorios.</p></Error>
                }
                <div>
                    <label 
                    className="block font-bold text-gray-700 uppercase" 
                    htmlFor="mascota">Nombre de la mascota:</label>
                    <input 
                    className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md" 
                    type="text" name="mascota" id="mascota"  placeholder="Nombre de la Mascota" 
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value) }/>
                </div>
                
                <div>
                    <label 
                    className="block font-bold text-gray-700 uppercase" 
                    htmlFor="propietario">Nombre de la propietario: </label>
                    <input 
                    className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md" 
                    type="text" name="propietario" id="propietario" placeholder="Nombre de la Mascota"
                    value={propietario}
                    onChange={ (e)=> setPropietario(e.target.value) }/>
                </div>
         
                <div>
                    <label 
                    className="block font-bold text-gray-700 uppercase" 
                    htmlFor="email">Email del propietario:</label>
                    <input 
                    className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md" 
                    type="email" name="email" id="email" placeholder="Nombre de la Mascota"
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value) }/>
                </div>
                
                <div>
                    <label 
                    className="block font-bold text-gray-700 uppercase" 
                    htmlFor="alta">Alta</label>
                    <input 
                    className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md" 
                    type="date" name="alta" id="alta" 
                    value={fecha}
                    onChange={ (e)=> setFecha(e.target.value) }/>
                </div>
                
                <div>
                    <label 
                    className="block font-bold text-gray-700 uppercase" 
                    htmlFor="alta">Sintomas</label>
                    <textarea 
                    className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md h-20" 
                    name="" id="" cols="30" rows="10" placeholder="Describe los sintomas"
                    value={sintomas}
                    onChange={ (e)=> setSintomas(e.target.value) }></textarea>
                </div>

                <input 
                className="w-full p-2 mt-2 font-bold text-white uppercase transition-all bg-indigo-600 border-2 rounded-md shadow-sm cursor-pointer hover:bg-indigo-700" 
                type="submit" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } />
                
            </form>           
            
        </div>
    )
}


export default Formulario;
//Primer componente Header

function Header ({params}) {
  const variableHeader = true;  
  
  return (
    <>
      <h1 className="mx-auto text-5xl font-black text-center md:w-1/2">
        Seguimiento Pacientes {""} 
        <span className="text-indigo-600">Veterinaria Tony-Luna-Antunes</span>
      </h1>
    </>
  );
}

export default Header;

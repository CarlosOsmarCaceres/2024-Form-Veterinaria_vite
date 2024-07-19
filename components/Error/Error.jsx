/* eslint-disable react/prop-types */



const Error = ({children}) => {
  return (
    <div className=" bg-red-800 text-white rounded-md px-10 text-center w-fit" >
      <p>{children}</p>
    </div>
  )
}

export default Error;

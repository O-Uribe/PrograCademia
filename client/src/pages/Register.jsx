import  React, { useState } from 'react'
import axios from 'axios'
import Footer from '../components/Footer';
/*
  Inputs para register de profesor

  nombre
  apellido
  rut
  email
  password
  confirmar password


*/

export const Register = () => {
  const[input, setInput] = useState({
    nombre: '',
    apellido: '',
    rut: '',
    email: '',
    password: '',
    confirmarPassword: ''
  })

  function handleChange(event){
    const {name, value} = event.target
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event){
    event.preventDefault()
    const newUser = {
      nombre: input.nombre,
      apellido: input.apellido,
      rut: input.rut,
      email: input.email,
      password: input.password,
    }
    axios.post('http://localhost:5000/register/profesor', newUser).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // Limpiar inputs
    setInput({
      nombre: '',
      apellido: '',
      rut: '',
      email: '',
      password: '',
      confirmarPassword: ''
    })
  }
  const [errors, setErrors] = useState({});

  const validateInput = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;

    switch (inputName) {
      case "nombre":
        !value.length
          ? setErrors({ ...errors, nombre: "Ingresar" })
          : delete errors[inputName] && setErrors({ ...errors });
        break;
      case "apellido":
        !value.length
          ? setErrors({ ...errors, Apellido: "Ingresar" })
          : delete errors[inputName] && setErrors({ ...errors });
        break;
      case "rut":
        !value.length
          ? setErrors({ ...errors, rut: "Ingresar" })
          : delete errors[inputName] && setErrors({ ...errors });
        break;

      case "email":
        if (!value.length) setErrors({ ...errors, email: "Ingresar" });
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          setErrors({ ...errors, email: "Por favor ingresar un email valido" });
        else delete errors[inputName] && setErrors({ ...errors });
        break;

      case "password":
        if (!value.length) setErrors({ ...errors, password: "Ingresar" });
        else if (
          !/^(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)
        )
          setErrors({
            ...errors,
            password:
              "Debe contener al menos una minúscula, una mayúscula y al menos un dígito",
          });
        else if (value.length < 8)
          setErrors({
            ...errors,
            password: "debe contener al menos 8 caracteres",
          });
        else delete errors[inputName] && setErrors({ ...errors });
        break;

      case "confirmarPassword":
        if (!value.length)
          setErrors({ ...errors, confirmarPassword: "Ingresar" });
        else if (value !== input.password)
          setErrors({ ...errors, confirmarPassword: "La contraseña no coincide" });
        else delete errors[inputName] && setErrors({ ...errors });
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="container m-auto max-w-lg">
        <div className="md:mt-10 m-2 sm:mt-0">
          <form className="mt-8 space-y-6" >
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                {/*nombre*/}
                <div>
                <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Juan"
                  id="nombre"
                  value={input.nombre}
                  onChange={handleChange}
                  onBlur={validateInput}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {errors.nombre && (
                      <div style={{ color: "red" }}>{errors.nombre}</div>
                )}
                </div>
                {/*apellido*/}
                <div className="mt-5">
                  <label
                    htmlFor="apellido"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Perez"
                    id="apellido"
                    value={input.apellido}
                    onChange={handleChange}
                    onBlur={validateInput}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.apellido && (
                    <div style={{ color: "red" }}>{errors.apellido}</div>
                  )}
                </div>
                {/*rut*/}
                <div className="mt-5">
                  <label
                    htmlFor="rut"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rut
                  </label>
                  <input
                    type="text"
                    name="rut"
                    placeholder="00.000.000-0"
                    id="rut"
                    value={input.rut}
                    onChange={handleChange}
                    onBlur={validateInput}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.rut && (
                    <div style={{ color: "red" }}>{errors.rut}</div>
                  )}
                </div>
                {/*email*/}
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={validateInput}
                    name="email"
                    value={input.email}
                    placeholder="juanperez@uct.cl"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.email && (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  )}
                </div>
                {/*Contraseña*/ }
                <div className="mt-5">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <input
                    onChange={handleChange}
                    onBlur={validateInput}
                    type="password"
                    name="password"
                    value={input.password}
                    placeholder="********"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                </div>

                {/*Confirmar Contraseña*/}
                <div className="mt-5">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  name="confirmarPassword"
                  placeholder="********"
                  id="confirmarPassword"
                  value={input.confirmarPassword}
                  onChange={handleChange}
                  onBlur={validateInput}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {errors.confirmarPassword && (
                  <div style={{ color: "red" }}>{errors.confirmarPassword}</div>
                )}
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:px-6">
            <button 
              onClick={handleClick}
              className="btn disabled:bg-gray-400 py-2 px-4 min-w-full border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
            </div>
            </div>
          </form>
      </div>
    </div>
    <Footer/>
  </>
  );
}

/*
  Inputs para register de profesor

  nombre
  apellido
  rut
  email
  password
  confirmar password


*/
/*
export const Register = () => {
  const[input, setInput] = useState({
    nombre: '',
    apellido: '',
    rut: '',
    email: '',
    password: '',
    confirmarPassword: ''
  })

  function handleChange(event){
    const {name, value} = event.target
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event){
    event.preventDefault()
    const newUser = {
      nombre: input.nombre,
      apellido: input.apellido,
      rut: input.rut,
      email: input.email,
      password: input.password,
    }
    axios.post('http://localhost:5000/register/profesor', newUser).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // Limpiar inputs
    setInput({
      nombre: '',
      apellido: '',
      rut: '',
      email: '',
      password: '',
      confirmarPassword: ''
    })
  }

  

  return (
    
    <div className="h-screen flex items-center justify-center pb-12 px-8 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>

          <h2 className="mt-6 text-center text-2xl font-bold text-white">
            Registra tu Cuenta aqui
          </h2>
        </div>
      <form className="mt-8 space-y-6">
        <div>
          <input
            onChange={handleChange}
            name="nombre"
            value={input.nombre}
            placeholder="Nombre"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="apellido"
            value={input.apellido}
            placeholder="Apellido"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="rut"
            value={input.rut}
            placeholder="Rut"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="email"
            value={input.email}
            placeholder="Email"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        
        <div>
          <input
            onChange={handleChange}
            name="password"
            value={input.password}
            placeholder="Password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="confirmarPassword"
            value={input.confirmarPassword}
            placeholder="Confirmar Password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        

        <button onClick={handleClick} class="btn relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
      </form>
    </div>
  </div>
  
  )
}
*/

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
    axios.post('http://localhost:5000/register/profesor', newUser)
    .then(res => {
      alert(res.data)
      window.location.href = '/loginprofe';  //revisar
    }).catch(err => {
      console.log(err.response.data)
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
          ? setErrors({ ...errors, apellido: "Ingresar" })
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
      <div className="container h-screen absolute">
        <div className="container m-auto max-w-lg">
          <form className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-1 py-2 bg-base-100">
                {/*nombre*/}
                <div className="form-control">
                <label
                      htmlFor="name"
                      className="label "
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
                  className='input input-bordered'
                />
                {errors.nombre && (
                      <div style={{ color: "red" }}>{errors.nombre}</div>
                )}
                </div>
                {/*apellido*/}
                <div className="form-control">
                  <label
                    htmlFor="apellido"
                    className="label "
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
                    className='input input-bordered'
                  />
                  {errors.apellido && (
                    <div style={{ color: "red" }}>{errors.apellido}</div>
                  )}
                </div>
                {/*rut*/}
                <div className="form-control">
                  <label
                    htmlFor="rut"
                    className="label "
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
                    className='input input-bordered'
                  />
                  {errors.rut && (
                    <div style={{ color: "red" }}>{errors.rut}</div>
                  )}
                </div>
                {/*email*/}
                <div className="form-control">
                  <label
                    htmlFor="email"
                    className="label "
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
                    className='input input-bordered'
                  />
                  {errors.email && (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  )}
                </div>
                {/*Contraseña*/ }
                <div className="form-control">
                <label
                    htmlFor="password"
                    className="label "
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
                    className='input input-bordered'
                  />
                  {errors.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                </div>

                {/*Confirmar Contraseña*/}
                <div className="form-control">
                <label
                  htmlFor="confirmPassword"
                  className="label "
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
                  className='input input-bordered'
                />
                {errors.confirmarPassword && (
                  <div style={{ color: "red" }}>{errors.confirmarPassword}</div>
                )}
              </div>
            </div>
            <div className="form-control">
            <button 
              onClick={handleClick}
              className="btn btn-outline"
            >
              Enviar
            </button>
            </div>
            </div>
          </form>
      </div>
      <Footer/>
    </div>
  </>
  );
}

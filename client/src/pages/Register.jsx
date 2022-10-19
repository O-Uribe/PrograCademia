import  React, { useState } from 'react'
import axios from 'axios'

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

  

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          onChange={handleChange}
          name="nombre"
          value={input.nombre}
          placeholder="Nombre"
        />
        <input
          onChange={handleChange}
          name="apellido"
          value={input.apellido}
          placeholder="Apellido"
        />
        <input
          onChange={handleChange}
          name="rut"
          value={input.rut}
          placeholder="Rut"
        />
        <input
          onChange={handleChange}
          name="email"
          value={input.email}
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="password"
          value={input.password}
          placeholder="Password"
        />
        <input
          onChange={handleChange}
          name="confirmarPassword"
          value={input.confirmarPassword}
          placeholder="Confirmar Password"
        />

        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

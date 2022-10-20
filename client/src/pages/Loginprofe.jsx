import React from 'react'
//import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';

/*
  Inputs para Login de profesor

  email
  password


*/


export const Loginprofe = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
 ///if login is succes redirect to mainprofe
    e.preventDefault();


    axios.post('http://localhost:5000/login/profesor', {
      email,
      password
    })
      .then((response) => {
        console.log(response);
        window.location.href = '/mainprofe';  //revisar 
      }, (error) => {
        console.log(error);
      });

  }

  const [errors, setErrors] = React.useState({});

  const validateInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        !value.length
        ? setErrors({ ...errors, email: 'Email requerido' }) 
        : delete errors[name] && setErrors({ ...errors });
        break;
      case 'password':
        !value.length 
        ? setErrors({ ...errors, password: 'Contraseña requerida' }) 
        : delete errors[name] && setErrors({ ...errors });
        break;

      default:
        break;
    }
  };


  return (
    <React.Fragment>
      <main className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-grey-darker text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateInput}
                type='email'
                placeholder='Email'
                required
              />
              {errors.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-grey-darker text-sm font-bold mb-2' htmlFor='password'>
                Contraseña
              </label>
              <input
                className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validateInput}
                type='password'
                placeholder='Password'
                required
              />
            </div>
            <div className='flex items-center justify-between'>
              <button type='submit' className="btn btn-outline">
                Login
               {/* <Link to="/mainprofe"> Login </Link> */}
            </button>
            </div>
          </form>
        </div>
      </main>
    <Footer/>
    </React.Fragment>
    
  )
}

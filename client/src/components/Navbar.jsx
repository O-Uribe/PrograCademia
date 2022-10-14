import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar bg-slate-800'>
      <div className='navbar-start'>
        <div className='dropdown dropdown-hover'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/host/chooseTrivia'>Profesor</Link>
            </li>
            <li>
              <Link to='/user'>Alumno</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <Link to='/' className='btn btn-ghost text-xl normal-case md:text-3xl'>
          Progracademia!
        </Link>
      </div>
      <div className='navbar-end pr-14 hidden md:flex md:space-x-4 lg:space-x-7'>
      </div>
    </div>
  )
}

export default Navbar

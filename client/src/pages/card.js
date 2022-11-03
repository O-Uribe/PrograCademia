import React from 'react'
import pre from '../img/pre.webp';

function Card({titulo, categoria}) {
    return (
        <div className='card text-center'>
            <img src={pre} alt=''></img>
            <div className='card-body bg-dark text-light'>
                <h4 className='card-title'>{titulo}</h4>
                <p className='card-text'>{categoria}</p>
                <a href='#!' className='btn btn-outline-secondary border-0'>
                    delete
                </a>
            </div>
        </div>
    )
}

export default Card
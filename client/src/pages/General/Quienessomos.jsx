import React from 'react'
import Footer from '../../components/Footer'
import UCT from '../../assets/image/UCT.png'

const Quienessomos = () => {
  return (
    <div className='container mx-auto'>
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='p-4'><img src={UCT} alt="UCT" /></figure>
            <div className="card-body text-center">
                <h2 className="text-5xl font-bold">Quienes somos</h2>
                <br/>
                <p className='text-xl'>Progracademia es un grupo de estudiantes de ingenieria civil informatica de la universidad catolica de temuco que busca mediante este sitio contribuir en el aprendizaje de las personas en la programacion.</p>
                <br/>
                <p className='text-xl'>Si quieres colaborar con nosotros puedes hacerlo en nuestro repositorio de github.</p>
                <a href="https://github.com/ouribe2020/Taller_Integracion_III" className="btn1 btn-inline">Github</a>
                <p className='text-xl'>Si tienes alguna duda o sugerencia puedes contactarnos a traves de nuestro correo electronico.</p>
                {/* Github colaboradores */}
                <span className="text-xl text-left">Colaboradores:
                    <p>Github Oscar : https://github.com/ouribe2020 </p>
                    <p>Github Matias : https://github.com/sepuuu </p>
                    <p>Github Eric : https://github.com/ericx0m</p>
                    <p>Github Nicolas.R: https://github.com/Nicolas-2002</p>
                    <p>Github Nicolar.U: https://github.com/niquiprime</p>
                    <p>Github Docente: https://github.com/ignaciolincolao</p>
                </span>

                <div className="card-actions justify-end"></div>
            </div>
        </div>
        <Footer/>
    </div>



  )
}

export default Quienessomos
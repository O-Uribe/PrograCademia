import React from 'react'
import Footer from '../../components/Footer'

const Quienessomos = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Quienes somos?</h2>
    <p>Progracademia es un grupo de estudiantes de ingenieria civil informatica de la universidad catolica de temuco que busca mediante este sitio contribuir en el aprendizaje de las personas en la programacion.</p>
    <p>  esto es muy importante para el usuario ya que Progracademia logra llevar a cabo una ayuda para el docente, para que seleccione,cree y/o utilice materiales
        que facilitan el desarrollo de las competencias y los indicadores de logro en los estudiantes.
        Tambien buscamos ayudar al proceso del el aprendizaje autónomo con distintos tipos de quiz que pueden ser utilizados sin la necesidad de un docente de por medio. </p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>

  )
}

export default Quienessomos
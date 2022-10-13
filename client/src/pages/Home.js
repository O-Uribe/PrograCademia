import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <body>
        <header>
          <div>
            <h1>Progracademia!</h1>
            <div>
              <div></div>
              <div>
                <i></i>
              </div>
              <div></div>
            </div>
            <div>
              <Link to="/host/chooseTrivia">
                <button>
                  Ingresar como profesor
                </button>
              </Link>
              <Link to="/user">
                <button>
                  Ingresar como estudiante
                </button>
              </Link>
              <Link to="/admin/stats">
                <button>
                  Estadísticas
                </button>
              </Link>
            </div>
          </div>
        </header>
      </body>
    </React.Fragment>
  );
};

export default Home;

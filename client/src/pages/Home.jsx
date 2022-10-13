import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
            <div>
              <Link to="/host/chooseTrivia">
                <button className="btn btn-sm">
                  Ingresar como profesor
                </button>
              </Link>
              <Link to="/user">
                <button className="btn btn-sm">
                  Ingresar como estudiante
                </button>
              </Link>
              <Link to="/admin/stats">
                <button className="btn btn-sm">
                  Estadísticas
                </button>
              </Link>
            </div>
    </React.Fragment>
  );
};

export default Home;

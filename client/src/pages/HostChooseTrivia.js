import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import triviaImg from '../assets/trivia.svg';


const HostChooseTrivia = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [triviaList, setTriviaList] = useState([]);
    const [pin, setPin] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/trivialist')
        .then((res) => res.json())
        .then((result) => {
            setTriviaList(result.triviaList);
            setPin(result.pin);
            setIsLoaded(true);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Cargando...</div>;
    } else {
        const buttons = triviaList.map((trivia, i) => (
                <div>
                    <Link key={`item-${i + 1}`} to="/host/lobby" state={pin} className="btn">
                        {trivia.name}
                    </Link>
                </div>
        ));
    return (
        <React.Fragment>
                    <div>
                    <h2 className="page-section-heading text-center text-uppercase mb-0 text-white">
                        Elige tu favorito
                    </h2>
                    <div className="justify-content-center">
                        <div className="d-flex flex-wrap align-self-center">
                            {buttons}
                        </div>
                    </div>
                    </div>
        </React.Fragment>
    );
  }
};

export default HostChooseTrivia;

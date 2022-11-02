import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbarpr from '../components/Navbarprofe';
import Footer from '../components/Footer';
import videoBg from '../assets/fondo.mp4'
const HostChooseTrivia = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [triviaList, setTriviaList] = useState([]);
    const [pin, setPin] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/list')
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
        return (<>
                    <video src={videoBg} autoPlay loop muted className="h-screen object-cover w-full" />
                        <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
                            Error: {error.message}
                        </div>
                </>);
    } else if (!isLoaded) {
        return (<>
                    <video src={videoBg} autoPlay loop muted className="h-screen object-cover w-full" />
                        <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
                            Cargando...
                        </div>
                </>);
    } else {
        const buttons = triviaList.map((trivia, i) => (
            <div key={`item-${i + 1}`}>
                <Link to="/host/lobby" state={pin} className="btn btn-primary">
                    {trivia.name}
                </Link>
            </div>
        ));
        return (
            <React.Fragment>
                <video src={videoBg} autoPlay loop muted className="h-screen object-cover w-full" />
                <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
                <div className="w-full absolute inset-x-0 top-0"><Navbarpr/></div>
                <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row ">
                <div className="card  shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2>Elige tu favorito</h2>
                        <p></p>
                        <div className="card-actions justify-center">
                            {buttons}
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div>
            </div>
            <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
        </div>
    </React.Fragment>
    );
  }
};

export default HostChooseTrivia;

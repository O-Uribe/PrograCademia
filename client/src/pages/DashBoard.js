import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [mostPlayedTrivias, setMostPlayedTrivias] = useState(null);
  const [mostDifficultQuestions, setMostDifficultQuestions] = useState(null);
  const [totalPlayers, setTotalPlayers] = useState(null);
  const [averagePlayersPerTrivia, setAveragePlayersPerTrivia] = useState(null);
  const [totalGames, setTotalGames] = useState(null);

  useEffect(() => {
    if (!dataLoaded) {
      const fetchStats = async () => {
        const response = await fetch('/stats');
        const {
          mostPlayedTrivias: newMostPlayedTrivias,
          mostDifficultQuestions: newMostDifficultQuestions,
          totalPlayers: newTotalPlayers,
          averagePlayersPerTrivia: newAveragePlayersPerTrivia,
          totalGames: newTotalGames,
        } = await response.json();

        setMostPlayedTrivias(newMostPlayedTrivias);
        setMostDifficultQuestions(newMostDifficultQuestions);
        setTotalPlayers(newTotalPlayers);
        setAveragePlayersPerTrivia(newAveragePlayersPerTrivia);
        setTotalGames(newTotalGames);

        setDataLoaded(true);
      };

      fetchStats();
    }
  }, [dataLoaded]);

  return (
    <body>
      {dataLoaded ? (
        <div>
          <h1> Estadisticas </h1>
          <div> 
            <h3>Most Played Trivias</h3>
          </div>
          <div>
            <table style={{ margin: '0 auto' }}>
              <thead>
                <tr>
                  <th>ID QUIZ</th>
                  <th>Tiempo Jugado</th>
                </tr>
              </thead>
              <tbody>
                {mostPlayedTrivias &&
                  mostPlayedTrivias.map((trivia, index) => (
                    <tr key={`index-${index}`}>
                      <td>{trivia.fk_trivia}</td>
                      <td>{trivia.trivias_played}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <h3>Most Difficult Questions</h3>
          <div>
            <table style={{ margin: '0 auto' }}>
              <thead>
                <tr>
                  <th>Id de Pregunta</th>
                  <th>Descripción</th>
                  <th>Putuación</th>
                </tr>
              </thead>
              <tbody>
                {mostDifficultQuestions &&
                  mostDifficultQuestions.map((question, index) => (
                    <tr key={`index-${index}`}>
                      <td>{question.fk_question}</td>
                      <td>{question.description}</td>
                      <td>{question.score}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <br />
          <div>
            <div>
              <strong>Total de Jugadores:</strong> {totalPlayers ? totalPlayers : 'No players yet'}
            </div>
            <div>
              <strong>Promedio de jugadores por quiz:</strong>{' '}
              {averagePlayersPerTrivia ? averagePlayersPerTrivia : 'No players yet'}
            </div>
            <div>
              <strong>Cantidad de Juegos:</strong> {totalGames ? totalGames : 'No games yet'}
            </div>
            <br />
          </div>
          <br />
          <br />
          <div>
            <Link to="/">
              <button>Volver</button>
            </Link>
          </div>
        </div>
      ) : (
        'Cargando...'
      )}
    </body>
  );
};

export default DashBoard;

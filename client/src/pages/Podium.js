import React from 'react';
import StopGame from '../components/StopGame';
const Podium = (props) => {
  return (
    <React.Fragment>
      <body className="bg-primary">
        <div>
          <div>
            {Object.entries(props.ranking).map(([keyValue, value]) => {
              return (
                <div>
                  <div>
                    <h1 className="text-center text-dark" key={keyValue}>
                      {[value.name]} has {[value.score]} points
                    </h1>
                  </div>
                  <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <StopGame
            socket={props.socket}
            socketUser={props.socketUser}
            setSocketUser={props.setSocketUser}
            setSocket={props.setSocket}
          />
        </div>
      </body>
    </React.Fragment>
  );
};

export default Podium;

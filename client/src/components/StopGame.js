import React from "react";
import { Link } from "react-router-dom";

const StopGame = (props) => {
  return (
    <Link to="/">
        <button
            className="stopGame"
            variant="danger"
            onClick={() => {
            if (props.socket) {
                props.socket.disconnect();
                props.setSocket(null);
            }

            if (props.socketUser) {
                props.socketUser.disconnect();
                props.setSocketUser(null);
            }
            }}
        >
            Ve devuelta al lobby...
        </button>
    </Link>
  );
};

export default StopGame;

import React from "react";
import axios from 'axios';

/* admin
    -username
    -password
*/

export const LoginAdmin = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //norrar local storage
        localStorage.clear();
        console.log(JSON.stringify({username, password}));
        axios.post('http://localhost:5000/login/admin', {
            username,
            password
        })
        .then((response) => {
            if(response.status === 200){
                //alert("Logeado")
                window.location.href ='/admin'
            }
        }, (error) => {
            console.log(error);
        });
    };
    
    return (
        <React.Fragment>
            <div className="container">
                <h1 className="text-xl font-bold">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <div className="flex space-x-3">
                            <input 
                            type="text" 
                            placeholder="Usuario" 
                            onChange={(e) => setUsername(e.target.value)}
                            className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="flex space-x-3">
                            <input
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
    }


export default LoginAdmin;
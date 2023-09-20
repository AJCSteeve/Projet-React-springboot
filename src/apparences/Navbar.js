import {NavLink} from "react-router-dom";


export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Projet-React-Springboot</a>
                    <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="btn btn-outline-dark" to="/adduser">Add User</NavLink>
                </div>
            </nav>


        </div>
    )
}
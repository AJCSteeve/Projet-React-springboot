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
                    <NavLink className="btn btn-secondary" to="/">Acceuil</NavLink>
                    <NavLink className="btn btn-secondary" to="/createpost">Ajouter un post</NavLink>
                    <NavLink className="btn btn-secondary" to="/posts">Voir les posts</NavLink>
                    <NavLink className="btn btn-secondary" to="/adduser">Ajouter un utilisateur</NavLink>
                    <NavLink className="btn btn-secondary" to="/users">Voir les utilisateurs</NavLink>
                </div>
            </nav>


        </div>
    )
}
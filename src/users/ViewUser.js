import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export default function ViewUser(){

    const {id} = useParams();
    const [user, setUser] = useState({
        username: "",
        phoneNumber: "",
        email: "",
        photoUrl: "",
        contentList:""
    });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/users/id/${id}`);
            setUser(response.data);
        } catch (error) {
            console.error("Erreur lors du chargement de l'utilisateur :", error);
        }
    };

return(
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow-lg">
                <h2 className="text-center m-4">Consulter un profil utilisateur</h2>
                <div className="card">
                    <div className="card-header">Informations de l'utilisateur id:
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Username:</b>
                                {user.username}
                            </li>
                            <li className="list-group-item">
                                <b>PhoneNumber:</b>
                                {user.phoneNumber}
                            </li>
                            <li className="list-group-item">
                                <b>PhotoUrl:</b>
                                {user.photoUrl}
                            </li>
                            <li className="list-group-item">
                                <b>@ Email:</b>
                                {user.email}
                            </li>
                            <li className="list-group-item">
                                <b>Content(s):</b>
                                {user.contentList}
                            </li>
                        </ul>
                    </div>
                </div>
                <NavLink className="btn btn-light my-2" to={"/"}>Retour Accueil</NavLink>
            </div>
        </div>
    </div>
    );
}
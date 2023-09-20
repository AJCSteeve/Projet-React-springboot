import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink, useNavigate, useParams} from "react-router-dom";


export default function EditUser(){

    let navigate=useNavigate()
    const {id}=useParams()

    const [user,setUser]= useState({
        username:"",
        phoneNumber:"",
        email:""
    });

    const{username, phoneNumber, email}=user;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async (ev)=>{
        ev.preventDefault();
        await axios.put(`http://localhost:8080/api/users/${id}`,user);
        navigate("/");
    };

    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/api/users/id/${id}`)
        setUser(result.data)
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow-lg">
                    <h2 className="text-center m-4">Modifier un utilisateur</h2>

                    <form onSubmit={(ev) => onSubmit(ev)}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Veuillez entrer un nom d'utilisateur svp"
                                   name="username"
                                   value={username}
                                   onChange={(event)=>onInputChange(event)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">
                                Phone number
                            </label>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Veuillez entrer un numéro de téléphone svp"
                                   name="phoneNumber"
                                   value={phoneNumber}
                                   onChange={(event)=>onInputChange(event)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                E-mail
                            </label>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Veuillez entrer une adresse email svp"
                                   name="email"
                                   value={email}
                                   onChange={(event)=>onInputChange(event)}/>
                        </div>
                        <button type="submit" className="btn btn-outline-success">Envoyer</button>
                        <button className="btn btn-outline-danger mx-2" onClick={() => navigate("/")}>Annuler</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
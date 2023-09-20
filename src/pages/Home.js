import axios from "axios";
import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";

export default function Home(){

    const [users,setUsers]= useState([])

    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers = async()=>{
        const result= await axios.get("http://localhost:8080/api/users")
        setUsers(result.data);
    };

    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:8080/api/users/${id}`)
        loadUsers()
    }



    return(
        <div className='container'>
            <div className='py-4'>
                <table className="table table-success table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        {/*<th scope="col">Phone Number</th>*/}
                        {/*<th scope="col">PhotoUrl</th>*/}
                        {/*<th scope="col">@ email</th>*/}
                        {/*<th scope="col">Content(s)</th>*/}
                        <th scope="col">Edition</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user,index)=>(
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.username}</td>
                        {/*<td>{user.phoneNumber}</td>*/}
                        {/*<td>{user.photoUrl}</td>*/}
                        {/*<td>{user.email}</td>*/}
                        {/*<td>{user.contentList}</td>*/}
                        <td>
                            <NavLink className="btn btn-success mx-2"to={`/viewuser/${user.id}`}>Consulter</NavLink>
                            <NavLink className="btn btn-outline-primary mx-2"to={`/edituser/${user.id}`}>Modifier</NavLink>
                            <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Effacer</button>
                        </td>

                        </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
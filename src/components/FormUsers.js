import React, { useState } from 'react'
import axios from "axios";
import { url } from "../helpers/url";

function FormUsers() {

    const [user, setUser] = useState({
        nombre: "",
        email: "", 
        password: "",
    });

    const {nombre, email, password}=user;

    const postData = ()=> {
        axios
        .post(url, user)
        .then((response)=>response.data)
        .catch((error)=>error);
    };

    const handleChanged = ({target})=>{
        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Ingrese nombre</label>
            <input name="nombre" type="Text" onChange={handleChanged} value={nombre}></input>
            <label>Ingrese email</label>
            <input name="email" type="email" onChange={handleChanged} value={email}></input>
            <label>Ingrese contraseña</label>
            <input name="password" type="password" onChange={handleChanged} value={password}></input>
            <button onClick={() => postData()} type="submit">Crear Usuario</button>
        </form>
    </div>
  )
}

export default FormUsers
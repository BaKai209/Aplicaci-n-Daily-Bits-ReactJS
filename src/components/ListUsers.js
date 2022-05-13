import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../helpers/url";
import  styled  from "styled-components";


const DivDatos = styled.div`
  padding:0 20%;
  
  `

const BtnEliminar = styled.button`

`

function ListUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(url + id)
      .then((response) => {
        getData();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      {data.map((d) => (
        <DivDatos>
          <h4>Nombre: {d.nombre}</h4>
          <h4>Email: {d.email}</h4>
          <h4>Puntaje: {d.puntaje}</h4>
          <BtnEliminar onClick={() => deleteData(d.id)}>Eliminar</BtnEliminar>
        </DivDatos>
      ))}
    </div>
  );
}

export default ListUsers;

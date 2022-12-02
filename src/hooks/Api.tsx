import {  useState } from "react";

export const Api = () => {

    let myApi = "https://reqres.in/api/users";

    const [apiInfo, setApiInfo] = useState([]);

    const llamadaApi = async () => {
      const respuesta = await fetch(myApi);

      const res = await respuesta.json();
      setApiInfo(res.data);
    };


  return {
    apiInfo,
    setApiInfo,
    llamadaApi

  };
}
   

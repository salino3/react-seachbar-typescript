import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Api } from '../hooks/Api';

const SecondPage = () => {

           const { apiInfo, llamadaApi } = Api();
           const { id } = useParams();

  useEffect(() => {
  llamadaApi();
  }, []);

 let intId = Number(id);


  return (
    <>
      <div>
        <h2>
          <u>Search data</u>
        </h2>{" "}
        {!apiInfo
          ? "Loading"
          : apiInfo
              .filter((element: any) => element.id === intId)
              .map((item: any, index: any) => (
                <div className="divListinfo" key={index}>
                  <div className="infofirst">
                    <p>
                      <b>Email:</b> <span> {item.email}</span>
                    </p>
                    <p>
                      <b>First name:</b> <span> {item.first_name}</span>
                    </p>{" "}
                    <p>
                      <b>Last name:</b> <span> {item.last_name}</span>
                    </p>
                  </div>
                  <div className="divImgId">
                    <div>Id: {item.id}</div> <br />
                    <img src={`${item.avatar}`} width="230" alt="avatar" />
                  </div>
                </div>
              ))}
        <br />
        <Link to={"/"}>
          <b>Go back</b>
        </Link>
      </div>
    </>
  );
}

export default SecondPage
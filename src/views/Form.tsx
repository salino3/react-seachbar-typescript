import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { Api } from '../hooks/Api';

const Form = () => {


       const { apiInfo, llamadaApi } = Api();
       const navigate = useNavigate();
       const [first, setFirst] = useState();
  
         useEffect(() => {
           llamadaApi();
         }, []);
         
  const handleChange = (event: any) => {
    event.preventDefault();
    setFirst(event.target.value || "");
  };

  //
  const onSearch = (event: any) => {
    event.preventDefault();

    //
    let Searching = event.target.searching.value;
    let checkUserName = {
      email: "",
      id: "",
    };

    apiInfo.forEach((object: any) => {
      if (object.email === Searching || object.id.toString() === Searching) {
        checkUserName = object;
        // console.log({ checkUserName });
      }
    });

    if (
     ( checkUserName.email === Searching ||
      checkUserName.id.toString() === Searching ) && Searching !== ""
    ) {
      navigate(`/second/${checkUserName.id}`);
    } else {
      alert("Sorry, we don't have this email in the database");
    }
    setFirst("" || undefined);
  };

  return (
    <>
      <div className="divForm">
        <form onSubmit={onSearch}>
          <h2>
            <u>Search bar App</u>
          </h2>
          <label htmlFor="name">Who are you looking for?</label> <br />
          <small>
            (Email or Id - <span>only 6 persons</span>)
          </small>
          <div className="search-inner">
            <input
              onChange={handleChange}
              value={first || ""}
              type={"text"}
              name="searching"
              placeholder={"Insert the email or code.."}
            />
            &nbsp;{" "}
            <button onClick={() => onSearch(first)}>
              {" "}
              <b>Search</b>{" "}
            </button>
          </div>
          <Card first={first} setFirst={setFirst} />
        </form>
      </div>
    </>
  );
}

export default Form


import {  Route, Routes } from "react-router-dom";
import Form from "../views/Form";
import SecondPage from "../views/SecondPage";

const AppRoute = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/second/:id" element={<SecondPage />} />
      </Routes>
    </>
  );
}

export default AppRoute
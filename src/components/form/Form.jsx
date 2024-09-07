import { useState } from "react";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import "./style.css";

const Form = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <div className="container">{login ? <Login /> : <Signup />}</div>
    </>
  );
};

export default Form;

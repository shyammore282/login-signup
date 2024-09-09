import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import "./style.css";

const Form = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <div className="container">
        {login ? (
          <Link to="/login" onClick={() => setLogin(false)}>
            login
          </Link>
        ) : (
          <Link to="/signup" onClick={() => setLogin(true)}>
            signup
          </Link>
        )}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default Form;

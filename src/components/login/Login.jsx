import { useState } from "react";
import axios from "axios";
import "./Style.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = (e) => {
    const loginInfo = { ...loginData };

    // backend end point
    axios
      .post("htttp://localhost:5000/login", loginInfo)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    setLoginData({
      email: "",
      password: "",
    });

    e.preventDefault();
  };

  return (
    <div className="container">
      <form className="form" action="" onSubmit={onSubmit}>
        <div className="input">
          <label htmlFor="name">Email </label>
          <input type="email" name="email" value={loginData.email} placeholder="Email ..." onChange={handleOnChange} />
        </div>
        <div className="input">
          <label htmlFor="name">Password</label>
          <input
            type="text"
            name="password"
            value={loginData.password}
            placeholder="Password"
            onChange={handleOnChange}
          />
        </div>

        <button className="button" type="submit">
          Submit info
        </button>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import "./Style.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  return (
    <div className="container">
      <form className="form" action="">
        <div className="input">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            name="userName"
            value={loginData.userName}
            placeholder="User Name"
            onChange={handleOnChange}
          />
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
      </form>
    </div>
  );
};

export default Login;

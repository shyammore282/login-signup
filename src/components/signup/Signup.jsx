import { useState } from "react";
import axios from "axios";
import "./Style.css";

const Signup = () => {
  const [data, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...data, [name]: value });
  };

  const onSubmit = (e) => {
    const userData = { ...data };

    //backend
    axios
      .post("http://localhost:5000/signup", userData)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => console.log(error, "please cheak axios"));

    setUserData({
      name: "",
      email: "",
      password: "",
    });

    console.log(userData);
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input">
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" id="name" value={data.name} placeholder=" Name" onChange={handleChange} />
        </div>

        <div className="input">
          <label htmlFor="name">Email : </label>
          <input
            type="text"
            name="email"
            id="email"
            value={data.email}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <label htmlFor="name">Password : </label>
          <input
            type="text"
            name="password"
            id="password"
            value={data.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <button className="button" type="submit">
          Submit info
        </button>
      </form>
    </div>
  );
};
export default Signup;

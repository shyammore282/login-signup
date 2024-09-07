// import { Routes, Route } from "react-router-dom";
// import Login from "./components/login/Login";
// import Signup from "./components/signup/Signup";
import "./App.css";
import Form from "./components/form/Form";

const App = () => {
  return (
    <div className="container">
      <Form />
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
    </div>
  );
};

export default App;

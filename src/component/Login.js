import React from "react";
import "./Login.css";
import { BsGoogle } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
const Login = ({signin}) => {
  return (
    <div className="Container">
      <div className="header">
        <h4>ReactJs Chat App</h4>
        <button type="submit" className="sign-button" onClick={signin}>
          <BsGoogle /> Signin With Google
        </button>
      </div>
      <div className="login-body">
        <h5> <FaReact/> React Js and Firebase Chat App</h5>
      </div>
    </div>
  );
};

export default Login;

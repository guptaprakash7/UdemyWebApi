import React, { useRef } from "react";
import { json, Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const passwordRef = useRef();

  const onLoginUser = async () => {
    const credentials = {
      email: "Bob@gmail.com", //userRef.current.value,
      password: "Pa$$w0rd",
    };

    return fetch("http://localhost:5035/api/account/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  };
  const onLoginHandler = async (e) => {
    debugger;
    e.preventDefault();
    const response = await onLoginUser();
    if (response.token) {
      localStorage.setItem("token", response.token);
      console.log(response);
      navigate("/activities");
    }
  };
  return (
    <div>
      <form onSubmit={onLoginHandler}>
        <div>
          <label>User Email </label>
          <input
            type="text"
            ref={userRef}
            placeholder="please enter user email"
          ></input>
        </div>
        <div>
          <label>password </label>
          <input
            type="text"
            ref={passwordRef}
            placeholder="please enter user email"
          ></input>
        </div>
        <div>
          <button type="submit"> Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./signup";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <input placeholder="username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input placeholder="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button onClick={signin}> Signin </button>
      <Signup />
    </div>
  );
}
export default Signin;
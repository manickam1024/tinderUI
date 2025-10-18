import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, useusername] = useState("");
  const [password, usepassword] = useState("");

  async function login(e, p) {
    try {
      const raw = await axios.post(
        "http://localhost:4444/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      const result = await JSON.stringify(raw);

      if (result) {
        alert("sucessfully logged in ");
      }
    } catch (err) {
      alert("incorrect username or password \n" + err);
    }
  }

  return (
    <form action={login}>
      <div className="flex flex-col justify-center items-center w-dvw relative top-30">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(c) => useusername(c.target.value)}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(c) => usepassword(c.target.value)}
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </form>
  );
};

export default Login;

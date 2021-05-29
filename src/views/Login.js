import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { container, form, input, button } from "./styles";

const Login = ({ header, setLoggedUser, history }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const url = "api  /users";

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/login`, userCredentials);
      setLoggedUser(response.data);
      setTimeout(() => {
        history.push("/");
      }, 1000);
      setUserCredentials({ username: "", password: "" });
    } catch (error) {
      if (!error.response) {
        console.log("Network error", error);
        return;
      }

      console.log(error.response.data, error);
    }
  };

  return (
    <div style={container}>
      <form onSubmit={login} style={form}>
        <h2 style={{ paddingBottom: "1rem" }}>{header}</h2>
        <input
          name="username"
          value={userCredentials.username}
          style={input}
          placeholder="Username"
          onChange={(e) =>
            setUserCredentials({ ...userCredentials, username: e.target.value })
          }
        />
        {/* ... */}
        <input
          name="password"
          value={userCredentials.password}
          style={input}
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setUserCredentials({ ...userCredentials, password: e.target.value })
          }
        />
        <button style={button}>Sign in</button>
        <Link to="/register">Don't have an account yet?</Link>
      </form>
    </div>
  );
};

export default Login;

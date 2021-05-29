import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { container, form, input, button } from "./styles";

const Register = ({ header, history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "api/users";

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password,
    };

    try {
      await axios.post(`${url}/register`, newUser);
      setUsername("");
      setEmail("");
      setPassword("");
      history.push("/login");
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
      <form onSubmit={handleRegister} style={form}>
        <h2 style={{ paddingBottom: "1rem" }}>{header}</h2>
        <input
          name="username"
          style={input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name="email"
          style={input}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          style={input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={button}>
          Sign in
        </button>
        <Link to="/login">Allready have and account? Sign in.</Link>
      </form>
    </div>
  );
};

export default Register;

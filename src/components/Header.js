import { Link } from "react-router-dom";

const container = {
  background: "#1E1E1E",
  width: "100%",
  padding: "0 .5rem",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const navigation = {
  display: "flex",
};

const link = {
  padding: ".5rem",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

const Header = ({ text, loggedUser }) => {
  const getDate = () => {
    const date = new Date(); // Sun May 09 2021 23:04:20 GMT+0300...
    return Intl.DateTimeFormat().format(date); // 9.5.2021
  };

  return (
    <div style={container}>
      <Link style={link} to="/">
        <div className="logo-text">
          <h1>{text}</h1>
          <div>{getDate()}</div>
        </div>
      </Link>
      <div style={navigation}>
        {!loggedUser && (
          <>
            <Link style={link} to="/login">
              Login
            </Link>
            <Link style={link} to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

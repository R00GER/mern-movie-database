const button = {
  background: "#1E1E1E",
  width: "30%",
  color: "#fff",
  border: "1px solid #1E1E1E",
  padding: ".5rem 1rem",
  borderRadius: "4px",
  cursor: "pointer",
  margin: ".5rem 0",
};

const Footer = ({ handleShowTodoCount, showMovieCount, movies }) => (
  <div style={{ width: "80%", padding: "1rem" }}>
    <button style={button} onClick={handleShowTodoCount}>
      {showMovieCount ? "Hide movie count" : "Show movie count"}
    </button>
    {showMovieCount && <div>{`You have ${movies.length} movies listed`}</div>}
  </div>
);

export default Footer;

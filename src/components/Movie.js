const containerStyles = {
  background: "#F4F5F7",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  marginBottom: ".5rem",
  marginTop: "2rem",
  padding: "1rem",
  borderRadius: "4px",
  color: "#272727",
  border: "1px solid #dbdcde",
};

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1.5rem",
  fontWeight: "bold",
  paddingBottom: ".5rem",
};

const button = {
  background: "#1E1E1E",
  color: "#fff",
  border: "1px solid #1E1E1E",
  padding: ".5rem 1rem",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: ".5rem",
};

const Movie = ({ movie, toggleSeen, removeMovie, updateMovie, isUpdating }) => {
  return (
    <div className="movie-container" style={containerStyles}>
      <div className="movie-header" style={headerStyles}>
        {isUpdating ? <input /> : <div>{movie.title}</div>}
        <div
          style={{ cursor: "pointer" }}
          onClick={() => toggleSeen(movie._id)}
        >
          {movie.seen ? <span>✅</span> : <span>❎</span>}
        </div>
      </div>
      <div className="movie-footer">
        <button style={button} onClick={() => removeMovie(movie._id)}>
          Delete movie
        </button>
        {isUpdating && <button style={button}>Save</button>}
        <button style={button} onClick={() => updateMovie(movie._id)}>
          {isUpdating ? "Cancel" : "Update movie"}
        </button>
      </div>
    </div>
  );
};

export default Movie;

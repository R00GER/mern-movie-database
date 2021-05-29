import { useState } from "react";
import axios from "axios";

const input = {
  width: "85%",
  padding: ".5rem 0",
  borderTopLeftRadius: "4px",
  borderBottomLeftRadius: "4px",
  background: "#F4F5F7",
  border: "1px solid #dbdcde",
  color: "#1E1E1E",
  marginBottom: "1rem",
};

const submitButton = {
  width: "15%",
  padding: ".5rem 0",
  background: "#16C60C",
  color: "#fff",
  borderTop: "1px solid #EAEDF2",
  borderBottom: "1px solid #EAEDF2",
  borderRight: "1px solid #EAEDF2",
  borderLeft: "none",
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "4px",
  cursor: "pointer",
};

const Form = ({ movies, setMovies, loggedUser }) => {
  const [newMovieTitle, setNewMovieTitle] = useState("");
  console.log(loggedUser);
  const url = "/api";

  const addNewMovie = async (e) => {
    const newMovie = {
      title: newMovieTitle,
      seen: false,
      user: loggedUser._id,
    };

    try {
      const response = await axios.post(url, newMovie);
      const movie = response.data;
      setMovies([...movies, movie]);
      setNewMovieTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      style={{
        width: "80%",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "2rem",
      }}
    >
      <input
        style={input}
        value={newMovieTitle}
        onChange={(e) => setNewMovieTitle(e.target.value)}
        required
      />
      <button
        type="button"
        onClick={loggedUser && addNewMovie}
        style={submitButton}
      >
        Add movie
      </button>
    </form>
  );
};

export default Form;

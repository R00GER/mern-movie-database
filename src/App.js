import { useState, useEffect } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Form from "./components/Form";
import Login from "./views/Login";
import Register from "./views/Register";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [showMovieCount, setShowMovieCount] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);

  const history = useHistory();

  const url = "/api";

  console.log(loggedUser);

  // before implementing movie query from the user data
  // useEffect(() => {
  //   const getInitialMovies = async () => {
  //     const response = await axios.get(url);
  //     console.log(response.data);
  //     setMovies(response.data);
  //   };
  //   getInitialMovies();
  // }, []);

  useEffect(() => {
    if (loggedUser) setMovies(loggedUser.movies);
  }, [loggedUser]);

  const handleShowTodoCount = () => {
    setShowMovieCount(!showMovieCount);
  };

  const removeMovie = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setMovies(movies.filter((movie) => movie._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSeen = async (id) => {
    const foundedMovie = movies.find((movie) => movie._id === id);

    const movie = {
      ...foundedMovie,
      seen: !foundedMovie.seen,
    };

    try {
      const response = await axios.put(`${url}/${id}`, movie);
      const updatedMovie = response.data;
      setMovies(
        movies.map((movie) => (movie._id === id ? updatedMovie : movie))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateMovie = () => {
    // setIsUpdating(!isUpdating);
  };

  return (
    <div className="App">
      <Header text="Movie Database" loggedUser={loggedUser} />
      <Route path="/" exact>
        <Form movies={movies} setMovies={setMovies} loggedUser={loggedUser} />
        {movies.map((movie) => (
          <Movie
            movie={movie}
            removeMovie={removeMovie}
            toggleSeen={toggleSeen}
            updateMovie={updateMovie}
            // isUpdating={isUpdating}
          />
        ))}
        <Footer
          handleShowTodoCount={handleShowTodoCount}
          showMovieCount={showMovieCount}
          movies={movies}
        />
      </Route>
      <Route path="/login">
        <Login
          header="Login"
          loggedUser={loggedUser}
          setLoggedUser={setLoggedUser}
          history={history}
        />
      </Route>
      <Route path="/register">
        <Register header="Register" history={history} />
      </Route>
    </div>
  );
};

export default App;

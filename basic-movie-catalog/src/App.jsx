import { useState } from "react";
import AddButton from "./Components/AddButton/AddButton";
import Header from "./Components/Header/Header";
import MovieContainer from "./Components/MovieContainer/MovieContainer";

const moviesData = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    src: "src/assets/TLOU-poster.jpg",
  },
  { id: 2, name: "The Godfather", src: "src/assets/TLOU-poster.jpg" },
  { id: 3, name: "The Dark Knight", src: "src/assets/TLOU-poster.jpg" },
  { id: 4, name: "The Godfather II", src: "src/assets/TLOU-poster.jpg" },
  { id: 5, name: "12 Angry Men", src: "src/assets/TLOU-poster.jpg" },
];

function App() {
  const [newMovie, setNewMovie] = useState(moviesData);
  const [newValue, setNewValue] = useState("");
  function addNewMovieHandler() {
    if (newValue) {
      setNewMovie((prevMovies) => [
        {
          id: Date.now(),
          name: newValue,
          src: "src/assets/TLOU-poster.jpg",
        },
        ...prevMovies,
      ]);
      setNewValue(""); // Clear the input field
    }
  }
  return (
    <div className="app-container bg-blue-100 h-screen p-5 overflow-y-auto">
      <Header newValue={newValue} setNewValue={setNewValue} />
      <MovieContainer moviesData={newMovie} />
      <AddButton onAddNewMovie={addNewMovieHandler} />
    </div>
  );
}

export default App;

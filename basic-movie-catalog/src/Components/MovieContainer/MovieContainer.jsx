import MovieTile from "../MovieTile/MovieTile";

function MovieContainer(props) {
  const { moviesData, setMoviesData } = props;
  return (
    <div className="container grid grid-cols-1 gap-5 pt-5 pb-16">
      <MovieTile moviesData={moviesData} setMoviesData={setMoviesData} />
    </div>
  );
}
export default MovieContainer;

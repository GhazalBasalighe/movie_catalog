import MovieTile from "../MovieTile/MovieTile";

function MovieContainer(props) {
  const { moviesData, setMoviesData } = props;
  return (
    <div className="container grid grid-cols-1 gap-5 pt-5 pb-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <MovieTile moviesData={moviesData} setMoviesData={setMoviesData} />
    </div>
  );
}
export default MovieContainer;

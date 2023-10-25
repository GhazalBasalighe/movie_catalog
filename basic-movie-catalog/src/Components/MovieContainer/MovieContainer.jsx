import MovieTile from "../MovieTile/MovieTile";

function MovieContainer(props) {
  const { moviesData } = props;
  return (
    <div className="container grid grid-cols-1 gap-5 pt-5 pb-16">
      <MovieTile moviesData={moviesData} />
    </div>
  );
}
export default MovieContainer;

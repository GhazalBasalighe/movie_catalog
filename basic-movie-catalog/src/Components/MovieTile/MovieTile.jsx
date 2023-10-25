import { Icon } from "@iconify/react";

function MovieTile(props) {
  const { moviesData } = props;
  return moviesData.map((movie) => {
    return (
      <div className="bg-sky-200 flex gap-3 p-4 rounded-xl" key={movie.id}>
        <img
          src={movie.src}
          alt="movie poster"
          width={"100px"}
          className="rounded-lg"
        />
        <div className="flex flex-col justify-between items-start relative w-full">
          {/* TITLE */}
          <span className="font-bold text-xl">{movie.name}</span>
          {/* STARS */}
          <span className="flex">
            <Icon
              icon="mdi:star-rate"
              color="#d4af37"
              className="w-5 h-5"
            />
            <Icon
              icon="mdi:star-rate"
              color="#d4af37"
              className="w-5 h-5"
            />
            <Icon
              icon="mdi:star-rate"
              color="#d4af37"
              className="w-5 h-5"
            />
            <Icon
              icon="mdi:star-rate"
              color="#d4af37"
              className="w-5 h-5"
            />
            <Icon
              icon="mdi:star-rate"
              color="#d4af37"
              className="w-5 h-5"
            />
          </span>
          {/* WATCHED BUTTON */}
          <div className="flex items-center justify-between w-full">
            <button className="bg-sky-500 p-2 rounded-md text-slate-200">
              Watched
            </button>
            <button className="bg-red-500 rounded-full p-2 text-lg">
              <Icon icon="fluent:delete-12-regular" />
            </button>
          </div>
        </div>
      </div>
    );
  });
}

export default MovieTile;

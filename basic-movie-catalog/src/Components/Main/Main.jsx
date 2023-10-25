function Main() {
  return (
    <main className="flex flex-col justify-center items-center h-full relative">
      <img
        src="src/assets/movie.png"
        alt=""
        width={"100px"}
        className="absolute right-1 top-[40%] opacity-20"
      />
      <p className="text-lg font-fun">
        Your movie list is empty;
        <br />
        let's try to fill it up...
        <br />
        Write your favorite movie name, then click the add button, and
        magic will happen...😉
      </p>
    </main>
  );
}

export default Main;

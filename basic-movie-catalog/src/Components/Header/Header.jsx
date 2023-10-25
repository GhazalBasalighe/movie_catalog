function Header() {
  return (
    <header className="flex flex-col justify-center items-center gap-5 mx-auto mb-5">
      <h1 className="text-3xl font-bold">Movie List</h1>
      <input
        type="text"
        name="movie-name"
        id="movie-name"
        className="bg-blue-500 outline-none w-full p-3 rounded-md shadow-lg text-white caret-white placeholder-gray-300 placeholder-opacity-50 focus:border-2 focus:border-blue-700"
        placeholder="Enter your movie name"
      />
    </header>
  );
}

export default Header;

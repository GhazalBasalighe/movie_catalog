function Header(props) {
  const { inputValue, setInputValue } = props;
  function handleInput(event) {
    setInputValue(event.target.value);
  }
  return (
    <header className="flex flex-col justify-center items-center gap-5 mx-auto mb-5">
      <h1 className="text-3xl font-bold">Movie List</h1>
      <input
        type="text"
        name="movie-name"
        id="movie-name"
        className="bg-blue-500 border-2 border-blue-500 outline-none w-full sm:w-4/5 md:w-2/3 lg:w-1/3 p-3 rounded-md shadow-lg text-white caret-white placeholder-gray-300 placeholder-opacity-50 focus:border-2 focus:border-blue-700"
        placeholder="Enter your movie name"
        value={inputValue}
        onChange={handleInput}
      />
    </header>
  );
}

export default Header;

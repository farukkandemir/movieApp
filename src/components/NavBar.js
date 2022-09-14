import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function NavBar() {
  const [searchWord, setSearchWord] = useState("");

  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if (searchWord) {
      navigate(`/search/${searchWord}`);
      setSearchWord("");
    }
  }

  return (
    <header className="mt-4">
      <Link to="/">
        <p className="text-center  font-bold text-2xl">Movie Hell</p>
      </Link>

      <form onSubmit={handleSearch} className="text-center md:text-left mt-4">
        <input
          placeholder="Search Movies"
          type="text"
          className="bg-zinc-600  
          rounded-lg border-none outline-none p-1 px-4 w-64 sm:w-72 md:w-96 
          text-white placeholder:italic placeholder:text-slate-200"
          onChange={(e) => setSearchWord(e.target.value)}
          value={searchWord}
        />
      </form>
    </header>
  );
}

export default NavBar;

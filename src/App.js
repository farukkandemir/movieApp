import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import SearchFeed from "./components/SearchFeed";

function App() {
  return (
    <div className="w-screen  h-screen sm:w-11/12 md:w-4/5 mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </div>
  );
}

export default App;

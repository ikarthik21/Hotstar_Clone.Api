import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home_Components/Home";
import Header from "./Components/Home_Components/Header";
import SinglePage from "./Components/SinglePage";
import SearchMovie from "./Components/SearchMovie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchMovie />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/movie/:movie_id" element={<SinglePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

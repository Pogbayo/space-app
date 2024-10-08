import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="'/destination" element={<Destination />} />
          <Route path="'/crew" element={<Crew />} />
          <Route path="'/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

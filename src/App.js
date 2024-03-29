// src/App.js
import { useState, useContext } from "react";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import AddPlanet from "./components/AddPlanet.js";
import Navbar from "./components/Navbar/Navbar";
import Destinations from "./pages/destinations/destinations";
import Profile from "./pages/Profile/Profile";
import { useParams } from "react-router-dom";
import Highlights from "./pages/highlights/highlights";
import AuthProviderWrapper from "../src/context/auth.context";

// import IsPrivate from "./components/IsPrivate";
// import IsAnon from "./components/IsAnon";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const [planet, setPlanet] = useState(null);
  const { planetId } = useParams();

  return (
    <div className="App">
      <Navbar show={show} />
      <Routes>
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<AddPlanet />} />
        <Route
          path="/destinations/:planetId"
          element={<Destinations handleShow={handleShow} />}
        />
        <Route path="/profile" element={<Profile planetId={planetId} />} />
      </Routes>
    </div>
  );
}
export default App;

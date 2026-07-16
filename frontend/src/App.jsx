import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import Simulator from "./pages/Simulator";
import Analytics from "./pages/Analytics";
import History from "./pages/History";
import About from "./pages/About";

export default function App() {

  return (

    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/prediction" element={<Prediction />} />

        <Route path="/simulator" element={<Simulator />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/history" element={<History />} />

        <Route path="/about" element={<About />} />

      </Routes>

      </>

  );

}
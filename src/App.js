import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Context from "./Context";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

function App() {
  const [galeria, setGaleria] = useState([]);

  const endpoint = "/fotos.json";
  const fetchData = async () => {
    const response = await fetch(endpoint);
    let data = await response.json();
    let dataFiltrada = data.photos.map((elem) => ({
      id: elem.id,
      src: elem.src.tiny,
      desc: elem.alt,
      fav: false,
    }));
    setGaleria(dataFiltrada);
    console.log(dataFiltrada)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ galeria, setGaleria }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;

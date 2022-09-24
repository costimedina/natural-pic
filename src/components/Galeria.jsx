import { useContext } from "react";
import "../assets/css/galeria.css";
import Context from "../Context";
//import Heart from "./Heart";

function Galeria() {
  const { galeria, setGaleria } = useContext(Context);

  const setFav = (id) => {
    const elemIndex = galeria.findIndex((p) => p.id === id);
    galeria[elemIndex].fav = !galeria[elemIndex].fav;
    setGaleria([...galeria]);
  };

  return (
    <div className="galeria grid-columns-5 p-4">

      {galeria.map((elem, index) => (
        <div className="card text-bg-white"
          key={index}>

          <img className='card-img' src={elem.src} alt={elem.alt} />
          <div className="card-img-overlay">

            <svg
              onClick={() => setFav(elem.id)}
              width="40px"
              viewBox="0 0 24 24">

              <path
                fill={elem.fav ? "red" : "white"}
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />

            </svg>

            <p className="card-text">{elem.desc}</p>

          </div>
        </div>
      ))};
    </div>
  );
}

export default Galeria;

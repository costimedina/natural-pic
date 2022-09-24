import { useContext } from "react";
import Context from "../Context";
import "../assets/css/favoritos.css";

function Favoritos() {
  const { galeria, setGaleria } = useContext(Context);

  const deleteFav = (id) => {
    const elemIndex = galeria.findIndex((p) => p.id === id);
    galeria[elemIndex].fav = !galeria[elemIndex].fav;
    setGaleria([...galeria]);
  };

  return (
    <div>

      <h1>Fotos favoritas</h1>

      <div className="galeria grid-columns-5 p-4">

        {galeria
          .filter((elem) => elem.fav)
          .map((elem, index) => (
            <div className="card text-bg-white">
              
              <img className='card-img'
                src={elem.src}
                alt={elem.desc}
                onClick={() => deleteFav(elem.id)}
                key={index}
              />

            </div>
          ))}
      </div>

    </div>
  );
}

export default Favoritos;


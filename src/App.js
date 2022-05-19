import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

// fetch("https://rickandmortyapi.com/api/character")
//   .then(response => response.json() )
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json()) // para pedir el response del fetch y convertirlo desde json a JS
      .then((data) => {
        setCharacters(data.results); // los datos del API
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPreviousFetch = () => {
    fetchCharacters(info.prev);
  };

  const onNextFetch = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <Fragment>
      <Navbar brand="Rick and Morty llamada API" />

      <div className="container mt-5">
        <Pagination
          prevTernaria={info.prev}
          nextTernaria={info.next}
          onPrevious={onPreviousFetch}
          onNext={onNextFetch}
        />
        <Characters CharactersProps={characters} />
        <Pagination
          prevTernaria={info.prev}
          nextTernaria={info.next}
          onPrevious={onPreviousFetch}
          onNext={onNextFetch}
        />
      </div>
    </Fragment>
  );
}

export default App;

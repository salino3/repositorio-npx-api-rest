import React from 'react'

const Characters = ({ CharactersProps  }) => {
  return (
    <div className="row">
      {CharactersProps.map((item, index) => (
        <div key={index} className="col">
          <div className="card" style={{ minWidth: "15em" }}>
            <img src={item.image} alt="Imagen personaje" className='col mb'></img>
            <div className="card-body">
              <h5 className="card-title"> {item.name}</h5>
              <hr />
              <p>Species: {item.species}</p>

              <p>Location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters
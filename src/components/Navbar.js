import React, { Fragment} from 'react'

const Navbar = ({brand}) => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-uppercase" href="/">
           {brand}
          </a>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar
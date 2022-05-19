import React from "react";
import "../style.css";

const Pagination = ({ prevTernaria, nextTernaria, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prevTernaria ? (
          <li className="page-item">
            <button className="btn btn-warning" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}

        {nextTernaria ? (
          <li className="page-item">
            <button className="btn btn-primary " onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;

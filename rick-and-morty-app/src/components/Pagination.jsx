import React from 'react';

const Pagination = ({prev, next, onPrevius ,onNext}) => {

    const handlePrevius = () => {
        onPrevius();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul className ="pagination justify-content-center">
                {prev ? (
                    <li className="page-item">
                        <button className = "btn btn-dark me-md-2" onClick={handlePrevius}>Previo</button>
                    </li>
                ) : null}
                { next ? (
                    <li className="page-item">
                        <button className = "btn btn-dark" onClick={handleNext}>Siguiente</button>
                    </li>
                ) : null}                   
            </ul>
        </nav>
    );
};

export default Pagination
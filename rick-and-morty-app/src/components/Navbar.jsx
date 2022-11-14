import React from 'react';

const Navbar = () => {
    return (
        <div className= "encabezado">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand text-uppercase" href="/">Rick and Morty App</a>
                    <a className="text-uppercase navbar-brand" target ="_blank"  rel="noreferrer" href="https://rickymortylatino.com/">
                    <i class="bi bi-play"></i> Ver capitulos online
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
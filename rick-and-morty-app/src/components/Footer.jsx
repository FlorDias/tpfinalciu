import React from 'react';

const Footer = () => {
    return (
        <div className = "text-center text-lg-start footer">
            <div className="container p-4 ">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase colorLetra">Información</h5>
                        <p className="colorLetra">
                            Esta app web cumple con la función de mostrar datos de los personajes de la serie
                            Rick y Morty, en forma de tarjetas.
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase colorLetra">Redes Sociales</h5>
                        <p className="colorLetra">
                        <i class="bi bi-twitter colorLetra">Twitter:</i> @TheRickAndMortyApp
                        </p>
                        <p className="colorLetra">
                        <i class="bi bi-facebook colorLetra">Facebook:</i> The Rick And Morty App
                        </p>
                        <p className="colorLetra">
                        <i class="bi bi-instagram colorLetra">Instagram:</i> The Rick And Morty App
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="text-center p-3 colorLetra">
                Trabajo Final CUI 2022 | Desarrollado por © Dias Florencia
            </div>
        </div>
    )
}

export default Footer
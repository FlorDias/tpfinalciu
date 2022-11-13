import React from 'react';

const Characters = ({characters = []}) => {
    return (
        <div className="row">
            {characters.map((item,index) => (
                <div key ={index} className = "col mb-4">
                    <div className = "card" style = {{minWidht: "200px"}}>
                        <img src = {item.image} alt =""></img>
                        <div className="card.body">
                            <h5 className = "card-title"> {item.name}</h5>
                            <hr/>
                            <p>Localización: {item.location.name}</p>
                            <p>Especie: {item.species}</p>
                            <p>Estado: {item.status}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className ="col">
            </div>
        </div>
    )
}

export default Characters
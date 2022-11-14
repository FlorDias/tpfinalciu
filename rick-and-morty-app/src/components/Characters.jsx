import React from 'react';

const Characters = ({characters = []}) => {
    return (
        <div className="row">
            {characters.map((item,index) => (
                <div key ={index} className = "col -md-4 mb-4">
                    <div className = "card shadow p-4 mb-4 bg-white rounded border-secondary">
                        <img src = {item.image} alt=""style = {{minWidht: "200px"}}></img>
                        <div className="card-body">
                            <h5 className = "card-title"> {item.name}</h5>
                            <hr/>
                            <p>Localización: {item.location.name}</p>
                            <p>Especie: {item.species}</p>
                            <p>Estado: {item.status}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Characters
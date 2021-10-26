import React from 'react'

function Hero({ hero }) {
    return (
        <div >
            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
            <h2 className="text-lg text-bold">{ hero.name}</h2>
        </div>
    )
}

export default Hero;

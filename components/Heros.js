import React from "react";
import Hero from './Hero';

function Heros({ heros }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {heros.map((h) => (
        <Hero key={h.id} hero={h} />
      ))}
    </div>
  );
}

export default Heros;

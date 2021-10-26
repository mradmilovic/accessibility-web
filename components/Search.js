import React from 'react'

function Search({value, onChange}) {
    return (
        <input className="w-full border-2 border-gray-400 focus:border-black mb-3" type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search superhero" />
    )
}

export default Search


const API_BASE = 'https://gateway.marvel.com/v1/public';

export const fetchHeros = async (query = "", limit = 20, offset = 0) => {
    const searchQuery = new URLSearchParams();
    searchQuery.append("apikey", process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY);
    query && searchQuery.append("nameStartsWith", query);
    limit && searchQuery.append("limit", limit);
    offset && searchQuery.append("offset", offset);

    const resp = await fetch(`${API_BASE}/characters?${searchQuery.toString()}`);
    
    return await resp.json();
}
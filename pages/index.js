import { useEffect, useState } from "react";
import { fetchHeros } from "../api";
import Heros from "../components/Heros";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import ceil from "lodash/ceil";

export default function Home({ test }) {
  const [heros, setHeros] = useState([]);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState();

  useEffect(async () => {
    const resp = await fetchHeros(query);
    setHeros(resp.data.results);
    setTotal(resp.data.total);
  }, [query]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Search value={query} onChange={setQuery} />
        {test}
        <Heros heros={heros} />
        <Pagination numberOfPages={ceil(total / 20)} />
      </main>
    </div>
  );
}

export const getStaticProps = () => {
  const test = "TEST";
  return {
    props: {
      test,
    },
    revalidate: 60,
  };
};

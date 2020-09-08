import { useState, useEffect } from "react";
import { fetchLists } from "../api/data";

function useAsync(asyncFunction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      setData(null);
      const lists = await fetchLists();
      setData(lists);
    } catch (erro) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [asyncFunction]);
  return { data, loading, error, refetch: fetchData };
}

export default useAsync;

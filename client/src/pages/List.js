import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchList } from "../api/data";

function List() {
  const { id } = useParams();
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const fetchedList = await fetchList(id);
        setList(fetchedList);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    }
    fetchData();
  }, [id]);
  return (
    <>
      {error && <div>Could not get data. Dont cry. Try again</div>}
      {loading && <div>Loading...</div>}
      {list && (
        <>
          <h2>{list?.name}</h2>
          <div>
            <button onClick={() => history.goBack()}></button>
          </div>
        </>
      )}
    </>
  );
}

export default List;

import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchList } from "../api/list";
import styled from "@emotion/styled";
import { fetchProducts, postProduct } from "../api/products";
import useAsync from "../hooks/useAsync";

function List() {
  const { id } = useParams();

  const [productName, setproductName] = useState("");
  const history = useHistory();

  const { data: list, loading, error, refetch } = useAsync(fetchList, id);

  async function handleSubmit(event) {
    event.preventDefault();
    const product = { name: productName, listId: list.id };
    await postProduct(product);
    await refetch();
    setproductName("");
  }

  async function handleClick() {
    const products = await fetchProducts();
    return console.log(products);
  }
  return (
    <>
      {error && <div>Could not get data. Dont cry. Try again</div>}
      {loading && <div>Loading...</div>}
      {list && (
        <>
          <Container>
            <h2>{list.name}</h2>
            <div>
              <button onClick={() => history.goBack()}>Back</button>
            </div>
            <button onClick={() => handleClick()}>Log Products</button>

            <Form onSubmit={handleSubmit}>
              <label>Add your roducts</label>
              <input
                placeholder="Search products"
                value={productName}
                onChange={(event) => setproductName(event.target.value)}
              />
              <button>Cancel</button>
              <input type="submit" value="Add product" />
            </Form>
            <p>List ID:{list.id}</p>

            {list.products.map((product) => (
              <div key={product.id}>
                <p>{product.id}</p>
                <p>{product.name}</p>
              </div>
            ))}
          </Container>
        </>
      )}
    </>
  );
}

export default List;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: solid 1px;
  margin: 10px 0;
`;

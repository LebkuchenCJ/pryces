import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchList } from "../api/list";
import styled from "@emotion/styled";
import { postProduct, fetchProductByname } from "../api/products";
import useAsync from "../hooks/useAsync";

function List() {
  const { id } = useParams();
  const [query, setQuery] = useState([]);
  const [display, setDisplay] = useState(false);
  const [products, setProducts] = useState([]);
  const history = useHistory();

  const { data: list, loading, error, refetch } = useAsync(fetchList, id);

  async function handleClick(product) {
    console.log(product);
    setDisplay(!display);
    const data = {
      name: product.name,
      productId: product.id,
      listId: list.id,
    };
    await postProduct(data);
    await refetch();
    setQuery("");
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const product = { name: query, listId: list.id };
    await postProduct(product);
    await refetch();
    setQuery("");
  }

  let timeOutId;
  function handleChange(input) {
    setQuery(input);
    clearTimeout(timeOutId);
    timeOutId = setTimeout(async () => {
      const result = await fetchProductByname(query);
      setProducts(result);
    }, 300);
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

            <Form onSubmit={handleSubmit}>
              <label>Add your roducts</label>
              <input
                placeholder="Search products"
                value={query}
                onClick={() => setDisplay(!display)}
                onChange={(event) => {
                  handleChange(event.target.value);
                }}
              />
              {display && (
                <div>
                  {products?.map((product) => (
                    <ProductName
                      key={product.id}
                      onClick={() => {
                        handleClick(product);
                      }}
                    >
                      {product.name}
                    </ProductName>
                  ))}
                </div>
              )}

              <button>Cancel</button>
              <input type="submit" value="Add product" />
            </Form>
            <p>List ID:{list.id}</p>

            <ProductList>
              <h4>Product List</h4>
              {list.products.map((product) => (
                <p key={product.id}>Product: {product.name}</p>
              ))}
            </ProductList>
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

const ProductList = styled.div`
  background-color: #f2f2f2;
  border: solid 1px;
  > h4 {
    text-align: center;
    text-decoration: underline;
  }
  > p {
    padding: 0 5px;
  }
`;

const ProductName = styled.p`
  margin: 0;
  :hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;

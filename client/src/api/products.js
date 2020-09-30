export async function postProduct(listId, product) {
  const response = await fetch(`/api/lists/${listId}/products`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

export async function fetchListProducts(listId) {
  const response = await fetch(`/api/lists/${listId}/products`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

export async function fetchProductByname(query) {
  const response = await fetch(`/api/productList?q=${query}`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

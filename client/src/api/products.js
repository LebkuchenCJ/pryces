export async function fetchProducts() {
  const response = await fetch("/api/productLists");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

export async function postProduct(product) {
  const response = await fetch(`/api/products`, {
    method: "POST",
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

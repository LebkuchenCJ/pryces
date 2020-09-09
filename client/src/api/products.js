export async function fetchProducts() {
  const response = await fetch("/api/products");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

export async function postProduct(name, product) {
  const response = await fetch(`/api/lists/${name}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

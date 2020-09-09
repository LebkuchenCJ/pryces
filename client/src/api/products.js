export async function fetchProducts() {
  const response = await fetch("/api/products");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

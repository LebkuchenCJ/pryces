export async function fetchSupermarkets() {
  const response = await fetch("/api/supermarkets");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

export default async function fetchLists() {
  const response = await fetch("http://localhost:3002/lists");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

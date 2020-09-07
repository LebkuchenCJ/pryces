export default async function fetchLists() {
  const response = await fetch("http://localhost:3002/lists");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}
export async function postList(listName) {
  const response = await fetch(`http://localhost:3002/lists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(listName),
  });
  if (!response.ok) {
    throw new Error(response);
  }
  return response;
}

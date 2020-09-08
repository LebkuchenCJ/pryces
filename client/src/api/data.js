export async function fetchLists() {
  const response = await fetch("/api/lists");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}
export async function postList(name) {
  const response = await fetch(`/api/lists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(name),
  });
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

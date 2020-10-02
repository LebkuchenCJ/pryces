export async function fetchUserLogin(newUser) {
  const response = await fetch(`/api/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

export async function postUser(user) {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

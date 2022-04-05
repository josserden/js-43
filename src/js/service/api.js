export function fetchUser(user) {
  return fetch(`https://api.github.com/users/${user}`).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  });
}

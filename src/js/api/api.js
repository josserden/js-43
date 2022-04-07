const BASE_URL = 'https://624dade777abd9e37c7c8930.mockapi.io';

const totalComments = 100;
const pageSize = 25;
const totalPage = totalComments / pageSize;
let page = 1;

export function getComments() {
  const url = `${BASE_URL}/comments?page=${page}&limit=${pageSize}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return response.json();
    })
    .then(comments => {
      page += 1;

      return {
        comments,
        hasNextPage: page <= totalPage,
      };
    });
}

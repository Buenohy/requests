export const fetcher = (url: string) =>
  fetch(`http://localhost:3000${url}`).then((response) => response.json());

export const api = (url: string, options: RequestInit = {}) => {
  const customHeaders = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  return fetch(`http://localhost:3000${url}`, {
    ...options,
    headers: customHeaders,
  }).then((res) => res.json());
};

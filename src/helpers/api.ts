export const fetcher = (url: string) =>
  fetch(`http://localholst/3000/${url}`).then((res) => res.json());

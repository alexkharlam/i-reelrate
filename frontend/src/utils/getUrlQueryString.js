export default function getUrlQueryString(query = {}) {
  const queryString = Object.keys(query)
    .map((key) => {
      const value = query[key];
      if (value) return `${key}=${value}`;
    })
    .filter(Boolean)
    .join("&");

  return queryString;
}

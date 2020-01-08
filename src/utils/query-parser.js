export function parseQueryString(query) {
  if (!query) {
    return {};
  }

  return query.split('&').reduce((acc, queryItem) => {
    const pair = queryItem.split('=');
    if (pair && pair.length === 2) {
      acc[pair[0]] = pair[1];
    }
    return acc;
  }, {});
}

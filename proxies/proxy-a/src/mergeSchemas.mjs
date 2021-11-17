import merge from "lodash.merge";
import fetch from "node-fetch";

const fetchSchemas = (urls) => {
  const requests = urls.map((url) =>
    fetch(url)
      .then((res) => res.json())
      .catch(() => ({}))
  );

  return Promise.all(requests);
};

export const mergeSchemas = (urls) =>
  fetchSchemas(urls).then((schemas) => merge({}, ...schemas));

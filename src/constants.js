const BASE_PROTOCOL = "http://";
const BASE_URL = "localhost:8000";

export function populateUrl(path) {
  return BASE_PROTOCOL + BASE_URL + path;
}

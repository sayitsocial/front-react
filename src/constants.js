const BASE_PROTOCOL = "http://";
const DEV_URL = "dev.sayitsocial.in:9001";

export function populateUrl (path) {
  return BASE_PROTOCOL + DEV_URL + path;
}

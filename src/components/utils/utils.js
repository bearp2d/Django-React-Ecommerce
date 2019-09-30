import queryString from "query-string";

// Append new query with last query
export function appendQuery(location, query) {
  const parsed = queryString.parse(location.search);
  let pathname = location.pathname;
  if (pathname.slice(-1) !== "/") {
    pathname += "/";
  }
  return {
    ...location,
    pathname,
    search: "?" + queryString.stringify({ ...parsed, ...query })
  };
}

export function removeQuery(location, query) {
  let parsed = queryString.parse(location.search);
  delete parsed[query];
  return {
    ...location,
    search: "?" + queryString.stringify(parsed)
  };
}

export const phone_number_or_email_reg = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^09\d{9}$/;
export const phone_number_reg = /^09\d{9}$/;

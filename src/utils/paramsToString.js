const paramsToString = (params = {}) => {
  if (Object.keys(params).length === 0) {
    return "";
  }
  return Object.keys(params)
    .reduce(
      (acc, key) => (params[key] ? [...acc, `${key}=${params[key]}`] : acc),
      []
    )
    .join("&");
};

export default paramsToString;

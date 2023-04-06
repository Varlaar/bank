const paramsToString = (params = {}) => {
  if (Object.keys(params).length === 0) {
    return "";
  }
  return Object.keys(params)
    .reduce((acc, key) => {
      if (params[key]) {
        return [...acc, `${key}=${params[key]}`];
      }
      return acc;
    }, [])
    .join("&");
};

export default paramsToString;

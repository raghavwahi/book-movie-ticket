export const filterData = (data, key) => {
  if (key) {
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(key.toLowerCase());
    });
    return filteredData;
  }

  return data;
};

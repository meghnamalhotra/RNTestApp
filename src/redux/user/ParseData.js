export const parseUserList = data => {
  return data.map(item => {
    return {
      name: item?.name ? item.name : 'N/A',
    };
  });
};

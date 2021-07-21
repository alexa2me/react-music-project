export const headerApi = () => {
  const token = localStorage.getItem("token");

  const header = { headers: { Authorization: token } };

  return header;
};

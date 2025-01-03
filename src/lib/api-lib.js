export const getData = async (resource) => {
  const response = await fetch(resource);
  const data = await response.json();
  return data;
};

export const getRoles = async () => {
  const roles = await getData("/api/role");

  return [
    {
      id: 0,
      name: "All",
    },
    ...roles,
  ];
};

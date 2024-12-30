export const getHeroes = async () => {
  const response = await fetch("/api/hero");
  const heroes = await response.json();

  return heroes;
};

export const getData = async (resource) => {
  const response = await fetch(resource);
  const data = await response.json();
  return data;
};

export const getRoles = async () => {
  const roles = await getData("/api/data/role");

  return [
    {
      id: 0,
      name: "All",
    },
    ...roles,
  ];
};

export const getDataHero = async (resource) => {
  const response = await fetch(resource);
  const data = await response.json();
  return data;
};

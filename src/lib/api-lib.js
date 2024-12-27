export const getHero = async (resource) => {
  const response = await fetch(resource);
  const heroes = await response.json();

  const data = heroes.data.map((hero) => ({
    ...hero,
    roles: hero.roles.map((role) => role.name),
  }));

  return data;
};

export const getData = async (resource) => {
  const response = await fetch(resource);
  const data = await response.json();
  return data;
};

export const getRoles = async (resource) => {
  const roles = await getData(resource);

  return [
    {
      id: 0,
      name: "All",
    },
    ...roles,
  ];
};

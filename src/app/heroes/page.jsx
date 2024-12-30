"use client";

import ChevronUpDownIcon from "@/components/svg/ChevronUpDownIcon";
import LoadingIcon from "@/components/svg/LoadingIcon";
import { getHeroes, getRoles } from "@/lib/api-lib";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroes = async () => {
      setIsLoading(true);
      const data = await getHeroes();
      setIsLoading(false);
      setHeroes(data);
      setFiltered(data);
    };

    fetchHeroes();
  }, []);

  if (isLoading) {
    return (
      <main className="bg-midnight min-h-screen flex flex-col justify-center items-center">
        <div className="mx-auto max-w-screen-xl w-full px-4 py-6">
          <div className="flex items-center justify-center text-color-base text-4xl">
            <LoadingIcon className="animate-spin -ml-1 mr-3 h-8 w-8 text-white" />
            Loading
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-midnight min-h-screen flex flex-col items-center mt-10">
      <div className="mx-auto max-w-screen-xl w-full px-4 py-6">
        {heroes.length !== 0 ? (
          <div className="max-w-screen-lg mx-auto">
            <TabFilter
              data={heroes}
              filtered={filtered}
              setFiltered={setFiltered}
            />
            <GridHeroes data={filtered} />
          </div>
        ) : (
          <div className="pt-20 flex justify-center items-center text-color-base text-4xl">
            oops, there's no data 🤪
          </div>
        )}
      </div>
    </main>
  );
};

const difficulties = [
  { id: 0, name: "All", threshold: 0 },
  { id: 1, name: "Very Easy", threshold: 2 },
  { id: 2, name: "Easy", threshold: 4 },
  { id: 3, name: "Normal", threshold: 6 },
  { id: 4, name: "Hard", threshold: 8 },
  { id: 5, name: "Very Hard", threshold: 10 },
];

function TabFilter({ data, filtered, setFiltered }) {
  const [roles, setRoles] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [difficulty, setDifficulty] = useState({
    id: 0,
    name: "All",
    threshold: 0,
  });
  const [active, setActive] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      const data = await getRoles();
      setRoles(data);
    };

    fetchRoles();
  }, []);

  const handleRoleChange = (roleName) => {
    if (active === roleName) {
      // Jika tab role yang sama di-klik, ubah urutan sort
      const sortedHero = [...filtered].sort((a, b) =>
        isAscending ? b.id - a.id : a.id - b.id
      );

      setFiltered(sortedHero);
      setIsAscending(!isAscending); // Toggle urutan sort
    } else {
      // Jika tab role yang berbeda di-klik, filter hero berdasarkan role
      setActive(roleName); // Update active tab
      if (roleName === "All") {
        setFiltered(data);
      } else {
        const filteredHero = data.filter((hero) =>
          hero.roles.includes(roleName)
        );
        setFiltered(filteredHero);
      }

      setIsAscending(true); // Reset ke ASC setiap ganti role
    }
  };

  const handleDifficultyChange = (diff) => {
    const filteredHero = data.filter(
      (hero) =>
        hero.difficulty >= diff.threshold - 1 &&
        hero.difficulty <= diff.threshold
    );

    setFiltered(diff.threshold === 0 ? data : filteredHero);
    setDifficulty(diff);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full mt-5 flex justify-center flex-wrap py-0.5 border border-highlight">
      <div className="flex justify-center items-center flex-wrap">
        {roles.map((role) => (
          <button
            key={role.id}
            className={`px-3 py-2 text-xs font-dinnext uppercase font-bold ring-0 focus:outline-none ${
              active === role.name
                ? "bg-highlight text-midnight"
                : "text-soft-white hover:bg-color-base hover:text-midnight"
            }`}
            onClick={() => handleRoleChange(role.name)}
          >
            {role.name}
          </button>
        ))}
      </div>

      <div className="relative w-28 ml-9 ">
        <button
          className="relative w-full bg-color-base flex justify-between items-center cursor-default py-2 shadow-md text-sm"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="pl-2.5">{difficulty.name}</span>
          <span className="pointer-events-none pr-1">
            <ChevronUpDownIcon className="h-5 w-5 text-charcoal" />
          </span>
        </button>
        {isDropdownOpen && (
          <ul className="absolute z-40 mt-1 w-full bg-color-base py-1 text-sm">
            {difficulties.map((diff) => (
              <li
                key={diff.id}
                className={`cursor-pointer py-2 px-2.5 ${
                  diff.id === difficulty.id
                    ? "font-medium text-highlight"
                    : "font-normal text-charcoal"
                }`}
                onClick={() => handleDifficultyChange(diff)}
              >
                {diff.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function GridHeroes({ data }) {
  return (
    <div className="mt-8 grid grid-cols-5 gap-4">
      <AnimatePresence mode="popLayout">
        {data.map((hero) => (
          <motion.div
            key={hero.id}
            layout="position"
            layoutId={`hero-${hero.id}`}
            layoutDependency={data}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              opacity: { duration: 0.3 }, // Durasi animasi opacity
            }}
          >
            <Link
              href={`/heroes/${hero.id}`}
              className="block relative h-72 overflow-hidden group trasition ease-out duration-300 hover:transform hover:scale-110 hover:z-10"
            >
              <Image
                src={hero.portrait}
                width={240}
                height={390}
                alt={hero.name}
                quality={70}
                className="h-full max-h-72 w-full object-top object-cover transform scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 w-full h-full pointer-events-none transition-[opacity,bottom] ease-out duration-300 opacity-0 group-hover:opacity-100">
                <div className="absolute w-full h-full bg-gradient-to-t from-midnight/90 from-10% via-charcoal/5 via-30%" />
              </div>
              <div className="absolute inset-x-0 -bottom-9 group-hover:bottom-0 z-20 w-full h-12 flex items-center transition-[opacity,bottom] ease-out duration-300 opacity-0 group-hover:opacity-100">
                <p className="ml-3 text-2xl text-soft-white">{hero.name}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Heroes;

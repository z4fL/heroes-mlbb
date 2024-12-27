"use client";

import { useState } from "react";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [filtered, setFiltered] = useState([]);

  return (
    <main className="">
      <div>
        <h1>All Heroes</h1>
      </div>
    </main>
  );
};

export default Heroes;

"use client";

import { getData } from "@/lib/api-lib";
import Image from "next/image";
import React, { createContext, useContext, useEffect, useState } from "react";

const items = [
  {
    image: "/images/gallery/legend/Hero2210-splashart.jpg",
    title: "Galactic Vanquisher",
  },
  {
    image: "/images/gallery/legend/Hero689-splashart.png",
    title: "Divine Goddess",
  },
  {
    image: "/images/gallery/legend/Hero109-splashart.jpg",
    title: "King of Hell",
  },
  {
    image: "/images/gallery/legend/Hero809-splashart.jpg",
    title: "Psion of Tomorrow",
  },
  {
    image: "/images/gallery/legend/Hero577-splashart.jpg",
    title: "Infernal Blaze",
  },
  {
    image: "/images/gallery/legend/Hero797-splashart.jpg",
    title: "Starfall Knight",
  },
  {
    image: "/images/gallery/legend/Hero568-splashart.jpg",
    title: "Cosmic Gleam",
  },
  {
    image: "/images/gallery/legend/Hero537-splashart.jpg",
    title: "Angelic Agent",
  },
  {
    image: "/images/gallery/legend/Hero77-splashart.jpg",
    title: "Obsidian Blade",
  },
  {
    image: "/images/gallery/legend/Hero234-splashart.jpg",
    title: "Conqueror",
  },
  {
    image: "/images/gallery/legend/Hero16-splashart.jpg",
    title: "Modena Butterfly",
  },
  {
    image: "/images/gallery/legend/Hero34-splashart.jpg",
    title: "Codename - Storm",
  },
];

const GalleryContext = createContext();

const GalleryProvider = ({ children }) => {
  const [skinTag, setSkinTag] = useState([]);
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    const fetchSkinTags = async () => {
      try {
        const data = await getData(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/skin-tag?isgallery=true`
        );
        setSkinTag(data);
      } catch (error) {
        console.error("Failed to fetch skin tags:", error);
      }
    };

    fetchSkinTags();
  }, []);

  const getSkin = async (tag) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/skin?tag=${tag}`;

      const data = await getData(url);
      setSkins(data);
    } catch (error) {
      console.error("Failed to fetch skins:", error);
    }
  };

  return (
    <GalleryContext.Provider value={{ skins, getSkin }}>
      <div className="mt-5 flex flex-col justify-start space-y-6 overflow-y-scroll">
        {skinTag.map((tag) => (
          <Image
            key={tag.id}
            src={tag.icon}
            width={84}
            height={40}
            alt={tag.name}
            onClick={() => getSkin(tag.name)}
            className="w-20 h-auto cursor-pointer"
          />
        ))}
      </div>
      <div className="flex flex-grow justify-center overflow-y-scroll">
        {children}
      </div>
    </GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);

export default GalleryProvider;

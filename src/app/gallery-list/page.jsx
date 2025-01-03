"use client";

import { useGallery } from "./gallery-provider";

const GalleryList = () => {
  const { skins } = useGallery();
  
  const splitItems =
    skins.length > 6 ? [skins.slice(0, 6), skins.slice(6)] : [skins];

  const getGridStyle = (hoverIndex, group) =>
    group.map((_, i) => (i === hoverIndex ? "3fr" : "1fr")).join(" ");

  return (
    <div>
      {splitItems.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={classNames(
            "relative grid gap-4 w-[1024px] h-[500px] group/container transition-all duration-300"
          )}
          style={{
            gridTemplateColumns: group.map(() => "1fr").join(" "),
          }}
        >
          {group.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${item.crop ?? item.splashArt})`,
              }}
              className={classNames(
                "mt-5 group relative bg-center bg-no-repeat bg-cover flex justify-center items-center transition-all duration-300",
                `group-hover/container:grayscale group-hover/container:opacity-25 group-hover/container:hover:grayscale-0 group-hover/container:hover:opacity-100`
              )}
              onMouseEnter={(e) =>
                (e.currentTarget.parentElement.style.gridTemplateColumns =
                  getGridStyle(i, group))
              }
              onMouseLeave={(e) =>
                (e.currentTarget.parentElement.style.gridTemplateColumns = group
                  .map(() => "1fr")
                  .join(" "))
              }
            >
              <span className="absolute bottom-5 p-2.5 bg-midnight text-soft-white text-nowrap tracking-wider uppercase transform translate-y-14 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-300">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default GalleryList;

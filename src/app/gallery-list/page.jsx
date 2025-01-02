"use client"

const GalleryList = () => {
  const items = [
    { image: "/images/gallery/legend/Hero2210-splashart.jpg", title: "Galactic Vanquisher" },
    { image: "/images/gallery/legend/Hero2210-splashart.jpg", title: "Galactic Vanquisher" },
    { image: "/images/gallery/legend/Hero2210-splashart.jpg", title: "Galactic Vanquisher" },
    { image: "/images/gallery/legend/Hero2210-splashart.jpg", title: "Galactic Vanquisher" },
    { image: "/images/gallery/legend/Hero2210-splashart.jpg", title: "Galactic Vanquisher" },
    { image: "/images/gallery/legend/Hero2210-splashart.jpg", title: "Galactic Vanquisher" },
  ];

  const defaultColumns = items.map(() => "1fr").join(" ");

  const getGridStyle = (hoverIndex) =>
    items.map((_, i) => (i === hoverIndex ? "3fr" : "1fr")).join(" ");

  return (
    <main className="flex flex-col items-center mt-10 bg-midnight max-w-screen-2xl mx-auto">
      <div className="min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
        <div
          className={classNames(
            "mt-20 relative grid gap-4 w-[1280px] h-[500px] group/container transition-all duration-300",
          )}
          style={{
            gridTemplateColumns: defaultColumns
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundImage:
                  `url(${item.image})`,
              }}
              className={classNames(
                `box-${i + 1}`,
                "group relative bg-center bg-no-repeat bg-cover flex justify-center items-center transition-all duration-300",
                `group-hover/container:grayscale group-hover/container:opacity-25 group-hover/container:hover:grayscale-0 group-hover/container:hover:opacity-100`
              )}
              onMouseEnter={(e) => (e.currentTarget.parentElement.style.gridTemplateColumns = getGridStyle(i))}
              onMouseLeave={(e) => (e.currentTarget.parentElement.style.gridTemplateColumns = defaultColumns)}
            >
              <span className="absolute bottom-5 p-2.5 bg-midnight text-soft-white text-nowrap tracking-wider uppercase transform translate-y-14 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-300">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default GalleryList;

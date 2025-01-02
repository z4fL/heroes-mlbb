const GalleryList = () => {
  return (
    <main className="flex flex-col items-center mt-10 bg-midnight max-w-screen-2xl mx-auto">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div
          className={classNames(
            "mt-20 relative grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-4 w-[1280px] h-[500px] group/container transition-all duration-300",
            "[&:has(.box-1:hover)]:grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr]",
            "[&:has(.box-2:hover)]:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr]",
            "[&:has(.box-3:hover)]:grid-cols-[1fr_1fr_3fr_1fr_1fr_1fr]",
            "[&:has(.box-4:hover)]:grid-cols-[1fr_1fr_1fr_3fr_1fr_1fr]",
            "[&:has(.box-5:hover)]:grid-cols-[1fr_1fr_1fr_1fr_3fr_1fr]",
            "[&:has(.box-6:hover)]:grid-cols-[1fr_1fr_1fr_1fr_1fr_3fr]"
          )}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              style={{
                backgroundImage:
                  "url(/images/gallery/legend/Hero2210-splashart.jpg)",
              }}
              className={classNames(
                `box-${i + 1}`,
                "group relative bg-center bg-no-repeat bg-cover flex justify-center items-center transition-all duration-300",
                `group-hover/container:grayscale group-hover/container:opacity-25 group-hover/container:hover:grayscale-0 group-hover/container:hover:opacity-100`
              )}
            >
              <span className="absolute bottom-5 p-2.5 bg-midnight text-soft-white text-nowrap tracking-wider uppercase transform translate-y-14 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-300">
                Galactic Vanquisher
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

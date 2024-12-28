"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import ChevronLeftIcon from "@/components/svg/ChevronLeftIcon";
import ChevronRightIcon from "@/components/svg/ChevronRightIcon";
import ChevronUpIcon from "@/components/svg/ChevronUpIcon";

const START_INDEX = 0;
const DRAG_THRESHOLD = 45;
const FALLBACK_WIDTH = 132;
const CONTAINER_WIDTH = 320;
const PADDING = 12;

const TopSection = ({ data }) => {
  // const { skins } = data;
  const skins = [
    {
      id: 0,
      heroId: 84,
      name: "Cyan Finch",
      icon: "/images/heroes/84/Hero841-icon.png",
      portrait: "/images/heroes/84/Hero841-portrait.png",
      splashArt: "/images/heroes/84/Hero841-splashart.jpg",
      skinTagId: null,
      skinTag: null,
    },
    ...data.skins,
  ];

  const ratings = [
    { name: "durability", value: data.durability },
    { name: "offense", value: data.offense },
    { name: "controlEffect", value: data.controlEffect },
    { name: "difficulty", value: data.difficulty },
  ];

  const specialities = data.specialities.map((speciality) => speciality.name);

  const [currentSkin, setCurrentSkin] = useState(0);
  const [activeSlide, setActiveSlide] = useState(START_INDEX);

  const [isOpen, setIsOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < skins.length - 1;

  const initialOffset = CONTAINER_WIDTH / 2 - FALLBACK_WIDTH / 2;
  const offsetX = useMotionValue(initialOffset);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  });

  const handleDragEnd = (_, { offset: { x: dragOffset } }) => {
    //stop drag animation (rest velocity)
    animatedX.stop();

    const currentOffset = offsetX.get();

    //snap back if not dragged far enough or if at the start/end of the list
    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;
    /*
      - start searching from currently active slide in the direction of the drag
      - check if the drag offset is greater than the width of the current item
      - if it is, add/subtract the width of the next/prev item to the offsetWidth
      - if it isn't, snap to the next/prev item
    */
    for (
      let i = activeSlide;
      dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const currentItem = itemsRef.current[i];
      const itemOffset = currentItem.offsetWidth;

      const prevItemWidth = itemsRef.current[i - 1]?.offsetWidth;
      const nextItemWidth = itemsRef.current[i + 1]?.offsetWidth;

      if (
        (dragOffset > 0 && // dragging left
          dragOffset > offsetWidth + itemOffset && // dragged past item
          i > i) || // not the first/second item
        (dragOffset < 0 && // dragging right
          dragOffset < offsetWidth + -itemOffset && // dragged past item
          i < itemsRef.current - 2) // not the last/second to last item
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        // prev
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveSlide(i - 1);
        setCurrentSkin(i - 1);
      } else if (dragOffset < 0) {
        // next
        offsetX.set(currentOffset + offsetWidth - nextItemWidth);
        setActiveSlide(i + 1);
        setCurrentSkin(i + 1);
      }
      break;
    }
  };

  const handleSkinChange = (direction) => {
    const nextIndex = activeSlide + direction;
    if (nextIndex < 0 || nextIndex >= skins.length) return;

    const nextWidth = itemsRef.current
      .at(nextIndex)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;

    offsetX.set(offsetX.get() - nextWidth * direction);
    setActiveSlide(nextIndex);
    setCurrentSkin(nextIndex);
  };

  return (
    <div className="relative w-full max-w-screen-xl h-[39rem] overflow-hidden">
      {/* Start Slider */}
      <div className="w-full">
        <div className="flex w-full h-full">
          {skins.map((skin, index) => (
            <div
              key={index}
              className={`relative w-full h-[720px] ${index !== currentSkin ? "hidden" : ""}`}
            >
              <Image
                src={skin.splashArt}
                alt={skin.name}
                fill={true}
                quality={70}
                className="object-cover object-top"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      {/* End Slider */}

      {/* Start Carousel */}
      <div
        className="absolute bottom-16 right-28 z-20 w-full max-w-xs"
        ref={containerRef}
      >
        <div className="relative h-52 flex items-center overflow-hidden">
          <motion.ul
            className="flex items-center cursor-grab"
            style={{
              x: animatedX,
            }}
            drag="x"
            dragConstraints={{
              left: -(
                (skins.length - 1) * FALLBACK_WIDTH -
                (skins.length + 1) * PADDING
              ),
              right: CONTAINER_WIDTH / 2 - FALLBACK_WIDTH / 2,
            }}
            onDragEnd={handleDragEnd}
          >
            {skins.map((skin, index) => (
              <motion.li
                key={skin.name}
                ref={(el) => (itemsRef.current[index] = el)}
                layout
                className="relative shrink-0 px-1.5"
              >
                <Image
                  src={skin.portrait}
                  width={240}
                  height={390}
                  alt={skin.name}
                  quality={50}
                  className={`select-none w-[120px] h-full object-cover transition-transform transform ease-in-out duration-200 ${
                    index === activeSlide ? "scale-100" : "scale-90"
                  } `}
                />
              </motion.li>
            ))}
          </motion.ul>
          <button
            className="w-10 h-10 group absolute left-0 z-20 cursor-pointer focus:outline-none"
            onClick={() => handleSkinChange(-1)}
            disabled={!canScrollPrev}
          >
            <ChevronLeftIcon className="w-8 h-8 text-soft-white group-enabled:group-hover:text-highlight group-disabled:opacity-50" />
          </button>
          <button
            className="w-10 h-10 group absolute right-0 z-20 cursor-pointer focus:outline-none"
            onClick={() => handleSkinChange(1)}
            disabled={!canScrollNext}
          >
            <ChevronRightIcon className="w-8 h-8 text-soft-white group-enabled:group-hover:text-highlight group-disabled:opacity-50" />
          </button>
        </div>
      </div>
      {/* End Carousel */}

      {/* Start Disclosure */}
      <div className="max-w-lg w-full absolute bottom-6 left-28 z-30 bg-soft-white pt-5 pb-7 px-6">
        <button
          className="absolute -top-10 left-0 flex bg-soft-white px-4 py-2 text-left text-sm font-medium text-info hover:bg-color-primary focus:outline-none"
          onClick={() => setIsPanelOpen(!isPanelOpen)}
        >
          <span>{isPanelOpen ? "Minimize" : "Maximize"}</span>
          <ChevronUpIcon
            className={`h-5 w-5 ml-3 transition-transform ${
              isPanelOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div className="flex justify-between items-center pb-3">
          <div className="flex grow">
            <div className="relative flex flex-col font-tungsten uppercase">
              <h3 className="text-midnight text-5xl z-20 -mb-5">{data.name}</h3>
              <div className="flex items-center z-10">
                <h2 className="text-highlight text-4xl line-clamp-2">
                  {skins.at(currentSkin).name}
                </h2>
                {skins.at(currentSkin).skinTag && (
                  <div className="flex items-center w-auto h-7 ml-3 mb-2">
                    <Image
                      src={skins.at(currentSkin).skinTag.icon}
                      alt={skins.at(currentSkin).name}
                      width={87}
                      height={36}
                      className="w-full h-full max-h-8"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center divide-x divide-charcoal/40">
            <div className="flex items-center space-x-1 w-full pr-2.5">
              {data.roles.map((role, index) => (
                <div
                  key={role.id}
                  className="flex flex-col justify-center items-center has-tooltip"
                >
                  <Image
                    src={role.icon}
                    alt={role.name}
                    width={320}
                    height={320}
                    className={`max-w-10 max-h-10 ${
                      index === 1 ? "invert-[.30]" : "invert-[.50]"
                    }`}
                  />
                  <span className="tooltip bg-midnight text-soft-white text-xs -mt-20 p-2">
                    {role.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-1 w-full pl-2.5">
              {data.positions.map((position, index) => (
                <div
                  key={position.id}
                  className="flex flex-col justify-center items-center has-tooltip"
                >
                  <Image
                    src={position.icon}
                    alt={position.name}
                    width={320}
                    height={320}
                    className={`max-w-10 max-h-10 ${
                      index === 1 ? "invert-[.30]" : "invert-[.50]"
                    }`}
                  />
                  <span className="tooltip bg-midnight text-soft-white text-xs -mt-20 p-2">
                    {position.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isPanelOpen && (
          <div className="transition-all duration-500 overflow-hidden">
            <div className="flex justify-start items-center py-3 border-t border-charcoal/40">
              <p className="font-dinnext font-bold whitespace-nowrap inline">
                Specialities :
              </p>
              <span className="font-dinnext font-bold inline whitespace-nowrap">
                {specialities.join(" / ")}
              </span>
            </div>
            <div className="w-full flex flex-wrap items-center justify-between py-3">
              {ratings.map((rating) => (
                <div
                  key={rating.name}
                  className="w-2/5 h-8 min-h-0 flex flex-col my-1 mr-3"
                >
                  <p className="w-full text-sm font-dinnext font-bold tracking-wide capitalize">
                    {rating.name}
                  </p>
                  <div className="w-full h-[6px] max-h-[6px] relative mt-1">
                    <div className="w-full h-full absolute left-0 top-0 bg-charcoal"></div>
                    <div
                      style={{ width: `${rating.value * 10}%` }}
                      className="w-[0%] h-full absolute left-0 top-0 bg-highlight"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="py-3">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="h-full flex items-center bg-midnight px-4 py-2.5 text-sm font-medium text-soft-white hover:bg-highlight focus:outline-none"
              >
                More Details
                <ChevronRightIcon className="w-4 h-4 font-bold ml-2" />
              </button>
            </div> */}
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-info"></div>
      </div>

      {/* Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/25">
          <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-soft-white p-6 text-left align-middle shadow-xl">
            <h3 className="text-lg font-medium leading-6 text-charcoal">
              Payment successful
            </h3>
            <div className="mt-2">
              <p className="text-sm text-charcoal">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-info px-4 py-2 text-sm font-medium text-soft-white hover:bg-highlight"
                onClick={() => setIsOpen(false)}
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Dialog */}
      {/* End Disclosure */}
    </div>
  );
};

export default TopSection;

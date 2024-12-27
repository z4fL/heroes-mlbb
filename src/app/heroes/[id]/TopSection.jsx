"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import ChevronLeftIcon from "@/components/svg/ChevronLeftIcon";
import ChevronRightIcon from "@/components/svg/ChevronRightIcon";

const TopSection = ({ data }) => {
  const [currentSkin, setCurrentSkin] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const CURSOR_SIZE = 40;
  const START_INDEX = 0;
  const DRAG_THRESHOLD = 45;
  const FALLBACK_WIDTH = 132;

  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < data.skins.length - 1;

  const initialOffset = 320 / 2 - FALLBACK_WIDTH / 2;
  const offsetX = useMotionValue(initialOffset);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  });

  function handleDragEnd(_, { offset: { x: dragOffset } }) {
    setIsDragging(false);
    containerRef.current?.removeAttribute("data-dragging");

    animatedX.stop();

    const currentOffset = offsetX.get();
    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;
    for (
      let i = activeSlide;
      dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const item = itemsRef.current[i];
      if (item === null) continue;
      const itemOffset = item.offsetWidth;

      const prevItemWidth =
        itemsRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH;
      const nextItemWidth =
        itemsRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH;

      if (
        (dragOffset > 0 && dragOffset > offsetWidth + itemOffset && i > 1) ||
        (dragOffset < 0 &&
          dragOffset < offsetWidth + -itemOffset &&
          i < itemsRef.current.length - 2)
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveSlide(i - 1);
        setCurrentSkin(i - 1);
      } else {
        offsetX.set(currentOffset + offsetWidth + nextItemWidth);
        setActiveSlide(i + 1);
        setCurrentSkin(i + 1);
      }
      break;
    }
  }

  function handlePrevSkin() {
    if (!canScrollPrev) return;

    const nextWidth = itemsRef.current
      .at(activeSlide - 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() + nextWidth);
    setActiveSlide((prev) => prev - 1);
    setCurrentSkin((prev) => prev - 1);
  }

  function handleNextSkin() {
    if (!canScrollNext) return;

    const nextWidth = itemsRef.current
      .at(activeSlide + 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() - nextWidth);
    setActiveSlide((prev) => prev + 1);
    setCurrentSkin((prev) => prev + 1);
  }

  return (
    <div className="relative w-full h-[39rem] overflow-hidden">
      {/* Start Slider */}
      <div className="w-full">
        <div className="flex w-full h-full">
          {data.skins.map((skin, index) => (
            <div
              key={index}
              className={`relative shrink-0 w-full h-full overflow-hidden ${
                index !== currentSkin && "hidden"
              }`}
            >
              <Image
                src={skin.splashArt}
                alt={skin.name}
                width={1280}
                height={720}
                className="w-full h-full object-cover object-top"
                priority={true}
                quality={50}
              />
            </div>
          ))}
        </div>
      </div>
      {/* End Slider */}

      {/* Start Carousel */}
      <div className="absolute bottom-11 right-28 z-20 w-full max-w-xs mb-5">
        <div className="relative h-52 flex items-center overflow-hidden">
          <motion.ul
            ref={containerRef}
            className="flex items-center cursor-grab"
            style={{
              x: animatedX,
            }}
            drag="x"
            dragConstraints={{
              right: 320 / 2 - FALLBACK_WIDTH / 2,
              left:
                -(
                  (data.skins.length - 1) * FALLBACK_WIDTH +
                  (data.skins.length - 1) * 12
                ) + 100,
            }}
            onDragStart={() => {
              containerRef.current?.setAttribute("data-dragging", "true");
              setIsDragging(true);
            }}
            onDragEnd={handleDragEnd}
          >
            {data.skins.map((skin, index) => {
              const activeSkin = index === activeSlide;

              return (
                <motion.li
                  key={skin.id}
                  ref={(el) => (itemsRef.current[index] = el)}
                  layout
                  transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                  }}
                  className="relative shrink-0 px-1.5"
                >
                  <Image
                    src={skin.portrait}
                    width={240}
                    height={390}
                    alt={skin.name}
                    quality={50}
                    className="w-[120px] h-full object-cover transition-transform"
                    style={{
                      transform: `scale(${activeSkin ? 1 : 0.9})`,
                      // transition: "transform 0.2s ease-in-out",
                    }}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
          <button
            className="group absolute left-0 z-20 cursor-pointer focus:outline-none"
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
            }}
            onClick={() => handlePrevSkin}
            disabled={!canScrollPrev}
          >
            <ChevronLeftIcon className="w-8 h-8 text-color-white group-enabled:group-hover:text-highlight group-disabled:opacity-50" />
          </button>
          <button
            className="group absolute left-0 z-20 cursor-pointer focus:outline-none"
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
            }}
            onClick={() => handleNextSkin}
            disabled={!canScrollNext}
          >
            <ChevronRightIcon className="w-8 h-8 text-color-white group-enabled:group-hover:text-highlight group-disabled:opacity-50" />
          </button>
        </div>
      </div>
      {/* End Carousel */}
    </div>
  );
};

export default TopSection;

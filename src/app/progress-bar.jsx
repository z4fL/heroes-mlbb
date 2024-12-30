"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useSpring,
} from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const ProgressBarContext = createContext(null);

export const useProgressBar = () => {
  const progress = useContext(ProgressBarContext);

  if (progress === null) {
    throw new Error("Need to be inside provider");
  }
  return progress;
};

export const ProgressBar = ({ className, children }) => {
  const progress = useProgress();
  const width = useMotionTemplate`${progress.value}%`;

  return (
    <ProgressBarContext.Provider value={progress}>
      <GlobalProgressForBrowserNavigation />
      <AnimatePresence onExitComplete={progress.reset}>
        {progress.state !== "complete" && (
          <motion.div
            style={{ width }}
            exit={{ opacity: 0 }}
            className={className}
          />
        )}
      </AnimatePresence>

      {children}
    </ProgressBarContext.Provider>
  );
};

export const ProgressBarLink = ({ href, children, ...rest }) => {
  const progress = useProgressBar();
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        progress.start();

        startTransition(() => {
          progress.done();
          router.push(href.toString());
        });
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

function GlobalProgressForBrowserNavigation() {
  let progress = useProgressBar();
  let pathname = usePathname();
  let [newPathname, setNewPathname] = useState("");
  let [didPopState, setDidPopState] = useState(false);

  useEffect(() => {
    if (didPopState && newPathname === pathname) {
      progress.done();
      setDidPopState(false);
    }
  }, [didPopState, newPathname, pathname, progress]);

  useEffect(() => {
    function handlePopState() {
      startTransition(() => {
        progress.start();
        setDidPopState(true);
        setNewPathname(window.location.pathname);
      });
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [progress]);

  return null;
}

export const useProgress = () => {
  const [state, setState] = useState("initial");

  const value = useSpring(0, {
    damping: 25,
    mass: 0.5,
    stiffness: 300,
    restDelta: 0.1,
  });

  useInterval(
    () => {
      if (value.get() === 100) {
        value.jump(0);
      }

      const current = value.get();

      let diff;
      if (current === 0) {
        diff = 15;
      } else if (current < 50) {
        diff = rand(1, 10);
      } else {
        diff = rand(1, 5);
      }

      value.set(Math.min(current + diff, 99));
    },
    state === "in-progress" ? 750 : null
  );

  useEffect(() => {
    if (state === "initial") {
      value.jump(0);
    } else if (state === "completing") {
      value.set(100);
    }

    return value.on("change", (latest) => {
      if (latest === 100) {
        setState("complete");
      }
    });
  }, [value, state]);

  function reset() {
    setState("initial");
  }

  function start() {
    setState("in-progress");
  }

  function done() {
    setState((prevState) =>
      prevState === "intial" || prevState === "in-progress"
        ? "completing"
        : prevState
    );
  }

  return { state, value, start, done, reset };
};

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      tick();

      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

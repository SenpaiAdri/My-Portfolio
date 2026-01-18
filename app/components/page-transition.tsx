"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useLenis } from "./smooth-scroll";

interface TransitionContextType {
  triggerTransition: (callback: () => void) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  triggerTransition: () => {},
});

export const useTransition = () => useContext(TransitionContext);

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenis = useLenis();
  const [transitionState, setTransitionState] = useState<
    "idle" | "covering" | "revealing"
  >("idle");

  // Store the callback in a ref so we can call it after animation finishes
  const transitionCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    setTransitionState("revealing");
  }, [pathname, lenis]);

  const triggerTransition = (callback: () => void) => {
    if (transitionState !== "idle") return;
    transitionCallback.current = callback;
    setTransitionState("covering");
  };

  const handleAnimationComplete = () => {
    if (transitionState === "covering") {
      // Execute the navigation callback precisely when the screen is covered
      if (transitionCallback.current) {
        transitionCallback.current();
        transitionCallback.current = null;
      }
    } else if (transitionState === "revealing") {
      setTransitionState("idle");
    }
  };

  return (
    <TransitionContext.Provider value={{ triggerTransition }}>
      {transitionState !== "idle" && (
        <div className="fixed top-0 left-0 w-full h-dvh z-[100] flex flex-col pointer-events-auto">
          <motion.div
            key="pt-1"
            className="w-full flex-1 bg-[#696972] dark:bg-[#131316]"
            initial={{ scaleX: transitionState === "revealing" ? 1 : 0 }}
            animate={{ scaleX: transitionState === "covering" ? 1 : 0 }}
            style={{
              transformOrigin: transitionState === "covering" ? "left" : "right",
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
          />
          <motion.div
            key="pt-2"
            className="w-full flex-1 bg-[#696972] dark:bg-[#131316]"
            initial={{ scaleX: transitionState === "revealing" ? 1 : 0 }}
            animate={{ scaleX: transitionState === "covering" ? 1 : 0 }}
            style={{
              transformOrigin: transitionState === "covering" ? "left" : "right",
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
          />
          <motion.div
            key="pt-3"
            className="w-full flex-1 bg-[#696972] dark:bg-[#131316]"
            initial={{ scaleX: transitionState === "revealing" ? 1 : 0 }}
            animate={{ scaleX: transitionState === "covering" ? 1 : 0 }}
            style={{
              transformOrigin: transitionState === "covering" ? "left" : "right",
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            onAnimationComplete={handleAnimationComplete}
          />
        </div>
      )}
      {children}
    </TransitionContext.Provider>
  );
}

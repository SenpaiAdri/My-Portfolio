import { motion, MotionValue, useScroll, useTransform } from "motion/react"

export const ProjectScrollProgress = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  return (
    <motion.div
      style={{
        clipPath,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        width: "100%",
        background: "var(--project-progress-gradient)",
        zIndex: 50,
      }}
    />
  )
}
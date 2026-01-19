import { AnimatePresence, motion } from "motion/react";
import { ThemeToggle } from "../theme-toggle";
import { navbar } from "@/app/data/navbar";
import { TransitionLink } from "./transition-link";
import { X } from "lucide-react";

export const MobileNav = ({ isSidebarOpen, setIsSidebarOpen }: { isSidebarOpen: boolean, setIsSidebarOpen: (isSidebarOpen: boolean) => void }) => {
  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm sm:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed right-0 top-0 z-[70] h-full w-1/2 max-w-xs bg-background border-l border-border p-6 shadow-xl sm:hidden flex flex-col gap-6 justify-between"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={() => setIsSidebarOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <nav className="flex flex-col gap-4"
                onClick={() => setIsSidebarOpen(false)}
              >
                {navbar.map((item) => (
                  <TransitionLink
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors border-b"
                  >
                    {item.name}
                  </TransitionLink>
                ))}
              </nav>

              <ThemeToggle className="w-auto justify-center px-0 my-20" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
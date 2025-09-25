import React from "react";
import CommandK from "@/components/command/CommandK";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { COMMAND_ITEMS } from "@/lib/search-index";

const Portfolio = React.lazy(() => import("./Portfolio"));

export default function App() {
  const location = useLocation();

  return (
    <>
      <CommandK items={COMMAND_ITEMS} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          id="main"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <React.Suspense fallback={<PageFallback />}>
            <Portfolio />
          </React.Suspense>
        </motion.main>
      </AnimatePresence>
    </>
  );
}

function PageFallback() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-4">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-primary/30 border-t-primary"
        role="status"
        aria-label="초기 화면 로딩 중"
      />
    </div>
  );
}

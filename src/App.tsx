import CommandK, { type CommandKItem } from "@/components/command/CommandK";
import Portfolio from "./Portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const COMMAND_ITEMS: CommandKItem[] = [
  {
    label: "Home",
    path: "/",
    keywords: ["home", "start", "hero", "메인"],
  },
  {
    label: "Projects",
    path: "/#projects",
    keywords: ["project", "work", "case study", "프로젝트"],
  },
  {
    label: "About",
    path: "/#about",
    keywords: ["about", "profile", "career", "소개"],
  },
  {
    label: "Contact",
    path: "/#contact",
    keywords: ["contact", "email", "연락", "문의"],
  },
];

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
          <Portfolio />
        </motion.main>
      </AnimatePresence>
    </>
  );
}

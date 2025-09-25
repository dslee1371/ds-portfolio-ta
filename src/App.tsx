import CommandK, { type CommandKItem } from "@/components/command/CommandK";
import Portfolio from "./Portfolio";

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
  return (
    <>
      <CommandK items={COMMAND_ITEMS} />
      <main id="main">
        <Portfolio />
      </main>
    </>
  );
}

import NavLink from "./nav-link";
import { ArrowUpRight, Download, IdCardLanyard } from "lucide-react";

interface HeaderProps {
  badgeOpen: boolean;
  onToggleBadge: () => void;
}

export default function Header({ badgeOpen, onToggleBadge }: HeaderProps) {

  return (
    <div className="flex sticky top-0 w-full h-20 items-center justify-between gap-5 whitespace-nowrap bg-radial from-glow from-70% to-background px-10 border-b border-border md:h-25">
      <div className="flex w-1/7 items-center shrink-0 font-instrument text-3xl text-foreground text-start tracking-wide">
        {/* Nathen <span className="text-primary ml-0.75">Afshari</span> */}
        <button
          type="button"
          data-badge-anchor
          onClick={onToggleBadge}
          aria-pressed={badgeOpen}
          title={badgeOpen ? "Put the badge away" : "Grab my badge"}
          className={`hidden justify-center items-center ml-2 w-10 h-10 border cursor-pointer rounded-full transition-colors md:flex ${badgeOpen
            ? "border-primary/70 bg-primary/10 text-primary"
            : "border-transparent hover:border-border hover:bg-border/20"
            }`}
        >
          <IdCardLanyard strokeWidth={1.25} />
        </button>
      </div>
      <div className="hidden flex-1 gap-4 justify-center md:flex lg:gap-6">
        <NavLink href="#">
          Experience
        </NavLink>
        <NavLink href="#">
          Education
        </NavLink>
        <NavLink href="">
          Projects
        </NavLink>
        <NavLink href="#">
          About Me
        </NavLink>
      </div>
      <div className="flex shrink-0 gap-3 justify-end">
        <button className="hidden gap-2 cursor-pointer border border-border px-4 py-2 text-foreground rounded-xs hover:border-accent hover:text-accent lg:flex">
          Resume
          <Download className="w-5 h-5 mt-0.5" strokeWidth={1.25} />
        </button>
        <button className="flex gap-2 cursor-pointer bg-primary px-4 py-2 text-background rounded-xs hover:opacity-90">
          Let's Talk!
          <ArrowUpRight className="w-5 h-5 mt-0.5" strokeWidth={1.25} />
        </button>
      </div>
    </div>
  );
}
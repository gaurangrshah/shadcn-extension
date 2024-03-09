import Link from "next/link";
import { Icons } from "../icons";
import { Balancer } from "react-wrap-balancer";
import { siteConfig } from "@/config/site-config";
import { SocialLinks } from "../social-links";
import { ModeToggle } from "../toggle-theme";
import { SearchPopOver } from "../search";

export const SiteHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2  max-w-screen-2xl h-12 border-b border-border">
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <Icons.logo className="h-5 w-5 fill-current" />
            <Balancer as={"span"} className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </Balancer>
          </a>
          <Link
            href={siteConfig.links.docs}
            className="transition-colors hover:text-foreground/80 hidden md:inline-block"
          >
            Docs
          </Link>
          <Link
            href={siteConfig.links.components}
            className="transition-colors hover:text-foreground/80 hidden md:inline-block "
          >
            Components
          </Link>
        </div>
        <div className="flex items-center gap-1 xs:gap-2">
          <SearchPopOver />
          <SocialLinks className="hidden xs:flex" />
          <div className="flex xs:hidden">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

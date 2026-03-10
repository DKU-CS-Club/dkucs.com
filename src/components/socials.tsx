
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { siteConfig } from "@/config/site";

export default function Socials() {
  return (
    <div className="flex items-center space-x-2 text-accent ">
        
        <Link
          key="instagram"
          href={siteConfig.social.instagram}
          rel="noreferrer"
          target="_blank"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "p-2 size-8 text-accent hover:shadow-xl hover:shadow-orange-400 transition-all duration-200 ease-in-"
          )}
        >
          <GrInstagram className="h-6 w-6" />
        </Link>
        <Link
          key="linkedin"
          href={siteConfig.social.linkedin}
          rel="noreferrer"
          target="_blank"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "p-2 size-8 text-accent hover:shadow-xl hover:shadow-blue-400 transition-all duration-200 ease-in-"
          )}
        >
          <GrLinkedin className="h-6 w-6" />
        </Link>
        <Link
          key="HackDKU"
          href="https://www.hackdku.org/"
          rel="noreferrer"
          target="_blank"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "p-2  text-accent"
          )}
        >
          <img
            src="/hackdku25.png"
            alt="HackDKU"
            className=" p-2 rounded-xl h-12 w-30 hover:shadow-xl hover:shadow-red-400 transition-all duration-200 ease-in-out"
          />
        </Link>
    </div>
  );
}

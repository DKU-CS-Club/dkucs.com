"use client";
import { AlignLeft, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// import { siteConfig } from "@/config/site";
import HeaderNav from "@/components/header-nav";
import MobileNav from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-between bg-white/70 dark:bg-black/70 p-4 px-8 text-primary backdrop-blur-lg mt-3 mb-3">
      <div className=" container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="flex items-center space-x-3 text-background"
          >
            <Image
              src="/logos/logo-horizontal.svg"
              alt="Computer Science Club logo"
              width={300}
              height={100}
              className="object-contain dark:hidden"
            />
            <Image
              src="/logos/logo-horizontal-dark.svg"
              alt="Computer Science Club logo"
              width={300}
              height={100}
              className="hidden object-contain dark:block"
            />
            {/* <Image */}
            {/*   src="/cs-club-logo-dark.png" */}
            {/*   alt="Computer Science Club Logo" */}
            {/*   height={100} */}
            {/*   width={300} */}
            {/*   className="hidden object-contain dark:block" */}
            {/*   priority */}
            {/*   style={{ */}
            {/*     maxWidth: "100%", */}
            {/*     height: "auto" */}
            {/*   }} /> */}
            {/* <Image */}
            {/*   src="/cs-club-logo.png" */}
            {/*   alt="Computer Science Club Logo" */}
            {/*   height={100} */}
            {/*   width={300} */}
            {/*   className="object-contain dark:hidden" */}
            {/*   priority */}
            {/*   style={{ */}
            {/*     maxWidth: "100%", */}
            {/*     height: "auto" */}
            {/*   }} /> */}
            {/* <span className="font-mono font-bold">{siteConfig.name}</span> */}
          </Link>
        </div>
        <div className="flex items-center space-x-5 md:space-x-6">
          <HeaderNav />
          <Button
            variant="ghost"
            className="p-0 dark:text-white text-black hover:bg-transparent hover:text-white md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <>
              {isMobileOpen ? (
                <X className="size-6" />
              ) : (
                <AlignLeft className="size-6" />
              )}
              <span className="sr-only">Menu</span>
            </>
          </Button>
        </div>
      </div>
      {isMobileOpen && (
        <MobileNav onOpenChange={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}

"use client";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LIST } from "@/constants";

interface MobileNavProps {
  onOpenChange: () => void;
}

export default function MobileNav({ onOpenChange }: MobileNavProps) {
  return (
    <div className="  fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-background/95 py-6 pb-32 backdrop-blur-md animate-in slide-in-from-right-80 md:hidden ">
      <div className=" relative z-20  mx-auto grid w-full max-w-md gap-1 rounded-lg border border-border/70 bg-card/95 p-3 text-popover-foreground shadow-xl backdrop-blur-md ">
        {NAV_LIST.map((item) => (
          <MobileLink
            key={item.label + item.path}
            href={item.path}
            className="flex items-center"
            onOpenChange={onOpenChange}
          >
            <item.icon className="mr-2 size-4" />
            <span>{item.label}</span>
          </MobileLink>
        ))}
      </div>
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  children: ReactNode;
  onOpenChange?: () => void;
  className?: string;
}

const MobileLink = ({
  children,
  onOpenChange,
  className,
  href,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.();
      }}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors hover:text-primary",
        pathname === href.toString()
          ? "bg-muted text-primary"
          : "text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

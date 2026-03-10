import SiteHeader from "@/components/site-header";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function App({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 bg-background">{children}</main>
      <footer className=" container border-t border-dashed border-zinc-300 dark:border-zinc-700 py-3 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; 2025{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.social.cs_club}
            className="text-primary"
          >
            {siteConfig.author}
          </Link>{" "}
        </p>
      </footer>
    </div>
  );
}

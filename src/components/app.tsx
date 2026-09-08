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
      <footer className=" container border-t border-border/60 py-6 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
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

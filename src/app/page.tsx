// import Splash from "@/components/splash";
import Socials from "@/components/socials";
import { TeamBanner } from "@/components/teambanner";
// import { buttonVariants } from "@/components/ui/button";
// import { siteConfig } from "@/config/site";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <TeamBanner />
      <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-4 mt-10 mb-10">
        <div className="container mt-6 flex max-w-5xl flex-col items-center gap-4 xl:mt-0 px-10">
          <div className="flex w-full max-w-2xl flex-col items-start gap-4 text-left sm:text-left">
            <header className="text-3xl font-extrabold text-left">
              Who are we?
            </header>
          </div>
          <p className=" max-w-2xl text-left leading-normal text-muted-foreground sm:leading-8">
            At DKU, our computer science club is more than just coding. We’re a
            vibrant, multidisciplinary community, passionate about pushing the
            boundaries of innovation. We organize annual hackathons (HackDKU),
            speaker sessions with industry experts, workshops focusing on
            specific technology and field trips to tech companies. Dive into a
            pool of multidisciplinary talents, share ideas, and foster
            innovation that goes beyond the classroom.
          </p>
          <div className="flex w-full max-w-2xl flex-col items-start gap-4 text-left sm:text-left">
            <header className="text-3xl font-extrabold text-left mt-10">
              <Socials />
            </header>
          </div>
        </div>
      </section>
    </>
  );
}

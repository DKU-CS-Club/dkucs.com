// import Socials from "@/components/socials";
export default function Splash() {
  return (
    <><div className="container mt-6 flex max-w-3xl flex-col items-center gap-8 rounded-3xl bg-emerald-600 text-center xl:mt-0">
      <br />
      {/* <Socials /> */}
      <h1 className="text-5xl text-white sm:text-6xl md:text-7xl">
        HΔCK <br className="" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="align-super text-3xl tracking-[-0.1rem] transition-all hover:text-yellow-400 sm:text-4xl">
          2025
        </span>
        <span className="animate-pulse font-code transition-colors hover:text-green-500 ">
          &lt;
        </span>
        <span className="font-code text-primary">DKU</span>
        <span className="animate-pulse font-code transition-colors hover:text-blue-700">
          &gt;
        </span>
      </h1>
        <br />
    </div>
    {/* <h1 className=" rotate-12 text-3xl font-bold text-foreground opacity-20">COMING SOON!</h1> */}
    </>
  );
}

import Image from "next/image";

interface Founder {
  name: string;
  linkedin: string;
  picture: string;
}

interface Era {
  period: string;
  description: string;
  founders: Founder[];
}

const clubHistory: Era[] = [
  {
    period: "2022 – 2023",
    description: "The club was founded, laying the groundwork for DKU's CS community.",
    founders: [
      {
        name: "Jafarbek Ulmasov",
        linkedin: "https://www.linkedin.com/in/ulmasovjafarbek/",
        picture: "/team/no.png", // TODO: replace with Jafarbek's LinkedIn avatar
      },
    ],
  },
  {
    period: "2023 – 2024",
    description: "Expanded club activities and established HackDKU as an annual event.",
    founders: [
      {
        name: "Sardor Akhmedjonov",
        linkedin: "https://www.linkedin.com/in/sardorakhmedjonov/",
        picture: "/team/sardor.png",
      },
      {
        name: "Guangzhi Su",
        linkedin: "https://www.linkedin.com/in/allen-guangzhi-su-%E8%8B%8F%E5%B9%BF%E6%99%BA-613070244/?originalSubdomain=cn",
        picture: "/team/allen.png",
      },
    ],
  },
  {
    period: "2024 – 2025",
    description: "Continued growth and community building.",
    founders: [
      {
        name: "Guangzhi Su",
        linkedin: "https://www.linkedin.com/in/allen-guangzhi-su-%E8%8B%8F%E5%B9%BF%E6%99%BA-613070244/?originalSubdomain=cn",
        picture: "/team/allen.png",
      },
    ],
  },
  {
    period: "2025 – 2026",
    description: "Leading the club into its next chapter with expanded initiatives.",
    founders: [
      {
        name: "Anar Nyambayar",
        linkedin: "https://www.linkedin.com/in/anar-n/",
        picture: "/team/anar.png",
      },
      {
        name: "Yanpei Yu",
        linkedin: "https://www.linkedin.com/in/yanpei-yu/",
        picture: "/team/yanpei.png",
      },
    ],
  },
];

export function History() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-5xl px-6">
        <h2 className="text-3xl font-extrabold mb-12">Club History</h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {clubHistory.map((era) => (
              <div key={era.period} className="flex gap-6">
                {/* Timeline dot + period */}
                <div className="hidden sm:flex flex-col items-center shrink-0 w-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--dark-green)] mt-2" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-sm font-semibold text-[var(--dark-green)] mb-2 sm:hidden">
                    {era.period}
                  </span>
                  <span className="hidden sm:inline-block text-sm font-semibold text-[var(--dark-green)] mb-3">
                    {era.period}
                  </span>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {era.description}
                  </p>

                  {/* Founder cards */}
                  <div className="flex flex-wrap gap-4">
                    {era.founders.map((founder) => (
                      <a
                        key={founder.name}
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-lg border bg-card p-3 hover:shadow-md transition-shadow"
                      >
                        <Image
                          src={founder.picture}
                          alt={founder.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover shrink-0"
                        />
                        <span className="text-sm font-medium">{founder.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

interface Founder {
  name: string;
  role: string;
  linkedin: string;
  picture: string;
}

interface Milestone {
  period: string;
  title: string;
  description: string;
}

const founders: Founder[] = [
  {
    name: "Guangzhi (Allen) Su",
    role: "Co-Founder",
    linkedin:
      "https://www.linkedin.com/in/allen-guangzhi-su-%E8%8B%8F%E5%B9%BF%E6%99%BA-613070244/?originalSubdomain=cn",
    picture: "/team/allen.png",
  },
  {
    name: "Jafarbek Ulmasov",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/ulmasovjafarbek/",
    picture: "/team/no.png",
  },
  {
    name: "Sardor Akhmedjonov",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/sardorakhmedjonov/",
    picture: "/team/sardor.png",
  },
];

const clubHistory: Milestone[] = [
  {
    period: "2023",
    title: "A Club Built Around an Ambitious Idea",
    description:
      "The DKU Computer Science Club began with a mission to create HackDKU. Guangzhi Su, Jafarbek Ulmasov, and Sardor Akhmedjonov, supported by alumni advisor Scotty Shaw, collaborated with HackDuke to launch HackDuke Online—the first student-led hackathon at Duke Kunshan University.",
  },
  {
    period: "2024",
    title: "HackDKU Became a DKU Tradition",
    description:
      "HackDKU officially launched through a partnership between the CS Club and Finance Club, with Professor Luyao Zhang and Professor Bing Luo as faculty advisors. Four project tracks, more than ten speaker sessions, over RMB 25,000 in funding, and approximately 150 participants established the event as a major platform for interdisciplinary innovation.",
  },
  {
    period: "2025",
    title: "Growing Beyond a Single Hackathon",
    description:
      "The Club expanded its CS+X community through technical workshops, research and career talks, field trips, cross-club panels, and the Digital Innovation Challenge. Collaborations with the AI Club, Finance Club, iGEM Club, university offices, alumni, professors, and industry practitioners connected computing with finance, health, education, design, and society.",
  },
  {
    period: "2026",
    title: "An Innovation Ecosystem With Lasting Impact",
    description:
      "Across three editions since 2024, HackDKU grew to more than 70 project teams and over 400 registered participants. The Ethics and AI theme strengthened responsible innovation, while the Luxshare Smart Manufacturing track introduced an industry-defined challenge and internship opportunities. The Club continues to measure success through learning, project quality, partnerships, leadership development, and opportunities that continue beyond each event.",
  },
];

export function History() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-5xl px-6">
        <h2 className="mb-4 text-3xl font-extrabold">Club History</h2>
        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Founded to build more than another student organization, the DKU
          Computer Science Club has grown into a multidisciplinary community
          where students turn curiosity into practical, responsible, and
          collaborative work beyond the classroom.
        </p>

        <h3 className="mb-4 text-lg font-bold">Founders</h3>
        <div className="mb-12 flex flex-wrap gap-4">
          {founders.map((founder) => (
            <a
              key={founder.name}
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border bg-card p-3 transition-shadow hover:shadow-md"
            >
              <Image
                src={founder.picture}
                alt={founder.name}
                width={44}
                height={44}
                className="size-11 shrink-0 rounded-full object-cover"
              />
              <span>
                <span className="block text-sm font-medium">{founder.name}</span>
                <span className="block text-xs text-muted-foreground">
                  {founder.role}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="relative">
          <div className="absolute bottom-2 left-[19px] top-2 hidden w-px bg-border sm:block" />

          <div className="space-y-12">
            {clubHistory.map((milestone) => (
              <div key={milestone.period} className="flex gap-6">
                <div className="hidden w-10 shrink-0 flex-col items-center sm:flex">
                  <div className="mt-2 size-2.5 rounded-full bg-[var(--dark-green)]" />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="mb-2 inline-block text-sm font-semibold text-[var(--dark-green)]">
                    {milestone.period}
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{milestone.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

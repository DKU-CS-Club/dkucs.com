import Image from "next/image";

interface Person {
  name: string;
  role: string;
  linkedin: string;
  picture: string;
}

interface Milestone {
  period: string;
  title: string;
  description: string;
  leadership: Person[];
}

const founders: Person[] = [
  {
    name: "Guangzhi (Allen) Su",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/guangzhi-su?trk=blended-typeahead",
    picture: "/team/allen.png",
  },
  {
    name: "Jafarbek Ulmasov",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/ulmasovjafarbek/",
    picture: "/team/jafar.jpg",
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
    period: "2022–2023",
    title: "A Club Built Around an Ambitious Idea",
    description:
      "The DKU Computer Science Club began with a mission to create HackDKU. In 2023, the founding team, supported by alumni advisor Scotty Shaw, collaborated with HackDuke to launch HackDuke Online—the first student-led hackathon at Duke Kunshan University.",
    leadership: [
      {
        name: "Jafarbek Ulmasov",
        role: "Co-President",
        linkedin: "https://www.linkedin.com/in/ulmasovjafarbek/",
        picture: "/team/jafar.jpg",
      },
      {
        name: "Guangzhi (Allen) Su",
        role: "Co-President",
        linkedin: "https://www.linkedin.com/in/guangzhi-su?trk=blended-typeahead",
        picture: "/team/allen.png",
      },
    ],
  },
  {
    period: "2023–2024",
    title: "HackDKU Became a DKU Tradition",
    description:
      "HackDKU officially launched through a partnership between the CS Club and Finance Club, with Professor Luyao Zhang and Professor Bing Luo as faculty advisors. Four project tracks, more than ten speaker sessions, over RMB 25,000 in funding, and approximately 150 participants established the event as a major platform for interdisciplinary innovation.",
    leadership: [
      {
        name: "Sardor Akhmedjonov",
        role: "Co-President",
        linkedin: "https://www.linkedin.com/in/sardorakhmedjonov/",
        picture: "/team/sardor.png",
      },
      {
        name: "Guangzhi (Allen) Su",
        role: "Co-President",
        linkedin: "https://www.linkedin.com/in/guangzhi-su?trk=blended-typeahead",
        picture: "/team/allen.png",
      },
    ],
  },
  {
    period: "2024–2025",
    title: "Growing Beyond a Single Hackathon",
    description:
      "The Club expanded its CS+X community through HackDKU 2025, technical workshops, research and career talks, and partnerships with student organizations, alumni, professors, university offices, and industry practitioners. These programs connected computing with finance, health, education, design, and society.",
    leadership: [
      {
        name: "Guangzhi (Allen) Su",
        role: "President",
        linkedin: "https://www.linkedin.com/in/guangzhi-su?trk=blended-typeahead",
        picture: "/team/allen.png",
      },
    ],
  },
  {
    period: "2025–2026",
    title: "An Innovation Ecosystem With Lasting Impact",
    description:
      "Across three HackDKU editions since 2024, the event grew to more than 70 project teams and over 400 registered participants. The Club also developed the Digital Innovation Challenge, expanded hands-on workshops and field trips, strengthened responsible innovation through the Ethics and AI theme, and introduced an industry-defined Smart Manufacturing track with Luxshare.",
    leadership: [
      {
        name: "Anar Nyambayar",
        role: "Co-President",
        linkedin: "https://www.linkedin.com/in/anar-n/",
        picture: "/team/anar.png",
      },
      {
        name: "Yanpei (Yolanda) Yu",
        role: "Co-President",
        linkedin: "https://www.linkedin.com/in/yanpei-yu/",
        picture: "/team/yanpei.png",
      },
    ],
  },
  {
    period: "2026–2027",
    title: "The Next Generation Takes the Lead",
    description:
      "A new leadership team is carrying the Club into its next chapter, building on its annual traditions while developing more structured workshops, stronger industry partnerships, and longer-term pathways from student projects to research, internships, and entrepreneurship.",
    leadership: [
      {
        name: "Tianrui Gu",
        role: "President",
        linkedin: "https://www.linkedin.com/in/天睿-顾-744428405",
        picture: "/team/tianrui.jpg",
      },
      {
        name: "Kurtis Kwan",
        role: "Vice President",
        linkedin: "https://www.linkedin.com/in/kurtis-kwan/",
        picture: "/team/kurtis.jpeg",
      },
    ],
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <a
      href={person.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-lg border bg-card p-3 transition-shadow hover:shadow-md"
    >
      <Image
        src={person.picture}
        alt={person.name}
        width={44}
        height={44}
        className="size-11 shrink-0 rounded-full object-cover"
      />
      <span>
        <span className="block text-sm font-medium">{person.name}</span>
        <span className="block text-xs text-muted-foreground">
          {person.role}
        </span>
        <span className="mt-1 block text-xs font-medium text-[var(--dark-blue)]">
          LinkedIn ↗
        </span>
      </span>
    </a>
  );
}

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
            <PersonCard key={founder.name} person={founder} />
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
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {milestone.leadership.map((leader) => (
                      <PersonCard
                        key={`${milestone.period}-${leader.name}`}
                        person={leader}
                      />
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

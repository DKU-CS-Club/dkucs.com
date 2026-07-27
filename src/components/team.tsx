"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  major?: string;
  email?: string;
  linkedin?: string;
  picture: string;
}

interface TeamYear {
  label: string;
  members: TeamMember[];
}

const guangzhiLinkedIn =
  "https://www.linkedin.com/in/guangzhi-su?trk=blended-typeahead";
const tianruiLinkedIn =
  "https://www.linkedin.com/in/%E5%A4%A9%E7%9D%BF-%E9%A1%BE-744428405";

const teamYears: TeamYear[] = [
  {
    label: "2026–2027",
    members: [
      {
        name: "Tianrui Gu",
        role: "President",
        major: "Applied Mathematics and Computer Science",
        email: "tg297@duke.edu",
        linkedin: tianruiLinkedIn,
        picture: "/team/tianrui.jpg",
      },
      {
        name: "Kurtis Kwan",
        role: "Vice President",
        major: "Applied Mathematics and Computer Science",
        email: "kurtis.kwan@duke.edu",
        linkedin: "https://www.linkedin.com/in/kurtis-kwan/",
        picture: "/team/kurtis.jpeg",
      },
      {
        name: "Yichen (Eason) Shen",
        role: "Director of Operations",
        email: "ys479@duke.edu",
        linkedin: "https://www.linkedin.com/in/yichen-shen-9088363b8",
        picture: "/team/eason.jpg",
      },
      {
        name: "Wenxin Xu",
        role: "Treasurer",
        email: "wx97@duke.edu",
        picture: "/team/wenxin.jpg",
      },
    ],
  },
  {
    label: "2025–2026",
    members: [
      {
        name: "Anar Nyambayar",
        role: "Co-President",
        major: "Applied Mathematics and Computer Science",
        email: "anar.nyambayar@duke.edu",
        linkedin: "https://www.linkedin.com/in/anar-n/",
        picture: "/team/anar.png",
      },
      {
        name: "Yanpei (Yolanda) Yu",
        role: "Co-President",
        major: "Data Science",
        email: "yy475@duke.edu",
        linkedin: "https://www.linkedin.com/in/yanpei-yu/",
        picture: "/team/yanpei.png",
      },
      {
        name: "Avidikhuu Altangerel",
        role: "Treasurer",
        major: "Applied Mathematics and Computer Science",
        email: "aa846@duke.edu",
        linkedin: "https://www.linkedin.com/in/avidikhuu/",
        picture: "/team/avidi.png",
      },
      {
        name: "Yushan (Kimberly) Sun",
        role: "Secretary",
        major: "Applied Mathematics",
        email: "ys477@duke.edu",
        linkedin: "https://www.linkedin.com/in/yushan-sun-487b69385",
        picture: "/team/kimberly.jpg",
      },
      {
        name: "Ximing (Shelly) Yu",
        role: "Director of Communications",
        major: "Computation and Design / Computer Science",
        email: "xy170@duke.edu",
        linkedin: "https://www.linkedin.com/in/ximing-333109342/",
        picture: "/team/shelly.jpg",
      },
      {
        name: "Yichen (Elaine) Wu",
        role: "Director of Communications II",
        major: "Applied Mathematics",
        email: "yw738@duke.edu",
        linkedin: "https://www.linkedin.com/in/艺琛-吴-46682a373/",
        picture: "/team/elaine.jpg",
      },
      {
        name: "Zuohang (Anthony) Liu",
        role: "Director of Operations",
        major: "Applied Mathematics and Computer Science",
        email: "zl429@duke.edu",
        linkedin:
          "https://www.linkedin.com/in/zhuohang-anthony-liu-刘卓航-9357b5362",
        picture: "/team/anthony.png",
      },
      {
        name: "Temuulen Enkhtamir",
        role: "Director of Operations II",
        major: "Applied Mathematics and Computer Science",
        email: "temuulen.enkhtamir@dukekunshan.edu.cn",
        linkedin: "https://www.linkedin.com/in/e-temuulen/",
        picture: "/team/temka.jpeg",
      },
      {
        name: "Bouchra Daddaoui",
        role: "Director of Software",
        major: "Applied Mathematics and Computer Science",
        email: "bouchra.daddaoui@dukekunshan.edu.cn",
        linkedin: "https://www.linkedin.com/in/bouchra-daddaoui-24a8a322b/",
        picture: "/team/bouchra.png",
      },
      {
        name: "Guangzhi (Allen) Su",
        role: "Co-Founder and Student Advisor",
        major: "Computer Science",
        email: "gs285@duke.edu",
        linkedin: guangzhiLinkedIn,
        picture: "/team/allen.png",
      },
      {
        name: "Zhonghan (Hank) Dai",
        role: "Operations",
        major: "Applied Mathematics and Computer Science",
        email: "zd73@duke.edu",
        linkedin: "https://www.linkedin.com/in/中瀚-戴-212968385",
        picture: "/team/hank.jpg",
      },
      {
        name: "Tianrui Gu",
        role: "Core Member",
        major: "Applied Mathematics and Computer Science",
        email: "tg297@duke.edu",
        linkedin: tianruiLinkedIn,
        picture: "/team/tianrui.jpg",
      },
      {
        name: "Kurtis Kwan",
        role: "Core Member",
        major: "Applied Mathematics and Computer Science",
        email: "kurtis.kwan@duke.edu",
        linkedin: "https://www.linkedin.com/in/kurtis-kwan/",
        picture: "/team/kurtis.jpeg",
      },
      {
        name: "Yichen (Eason) Shen",
        role: "Core Member",
        email: "ys479@duke.edu",
        linkedin: "https://www.linkedin.com/in/yichen-shen-9088363b8",
        picture: "/team/eason.jpg",
      },
      {
        name: "Wenxin Xu",
        role: "Core Member",
        email: "wx97@duke.edu",
        picture: "/team/wenxin.jpg",
      },
      {
        name: "Bilguun Dugarsuren",
        role: "Core Member",
        major: "Applied Mathematics and Computer Science",
        picture: "/team/billy.png",
      },
      {
        name: "Nemuulen Togtbaatar",
        role: "Core Member",
        major: "Computation and Design / Computer Science",
        picture: "/team/nemka.jpg",
      },
      {
        name: "Xinrong Sun",
        role: "Core Member",
        major: "Mathematics and Computer Science",
        picture: "/team/sunny.jpg",
      },
      {
        name: "Munish Lohani",
        role: "Core Member",
        picture: "/team/munish.jpg",
      },
    ],
  },
  {
    label: "2024–2025",
    members: [
      {
        name: "Guangzhi (Allen) Su",
        role: "President",
        major: "Computer Science",
        linkedin: guangzhiLinkedIn,
        picture: "/team/allen.png",
      },
      {
        name: "Yanpei (Yolanda) Yu",
        role: "Core Member",
        major: "Data Science",
        email: "yy475@duke.edu",
        linkedin: "https://www.linkedin.com/in/yanpei-yu/",
        picture: "/team/yanpei.png",
      },
      {
        name: "Ximing (Shelly) Yu",
        role: "Core Member",
        major: "Computation and Design / Computer Science",
        email: "xy170@duke.edu",
        linkedin: "https://www.linkedin.com/in/ximing-333109342/",
        picture: "/team/shelly.jpg",
      },
      {
        name: "Zhuohang (Anthony) Liu",
        role: "Core Member",
        major: "Applied Mathematics and Computer Science",
        email: "zl429@duke.edu",
        linkedin:
          "https://www.linkedin.com/in/zhuohang-anthony-liu-刘卓航-9357b5362",
        picture: "/team/anthony.png",
      },
      {
        name: "Anar Nyambayar",
        role: "Core Member",
        major: "Applied Mathematics and Computer Science",
        email: "anar.nyambayar@duke.edu",
        linkedin: "https://www.linkedin.com/in/anar-n/",
        picture: "/team/anar.png",
      },
      {
        name: "Avidikhuu Altangerel",
        role: "Core Member",
        major: "Applied Mathematics and Computer Science",
        email: "aa846@duke.edu",
        linkedin: "https://www.linkedin.com/in/avidikhuu/",
        picture: "/team/avidi.png",
      },
      {
        name: "Bouchra Daddaoui",
        role: "Core Member",
        major: "Applied Mathematics and Computer Science",
        email: "bouchra.daddaoui@dukekunshan.edu.cn",
        linkedin: "https://www.linkedin.com/in/bouchra-daddaoui-24a8a322b/",
        picture: "/team/bouchra.png",
      },
      {
        name: "Othmane Echchabi",
        role: "Core Member",
        major: "Data Science",
        linkedin: "https://www.linkedin.com/in/othmaneechchabi/",
        picture: "/team/othmane.png",
      },
    ],
  },
  {
    label: "2023–2024",
    members: [
      {
        name: "Sardor Akhmedjonov",
        role: "Co-President",
        major: "Data Science",
        linkedin: "https://www.linkedin.com/in/sardorakhmedjonov/",
        picture: "/team/sardor.png",
      },
      {
        name: "Guangzhi (Allen) Su",
        role: "Co-President",
        major: "Computer Science",
        linkedin: guangzhiLinkedIn,
        picture: "/team/allen.png",
      },
    ],
  },
  {
    label: "2022–2023",
    members: [
      {
        name: "Jafarbek Ulmasov",
        role: "Co-President and Co-Founder",
        major: "Data Science",
        linkedin: "https://www.linkedin.com/in/ulmasovjafarbek/",
        picture: "/team/jafar.jpg",
      },
      {
        name: "Guangzhi (Allen) Su",
        role: "Co-President and Co-Founder",
        major: "Computer Science",
        linkedin: guangzhiLinkedIn,
        picture: "/team/allen.png",
      },
      {
        name: "Sardor Akhmedjonov",
        role: "Co-Founder",
        major: "Data Science",
        linkedin: "https://www.linkedin.com/in/sardorakhmedjonov/",
        picture: "/team/sardor.png",
      },
    ],
  },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="mx-auto w-full max-w-xs rounded-xl border bg-card p-5 text-center shadow-sm">
      <Image
        src={member.picture}
        alt={member.name}
        width={192}
        height={192}
        className="mx-auto size-44 rounded-full object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-[var(--dark-green)]">
        {member.role}
      </p>
      {member.major && (
        <p className="mt-1 text-sm text-muted-foreground">{member.major}</p>
      )}
      <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
        {member.email && (
          <span className="text-[var(--dark-green)]">{member.email}</span>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--dark-blue)] hover:underline"
          >
            LinkedIn ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default function Team() {
  const [activeYear, setActiveYear] = useState(teamYears[0].label);
  const activeTeam =
    teamYears.find((teamYear) => teamYear.label === activeYear) ?? teamYears[0];

  return (
    <section className="container max-w-6xl px-4 py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold md:text-4xl">Our Team</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          Meet the core members who have led and built the DKU Computer Science
          Club across each academic year.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Team by academic year"
        className="mb-10 overflow-x-auto rounded-xl border bg-muted/40 p-2"
      >
        <div className="mx-auto flex w-max gap-2">
          {teamYears.map((teamYear) => {
            const isActive = teamYear.label === activeYear;

            return (
              <button
                key={teamYear.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveYear(teamYear.label)}
                className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[var(--dark-green)] text-white shadow-sm"
                    : "text-muted-foreground hover:bg-background hover:text-foreground"
                }`}
              >
                {teamYear.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {activeTeam.members.map((member) => (
          <MemberCard key={`${activeTeam.label}-${member.name}`} member={member} />
        ))}
      </div>
    </section>
  );
}

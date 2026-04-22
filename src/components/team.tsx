"use client";

// Component/team.tsx

const clubMembers = [
	{
		name: "Anar Nyambayar",
		role: "President",
		major: "Applied Math and Computer Science",
		email: "anar.nyambayar [at] duke.edu",
		linkedin: "https://www.linkedin.com/in/anar-n/",
		picture: "/team/anar.png",
	},
	{
		name: "Yanpei (Yolanda) Yu",
		role: "Vice President",
		major: "Data Science",
		email: "yy475 [at] duke.edu",
		linkedin: "https://www.linkedin.com/in/yanpei-yu/",
		picture: "/team/yanpei.png",
	},
	{
		name: "Avidikhuu Altangerel",
		role: "Treasurer",
		major: "Applied Math and Computer Science",
		email: "aa846 [at] duke.edu",
		linkedin: "https://www.linkedin.com/in/avidikhuu/",
		picture: "/team/avidi.png",
	},
	{
		name: "Yushan (Kimberly) Sun",
		role: "Secretary",
		major: "Applied Mathematics",
		email: "ys477 [at] duke.edu",
		linkedin: "http://www.linkedin.com/in/yushan-sun-487b69385",
		picture: "/team/kimberly.jpg",
	},
	{
		name: "Kurtis Kwan",
		role: "Secretary II",
		major: "Applied Math and Computer Science",
		email: "kurtis.kwan [at] duke.edu",
		linkedin: "https://www.linkedin.com/in/kurtis-kwan/",
		picture: "/team/kurtis.jpeg",
	},
	{
		name: "Yichen (Elaine) Wu",
		role: "Director of Communications II",
		major: "Applied Math and Mathematics",
		email: "yw738 [at] duke.edu",
		linkedin: "https://www.linkedin.com/in/艺琛-吴-46682a373/",
		picture: "/team/elaine.jpg",
	},

	{
		name: "Temuulen Enkhtamir",
		role: "Director of Operations II",
		major: "Applied Math and Computer Science",
		email: "temuulen.enkhtamir [at] dukekunshan.edu.cn",
		linkedin: "https://www.linkedin.com/in/e-temuulen/",
		picture: "/team/temka.jpeg",
	},
	{
		name: "Bouchra Daddaoui",
		role: "Director of Software",
		major: "Applied Math and Computer Science",
		email: "bouchra.daddaoui [at] dukekunshan.edu.cn",
		linkedin: "https://www.linkedin.com/in/bouchra-daddaoui-24a8a322b/",
		picture: "/team/bouchra.png",
	},
	{
		name: "Ximing (Shelly) Yu",
		role: "Director of Communications",
		major: "Computation and Design, Computer Science",
		email: "xy170 [at] duke.edu",
		linkedin: "https://www.linkedin.com/in/ximing-333109342/",
		picture: "/team/shelly.jpg",
	},
	{
		name: "Zuohang (Anthony) Liu",
		role: "Director of Operations",
		major: "Applied Math and Computer Science",
		email: "zl429 [at] duke.edu",
		linkedin:
			"https://www.linkedin.com/in/zhuohang-anthony-liu-刘卓航-9357b5362",
		picture: "/team/anthony.png",
	},
	{
		name: "Guangzhi (Allen) Su",
		role: "Student Advisor, Co-Founder",
		major: "Computer Science",
		email: "gs285 [at] duke.edu",
		linkedin:
			"https://www.linkedin.com/in/allen-guangzhi-su-%E8%8B%8F%E5%B9%BF%E6%99%BA-613070244/?originalSubdomain=cn",
		picture: "/team/allen.png",
	},
	{
		name: "Zhonghan (Hank) Dai",
		role: "Operations",
		major: "Applied Math and Computer Science",
		email: "zd73 [at] duke.edu",
		linkedin: "https://www.linkedin.com/in/中瀚-戴-212968385",
		picture: "/team/hank.jpg",
	},
	{
		name: "Tianrui Gu",
		role: "Member",
		major: "Applied Math and Computer Science",
		email: "tg297@duke.edu",
		linkedin: "www.linkedin.com/in/天睿-顾-744428405",
		picture: "/team/tianrui.jpg",
	},
	{
		name: "Bilguun Dugarsuren",
		role: "Member",
		major: "Applied Mathematics and Computational Sciences / Computer Science",
		email: "",
		linkedin: "",
		picture: "/team/billy.png",
	},
	{
		name: "Nemuulen Togtbaatar",
		role: "Member",
		major: "Computation and Design / Computer Science",
		email: "",
		linkedin: "",
		picture: "/team/nemka.jpg",
	},
	{
		name: "Xinrong Sun",
		role: "Member",
		major: "Mathematics and Computer Science (Math) (intended)",
		email: "",
		linkedin: "",
		picture: "/team/sunny.jpg",
	},
	{
		name: "Shaorong Xu",
		role: "Member",
		major: "",
		email: "",
		linkedin: "",
		picture: "/team/no.png",
	},
	{
		name: "Wenxin Xu",
		role: "Member",
		major: "",
		email: "",
		linkedin: "",
		picture: "/team/no.png",
	},
	{
		name: "Munish Lohani",
		role: "Member",
		major: "",
		email: "",
		linkedin: "",
		picture: "/team/munish.jpg",
	},
	{
		name: "Chinguun Munkhtsetseg",
		role: "Member",
		major: "",
		email: "",
		linkedin: "",
		picture: "/team/chinguun.jpg",
	},
	{
		name: "Yichen (Eason) Shen",
		role: "Member",
		major: "",
		email: "",
		linkedin: "",
		picture: "/team/eason.jpg",
	},
	{
		name: "Yuxuan Liu",
		role: "Member",
		major: "",
		email: "",
		linkedin: "",
		picture: "/team/yuxuan.png",
	},
	{
		name: "Sardor Akhmedjanov",
		role: "Alum",
		major: "Data Science",
		email: "sa524v [at] duke.edu",
		linkedin: "https://www.linkedin.com/in/sardorakhmedjonov",
		picture: "/team/sardor.png",
	},
	{
		name: "Othmane Echchabi",
		role: "Alum",
		major: "Data Science",
		email: "oe23 [at] duke.edu",
		linkedin: "https://www.linkedin.com/in/othmaneechchabi/",
		picture: "/team/othmane.png",
	},
	{
		name: "Nazirjon (NJ) Ismoiljonov",
		role: "Alum",
		major: "Computation & Design / Digital Media ",
		email: "nazirjon.Ismoiljonov [at] dukekunshan.edu.cn",
		linkedin: "www.linkedin.com/in/nazirjon-ismoiljonov-a03954199",
		picture: "/team/nj.png",
	},
];

const Team = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-4 container max-w-4xl  mt-24">
			{clubMembers.map((member, index) => (
				<div
					key={index}
					className="w-full max-w-xs p-4 mx-auto rounded-lg transition-color duration-300"
				>
					<img
						src={member.picture}
						alt={member.name}
						className="w-48 h-48 mx-auto rounded-full object-cover"
					/>
					<div className="text-center mt-4">
						<h3 className="text-lg font-semibold transition-colors">
							{member.name}
						</h3>
						<p className="text-sm transition-colors">{member.role}</p>
						<p className="text-sm transition-colors">{member.major}</p>
						<a
							href={`mailto:${member.email}`}
							className="text-[var(--dark-green)] text-sm block mt-2"
						>
							{member.email}
						</a>
						<a
							href={member.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[var(--dark-blue)] text-sm mt-2"
						>
							LinkedIn
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default Team;

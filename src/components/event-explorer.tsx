"use client";

import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type EventPost = {
	slug: string;
	title: string;
	date: string;
	category: string;
	description?: string | null;
	image?: string | null;
};

type TabKey = "all" | "workshop" | "talk" | "hackdku" | "other";

const TABS: { key: TabKey; label: string; match: (p: EventPost) => boolean }[] = [
	{ key: "all", label: "All", match: () => true },
	{
		key: "workshop",
		label: "Workshops",
		match: (p) => p.category === "workshop",
	},
	{
		key: "talk",
		label: "Talks & Info Sessions",
		match: (p) =>
			p.category === "lecture" ||
			p.category === "info session" ||
			p.category === "talk",
	},
	{ key: "hackdku", label: "HackDKU", match: (p) => p.category === "hackdku" },
	{ key: "other", label: "Other", match: (p) => p.category === "other" },
];

const CATEGORY_LABELS: Record<string, string> = {
	hackdku: "HackDKU",
	lecture: "Talk",
	workshop: "Workshop",
	"info session": "Info Session",
	other: "Event",
};

export function EventExplorer({ posts }: { posts: EventPost[] }) {
	const [active, setActive] = useState<TabKey>("all");

	const counts = useMemo(() => {
		const map: Record<TabKey, number> = {
			all: posts.length,
			workshop: 0,
			talk: 0,
			hackdku: 0,
			other: 0,
		};
		for (const tab of TABS) {
			if (tab.key === "all") continue;
			map[tab.key] = posts.filter(tab.match).length;
		}
		return map;
	}, [posts]);

	const visible = useMemo(
		() => posts.filter(TABS.find((t) => t.key === active)!.match),
		[posts, active],
	);

	return (
		<div className="space-y-10">
			{/* Tab 栏 */}
			<div
				role="tablist"
				aria-label="Filter events"
				className="flex flex-wrap gap-x-7 gap-y-2 border-b border-border/70"
			>
				{TABS.map((tab) => (
					<button
						key={tab.key}
						type="button"
						role="tab"
						aria-selected={active === tab.key}
						onClick={() => setActive(tab.key)}
						className={cn(
							"border-b-2 pb-3 text-xs font-medium uppercase tracking-[0.14em] transition-colors",
							active === tab.key
								? "border-primary text-primary"
								: "border-transparent text-muted-foreground hover:border-border hover:text-primary",
						)}
					>
						{tab.label}
						<span
							className={cn(
								"ml-1.5 font-mono text-[0.68rem] tracking-normal",
								active === tab.key
									? "text-primary/60"
									: "text-muted-foreground/60",
							)}
						>
							{counts[tab.key]}
						</span>
					</button>
				))}
			</div>

			{visible.length ? (
				<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
					{visible.map((post) => (
						<article key={post.slug} className="group">
							<Link href={`/blog/${post.slug}`} className="block">
								{post.image ? (
									<div className="relative aspect-[4/3] overflow-hidden border border-border/50 bg-muted">
										<Image
											src={post.image}
											alt={post.title}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
										/>
									</div>
								) : (
									<div className="flex aspect-[4/3] items-center justify-center border border-border/50 bg-muted text-muted-foreground">
										<span className="eyebrow">DKU CS Club</span>
									</div>
								)}

								<div className="mt-5 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
									<span className="font-semibold text-[#9a7b2f] dark:text-[#c6a459]">
										{CATEGORY_LABELS[post.category] ?? post.category}
									</span>
									<span aria-hidden className="h-px w-5 bg-border" />
									<span>{post.date ? formatDate(post.date) : ""}</span>
								</div>

								<h3 className="mt-3 text-xl leading-snug text-primary transition-colors group-hover:text-[#24506e] dark:group-hover:text-[#96b7d1]">
									{post.title}
								</h3>
							</Link>
						</article>
					))}
				</div>
			) : (
				<p className="py-10 text-center text-muted-foreground">
					Nothing here yet — check back soon.
				</p>
			)}
		</div>
	);
}

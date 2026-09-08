import { blogs as allBlogs } from "#site/content";
import { EventExplorer } from "@/components/event-explorer";
import type { EventPost } from "@/components/event-explorer";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Events",
};

export default function BlogPage() {
	const posts: EventPost[] = allBlogs
		.filter((blog) => blog.published)
		.sort(
			(a, b) =>
				new Date(b.date).getTime() - new Date(a.date).getTime(),
		)
		.map((blog) => ({
			slug: blog.slug,
			title: blog.title,
			date: blog.date,
			category: blog.category ?? "other",
			description: blog.description ?? null,
			image: blog.image ?? null,
		}));

	return (
		<div className="container max-w-6xl px-6 py-10 md:px-10 lg:py-14">
			<PageHeader
				title="Events"
				description="Past and upcoming events — workshops, talks, hackathons and more."
			/>
			<div className="mt-10">
				<EventExplorer posts={posts} />
			</div>
		</div>
	);
}

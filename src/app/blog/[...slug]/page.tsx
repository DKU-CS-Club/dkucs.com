import { blogs as allBlogs } from "#site/content";
import { cn, formatDate } from "@/lib/utils";
import "@/styles/mdx.css";
import { Metadata } from "next";

import { Mdx } from "@/components/mdx-component";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface BlogPageItemProps {
	params: Promise<{
		slug: string[];
	}>;
}

async function getBlogFromParams(params: Awaited<BlogPageItemProps["params"]>) {
	const slug = params?.slug?.join("/");
	const blog = allBlogs.find((blog) => blog.slugAsParams === slug);

	if (!blog) {
		return null;
	}

	return blog;
}

export async function generateMetadata({
	params,
}: BlogPageItemProps): Promise<Metadata> {
	const resolvedParams = await params;
	const blog = await getBlogFromParams(resolvedParams);

	if (!blog) {
		return {};
	}

	return {
		title: blog.title,
		description: blog.description,
		authors: {
			name: blog.author,
		},
	};
}

export async function generateStaticParams(): Promise<
	Array<{ slug: string[] }>
> {
	return allBlogs.map((blog) => ({
		slug: blog.slugAsParams.split("/"),
	}));
}

export default async function BlogPageItem({ params }: BlogPageItemProps) {
	const resolvedParams = await params;
	const blog = await getBlogFromParams(resolvedParams);

	if (!blog) {
		return null;
	}

	return (
		<article className="container relative max-w-3xl  py-6 lg:py-10 border sm:px-10 border-neutral-400/20">
			<div>
				<div className="bg-gradient-to-r bg-from-rose-900 bg-to-neutral-900">
					<Link
						href="/blog"
						className={
							cn(buttonVariants({ variant: "ghost" })) + " font-mono px-0"
						}
					>
						<ChevronLeft className="size-6" />
					</Link>
					<h1 className="text-center mb-2 text-4xl pb-3 font-extralight capitalize leading-tight tracking-tighter text-primary lg:text-6xl">
						{blog.title}
						<div />
					</h1>
					{blog.date && (
						<time
							dateTime={blog.date}
							className="block text-sm text-muted-foreground mb-4"
						>
							Published on {formatDate(blog.date)}
						</time>
					)}
				</div>

				<Mdx code={blog.body} />
				<hr className="mt-12" />
				<div className="flex justify-center py-6 lg:py-10">
					<Link
						href="/blog"
						className={cn(buttonVariants({ variant: "ghost" }))}
					>
						<ChevronLeft className="mr-2 size-4" />
						See all Blogs
					</Link>
				</div>
			</div>
		</article>
	);
}

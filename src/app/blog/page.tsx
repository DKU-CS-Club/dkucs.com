import { blogs as allBlogs } from "#site/content";
import PageHeader from "@/components/page-header";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const categoryLabels: Record<string, string> = {
  hackdku: "HackDKU",
  lecture: "Lecture",
  workshop: "Workshop",
  "info session": "Info Session",
  other: "Other",
};

export const metadata: Metadata = {
  title: "Events",
};

export default function BlogPage() {
  const blogs = allBlogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className="container max-w-4xl py-6 px-10 lg:py-10">
      <PageHeader
        title="Events"
        description="Explore our past and upcoming events"
      />
      <hr className="my-8" />
      {blogs.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-0">
        {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group relative flex flex-col space-y-2"
            >
              {blog.image && (
                <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill  // fills the parent .relative container
                  className="object-cover" 
                  />
                </div>
                        )}

              {blog.category && (
                <span className="inline-block w-fit rounded-full border border-border/60 bg-muted px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {categoryLabels[blog.category] ?? blog.category}
                </span>
              )}

              <h2 className="text-xl font-extrabold text-primary">
                {blog.title}
              </h2>
              {/* {blog.description && (
                <p className="text-muted-foreground">{blog.description}</p>
              )} */}

              {blog.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(blog.date)}
                </p>
              )}

              <Link href={blog.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No Blogs found</p>
      )}
    </div>
  );
}

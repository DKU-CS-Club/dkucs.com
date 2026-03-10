import { blogs as allBlogs } from "#site/content";
import PageHeader from "@/components/page-header";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

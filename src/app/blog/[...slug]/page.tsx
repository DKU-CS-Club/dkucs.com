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
    <article className="container relative max-w-3xl  py-6 lg:py-10">
      <div>
      {/* {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={900}
          height={300}
          priority
          className="my-8 border bg-muted transition-colors"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      )} */}

        <h1 className="mt-12 mb-2inline-block text-4xl pb-3 font-bold capitalize leading-tight text-primary lg:text-5xl">
          {blog.title}
        </h1>
        {blog.date && (
          <time
            dateTime={blog.date}
            className="block text-sm text-muted-foreground mb-4"
          >
            Published on {formatDate(blog.date)}
          </time>
        )}

        
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

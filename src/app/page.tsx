import Socials from "@/components/socials";
import { History } from "@/components/history";
import { PhotoShowcase } from "@/components/photo-showcase";

export default function Home() {
	return (
		<>
			<PhotoShowcase />
			<section className="container mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
				<p className="eyebrow text-[#9a7b2f] dark:text-[#c6a459]">The club</p>
				<h1 className="mt-4 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
					Who are we?
				</h1>
				<p className="mt-6 max-w-2xl text-left leading-relaxed text-muted-foreground sm:leading-8">
					At DKU, our computer science club is more than just coding.
					We’re a vibrant, multidisciplinary community, passionate about
					pushing the boundaries of innovation. We organize annual
					hackathons (HackDKU), speaker sessions with industry experts,
					workshops focusing on specific technology and field trips to
					tech companies. Dive into a pool of multidisciplinary talents,
					share ideas, and foster innovation that goes beyond the
					classroom.
				</p>
			</section>
			<div className="container mx-auto max-w-5xl px-6 md:px-10">
				<History />
			</div>
			<div className="container mx-auto max-w-5xl px-6 pb-24 pt-4 md:px-10">
				<Socials />
			</div>
		</>
	);
}

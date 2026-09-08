"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
	src: string;
	eyebrow: string;
	title: string;
	href: string;
	alt: string;
};

const slides: Slide[] = [
	{
		src: "/banner.webp",
		eyebrow: "DKU Computer Science Club",
		title: "Coding the Future Together",
		href: "/",
		alt: "The DKU Computer Science Club banner image",
	},
	{
		src: "/images/blog/waic2026/delegation.webp",
		eyebrow: "WAIC 2026 · Field Trip",
		title: "Shanghai, Beyond the Classroom",
		href: "/blog/waic-2026-field-trip",
		alt: "DKU CS Club students touring the World AI Conference 2026 in Shanghai",
	},
	{
		src: "/events/auditorium.webp",
		eyebrow: "HackDKU 2025",
		title: "36 Hours to Ship Something Real",
		href: "/blog/hackdku2025",
		alt: "Students working through the night at the HackDKU hackathon",
	},
	{
		src: "/images/blog/waic2026/kunlun-booth-tour.webp",
		eyebrow: "WAIC 2026 · Compute",
		title: "Inside the Supernode",
		href: "/blog/waic-2026-field-trip",
		alt: "DKU CS Club students at the Kunlun booth during WAIC 2026",
	},
	{
		src: "/images/blog/dic/kickoff.jpg",
		eyebrow: "Digital Innovation Challenge",
		title: "From a Spark to a Product",
		href: "/blog/digital-innovation-challenge-2026",
		alt: "The Digital Innovation Challenge 2026 kickoff event",
	},
];

const AUTOPLAY_MS = 6000;

export function PhotoShowcase() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const count = slides.length;

	useEffect(() => {
		if (paused) return;
		const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
		return () => clearInterval(id);
	}, [paused, count]);

	const go = (dir: 1 | -1) =>
		setIndex((i) => (i + dir + count) % count);

	const slide = slides[index];

	return (
		<section
			aria-label="Featured event photos"
			className="relative h-[58vh] w-full overflow-hidden bg-[#16130e] md:h-[66vh] lg:h-[72vh]"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			{slides.map((s, i) => (
				<Image
					key={s.src}
					src={s.src}
					alt={s.alt}
					fill
					priority={i === 0}
					sizes="100vw"
					className={cn(
						"object-cover transition-opacity duration-1000 ease-out",
						i === index ? "opacity-100" : "opacity-0",
					)}
				/>
			))}

			{/* 底影渐变，保证文字可读 */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />

			{/* 顶部眉题 + 索引 */}
			<div className="absolute inset-x-0 top-0">
				<div className="container flex max-w-screen-2xl items-center justify-between px-6 py-6 md:px-10">
					<p className="eyebrow text-white/70">Curated from the archive</p>
					<p className="font-mono text-xs tracking-[0.2em] text-white/70">
						{String(index + 1).padStart(2, "0")}
						<span className="mx-1 text-white/40">/</span>
						{String(count).padStart(2, "0")}
					</p>
				</div>
			</div>

			{/* 左侧/右侧切换箭头 */}
			<button
				type="button"
				onClick={() => go(-1)}
				aria-label="Previous photo"
				className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 p-2.5 text-white/80 transition-colors hover:border-white/70 hover:text-white md:block"
			>
				<ArrowLeft className="size-4" />
			</button>
			<button
				type="button"
				onClick={() => go(1)}
				aria-label="Next photo"
				className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 p-2.5 text-white/80 transition-colors hover:border-white/70 hover:text-white md:block"
			>
				<ArrowRight className="size-4" />
			</button>

			{/* 底部：题注 + 指示条 */}
			<div className="absolute inset-x-0 bottom-0">
				<div className="container max-w-screen-2xl px-6 pb-14 md:px-10 md:pb-16">
					<div key={slide.src} className="max-w-2xl space-y-3">
						<p className="eyebrow text-[#d8c9a3]">{slide.eyebrow}</p>
						<h2 className="text-3xl leading-tight text-white md:text-5xl">
							<Link
								href={slide.href}
								className="transition-opacity hover:opacity-80"
							>
								{slide.title}
							</Link>
						</h2>
					</div>

					{/* 指示条 */}
					<div className="mt-6 flex items-center gap-2 md:mt-8">
						{slides.map((s, i) => (
							<button
								key={s.src}
								type="button"
								aria-label={`Go to slide ${i + 1}`}
								onClick={() => setIndex(i)}
								className={cn(
									"h-px w-6 transition-all duration-500 md:w-10",
									i === index
										? "bg-white"
										: "bg-white/30 hover:bg-white/60",
								)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { NAV_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function HeaderNav() {
	const segment = useSelectedLayoutSegment();
	return (
		<>
			<nav className="hidden items-center gap-6 md:flex">
				{NAV_LIST.map((item) => (
					<Link
						key={item.label + item.path}
						href={item.path}
						className={cn(
							"flex items-center text-xs font-medium uppercase tracking-[0.14em] transition-colors",
							`/${segment}` === item.path
								? "text-primary"
								: "text-muted-foreground hover:text-primary",
						)}
					>
						<item.icon className="mr-1.5 size-3.5 opacity-70" />
						<span>{item.label}</span>
					</Link>
				))}
			</nav>
			<ModeToggle />
		</>
	);
}

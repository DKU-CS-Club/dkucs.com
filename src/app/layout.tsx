import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
// import { Lexend } from "next/font/google";
// import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ReactNode } from "react";

import App from "@/components/app";

// const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
	title: {
		template: "%s | DKU CS Club",
		default: "DKU Computer Science Club",
	},
	description: "DKU CS Club Website",
	openGraph: {
		title: "My Portfolio",
		description: "DKU CS Club Website",
		url: "dkucompsci.org",
		siteName: "My Portfolio",
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "@/favicon.ico", // Path to your favicon file
	},
};

const fontCode = localFont({
	src: "../assets/fonts/GeistMonoVF.woff2",
	variable: "--font-code",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen antialiased font-inter bg-background",
					// lexend.variable,
					fontCode.variable,
				)}
			>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<App>{children}</App>
				<Analytics />
			</ThemeProvider>
		</body>
	</html>
	);
}

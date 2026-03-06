import { ClarityTracker } from "@/components/clarity-tracker";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/payload/blocks/globals/footer/component";
import { Header } from "@/payload/blocks/globals/header/component";
import { getServerSideURL } from "@/payload/utilities/get-url";
import { mergeOpenGraph } from "@/payload/utilities/merge-opengraph";
import type { Metadata } from "next";
import { ReactNode } from "react";

// inject global stylesheets into the web entry point
import "@/styles/globals.css";

// render the public-facing website layout with global navigation and analytics
const WebLayout = async (props: { children: ReactNode }) => {
	const { children } = props;

	return (
		<div className="bg-bg-subtle text-text-default flex min-h-screen flex-col font-sans antialiased">
			{/* initialize user behavior tracking for site analytics */}
			<ClarityTracker />

			{/* wrap content in theme state management to handle light/dark mode transitions */}
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{/* render global site navigation */}
				<header>
					<Header />
				</header>

				{/* provide the main content area for page-level rendering */}
				<main>{children}</main>

				{/* render global site footer pinned to the bottom of the viewport */}
				<footer className="mt-auto">
					<Footer />
				</footer>
			</ThemeProvider>
		</div>
	);
};

// centralize site-wide seo and social graph configurations
const metadata: Metadata = {
	metadataBase: new URL(getServerSideURL()),
	openGraph: mergeOpenGraph(),
	twitter: {
		card: "summary_large_image",
		creator: "@m6o4solutions",
	},
	icons: {
		icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
	},
};

export { WebLayout as default, metadata };

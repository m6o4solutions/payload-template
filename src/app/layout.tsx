import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";

// initialize typefaces and export as css variables for tailwind integration
const grotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
});

// define the foundational html shell and inject global typography variables
const RootLayout = (props: { children: ReactNode }) => {
	const { children } = props;

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("", grotesk.variable, jakarta.variable)}>{children}</body>
		</html>
	);
};

export { RootLayout as default };

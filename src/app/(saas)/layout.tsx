import { ReactNode } from "react";

// inject global styling into the saas application shell
import "@/styles/globals.css";

// render the core application layout for authenticated saas users
const SaaSLayout = ({ children }: { children: ReactNode }) => {
	return <>{children}</>;
};

export { SaaSLayout as default };

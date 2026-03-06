import { ReactNode } from "react";

// inject global styling for the authentication flow
import "@/styles/globals.css";

// provide the foundational structure for login and registration pages
const AuthLayout = ({ children }: { children: ReactNode }) => {
	return <>{children}</>;
};

export { AuthLayout as default };

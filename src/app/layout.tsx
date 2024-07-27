import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const nutino_sans = Nunito_Sans({ subsets: ["latin"] });



export const metadata = {
	title: "Urban Sixty | Home",
	description: "Landing page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={` ${nutino_sans.className}`}
			suppressHydrationWarning
		>
			<body >
					<Header />
					<main>
						{children}
					</main>
					<Footer />
			</body>
		</html>
	);
}

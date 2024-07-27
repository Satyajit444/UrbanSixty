import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ReduxProvider from "@/provider/redux/ReduxProvider";
require('dotenv').config();

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
    <ReduxProvider>
      <html
        lang="en"
        className={` ${nutino_sans.className}`}
        suppressHydrationWarning
      >
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}

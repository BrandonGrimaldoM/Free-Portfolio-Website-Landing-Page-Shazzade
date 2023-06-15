import Footer from "./components/Footer";
import Navegation from "./components/Navegation";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navegation />
        <main className="py-5 px-20 max-lg:p-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

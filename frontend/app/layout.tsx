import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SeoSabão App",
  description: "Feito para facilitar sua vida!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={manrope.className}
      >
        <div className="h-16">
          <Navbar/>
        </div>
        {children}
        <div className="relative mt-20">
          <Footer/>
        </div>
      </body>
    </html>
  );
}

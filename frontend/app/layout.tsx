import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { cookies } from "next/headers";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SeoSabão App",
  description: "Feito para facilitar sua vida!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cks = await cookies();
  const token = cks.get("token")?.value;

  return (
    <html lang="en">
      <body
        className={manrope.className}
      >
        <div className="h-16">
          <Navbar/>
        </div>
        {children}
        {token ? <p>You're logged in.</p> : <p>You're not logged in.</p>}
        <div className="relative mt-20">
          <Footer/>
        </div>
      </body>
    </html>
  );
}

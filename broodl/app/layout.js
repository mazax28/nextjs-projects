import {  Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";


const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });
export const metadata = {
  title: "Broodl",
  description: "App for broodl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
      <body
        className={`max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ${openSans.className}  antialiased`}
      >
        {<Header  />}
        {children}
        {<Footer  />}
      </body>
      </AuthProvider>
    </html>
  );
}

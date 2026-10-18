import { Geist } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "ELA Pressure Washing | Exterior Cleaning in Wolverhampton & West Midlands",

  description:
    "Professional pressure washing, steam cleaning and specialist exterior care for homes and businesses across Wolverhampton and the West Midlands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

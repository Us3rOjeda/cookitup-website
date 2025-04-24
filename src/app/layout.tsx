import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Cook It Up",
  description: "Website to find recipes with the ingredients that you have in home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f9f4e9]">
        {children}
      </body>
    </html>
  );
}

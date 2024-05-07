import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Simple bingo",
  description: "Simple bingo",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} dark`}>
        <div className="flex h-screen flex-col items-center justify-center p-16">
          <h1 className="mb-8 text-2xl font-bold">BINGO</h1>
          {children}
        </div>
      </body>
    </html>
  );
}

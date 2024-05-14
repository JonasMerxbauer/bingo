import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "bingo",
  description: "bingo",
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
        <div className="flex h-screen flex-col items-center p-2 py-8 sm:py-16">
          <h1 className="mb-4 text-center text-2xl font-bold sm:mb-8 sm:text-7xl">
            bingo
          </h1>
          {children}
        </div>
      </body>
    </html>
  );
}

import "../globals.css";
import QueryProvider from "@/components/providers/QueryProvider";

import { Rubik } from "next/font/google";

export const metadata = {
  title: "E",
};

const inter = Rubik({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </QueryProvider>
    </html>
  );
}

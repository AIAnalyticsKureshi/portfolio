import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Kureshi | Business Intelligence Consultant & Data Analyst",
  description: "BI Consultant specializing in Power BI, SQL, Python, and end-to-end analytics systems. Creator of FinSignal — an early warning system detecting budget overruns 25.6 days before traditional reporting.",
  keywords: ["Business Intelligence", "Power BI", "SQL", "DAX", "Data Analyst", "BI Consultant", "Berlin", "Hamburg", "Germany"],
  openGraph: {
    title: "Mohammad Kureshi | Business Intelligence Consultant & Data Analyst",
    description: "BI Consultant specializing in Power BI, SQL, Python, and end-to-end analytics systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Kureshi | Business Intelligence Consultant & Data Analyst",
    description: "BI Consultant specializing in Power BI, SQL, Python, and end-to-end analytics systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

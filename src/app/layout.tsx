import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justice | My Personal Portfilo",
  description: "A Software Developer With 3 Years Of Expereince",
  verification: {
    google: "google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="toAtCprEUBxOd51sjcWyYShC1hQs8vqYgP2SVMq94gc"
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}

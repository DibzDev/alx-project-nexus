import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Kheir Electronics",
  description: "Modern electronics store built with Next.js",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}


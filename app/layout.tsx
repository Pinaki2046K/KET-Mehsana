import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khodiyar Education Trust (KET India) | Empowering Children with Intellectual Disabilities",
  description: "KET India is a registered NGO dedicated to providing education, therapy, vocational training, and sports development for children with intellectual disabilities in Mahesana, Gujarat.",
  keywords: "KET India, Khodiyar Education Trust, NGO, intellectual disabilities, special education, therapy, Gujarat",
  openGraph: {
    title: "Khodiyar Education Trust – KET India",
    description: "Empowering children with intellectual disabilities through holistic education, therapy, and care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

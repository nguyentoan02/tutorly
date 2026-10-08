import type { Metadata } from "next";
import "./globals.css";

const title = "Tutorly | One-to-one learning, made personal";
const description =
  "Explore subjects, a transparent tutor matching concept, and a connected learning workspace designed around your goals and your pace.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tutorly.io.vn"),
  title,
  description,
  applicationName: "Tutorly",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    siteName: "Tutorly",
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

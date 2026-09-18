import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xyrus AI — Premium AI Chat Workspace",
  description: "Premium AI chat workspace dengan server-side gateway dan control center."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" suppressHydrationWarning><body>{children}</body></html>;
}

import { Header } from "@/shared/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Pizza",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
}

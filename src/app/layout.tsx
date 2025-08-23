"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OrganismsMenuBar_L from "./_components/organisms/Header";
import OrganismsMenuBar_R from "./_components/organisms/MenuBar_R";
import { MoleculesModal } from "./_components/molecules/Modal";
import { Provider } from "react-redux";
import { store } from "./_state/store";
import { OrganismsProjectFormModal } from "./_components/organisms/modal/ProjectFormModal";
import { OrganismsPostFormModal } from "./_components/organisms/modal/PostFormModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Providerは最上位でラップ
  return (
    <html lang="en">
      <body
        className={`flex ${geistSans.variable} ${geistMono.variable} antialiased h-screen text-green-800 bg-white min-w-[1200px]`}
      >
        <Provider store={store}>
          <OrganismsMenuBar_L />
          <main className="w-[800px]">{children}</main>

          {/* <OrganismsMenuBar_R /> */}

          {/* <OrganismsProjectFormModal />
          <OrganismsPostFormModal /> */}
        </Provider>
      </body>
    </html>
  );
}

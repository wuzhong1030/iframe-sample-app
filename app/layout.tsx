/*
 * @Author: stone.wu stone.wu@webeye.com
 * @Date: 2024-08-23 20:41:38
 * @LastEditors: stone.wu stone.wu@webeye.com
 * @LastEditTime: 2024-09-04 09:50:45
 * @FilePath: /iframe-sample-app/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="min-h-screen">
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

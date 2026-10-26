"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import GlobalScrollReveal from "./GlobalScrollReveal";
import GiftCardTrigger from "./GiftCardTrigger";

const authRoutes = new Set(["/login", "/signup"]);

export default function SiteLayout({ children }) {
  const pathname = usePathname();

  if (authRoutes.has(pathname)) return children;

  return (
    <>
      <SiteHeader />
      <GlobalScrollReveal>{children}</GlobalScrollReveal>
      <GiftCardTrigger />
      <SiteFooter />
    </>
  );
}

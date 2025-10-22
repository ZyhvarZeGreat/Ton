"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hiddenRoutes = ["/dashboard", "/connect"];
  const hideNavbar = hiddenRoutes.some((route) => pathname.startsWith(route));

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

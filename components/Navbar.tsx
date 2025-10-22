"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  label: string;
  href?: string;
  description?: string;
  icon?: string;
  children?: {
    label: string;
    href: string;
    description: string;
    icon: string;
  }[];
};

const MENUS: MenuItem[] = [
  { label: "Buy Crypto", href: "/buy" },
  { label: "Swap Tokens", href: "/how-it-works#swap" },
  {
    label: "More Features",
    children: [
      { label: "Staking", href: "/staking", description: " ", icon: " " },
      { label: "NFT", href: "/how-it-works#nft", description: " ", icon: " " },
      {
        label: "DApps",
        href: "/how-it-works#dapps",
        description: " ",
        icon: " ",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/blog", description: " ", icon: " " },
      { label: "Help Center", href: "/help", description: " ", icon: " " },
      { label: "FAQ", href: "/faq", description: " ", icon: " " },
      {
        label: "Customer Support",
        href: "/support",
        description: " ",
        icon: " ",
      },
    ],
  },
  {
    label: "Products",
    children: [
      {
        label: "MEW Mobile App",
        description: "Access your crypto online",
        href: "/web",
        icon: "https://www.myetherwallet.com/img/mewwallet-logo.21d9c6cf.svg",
      },
      {
        label: "MEW Portfolio Manager",
        description: "Crypto wallet on the go",
        href: "/mobile",
        icon: "/icons/mobile.png",
      },
      {
        label: "Enkrypt",
        description: "Secure offline wallet",
        href: "/hardware",
        icon: "/icons/hardware.png",
      },
      {
        label: "ethVM",
        description: "Secure offline wallet",
        href: "/hardware",
        icon: "/icons/hardware.png",
      },
    ],
  },
];

export default function NavBar() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!barRef.current?.contains(e.target as Node)) setOpenIdx(null);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-[100] py-4 px-4 isolate">
        <div
          ref={barRef}
          className={`mx-auto max-w-7xl text-[#0d2b46] transition-all duration-300 ${
            isScrolled
              ? "rounded-full bg-white/90 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-black/5"
              : "bg-[inherit]"
          }`}
        >
          <div className="flex items-center justify-between px-8 py-3">
            {/* Left: Brand */}
            <div className="flex items-center">
              <BrandImage />
            </div>

            {/* Center: Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {MENUS.map((m, idx) =>
                m.children ? (
                  <Dropdown
                    key={m.label}
                    label={m.label}
                    items={m.children}
                    open={openIdx === idx}
                    onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                    onClose={() => setOpenIdx(null)}
                  />
                ) : (
                  <NavLink key={m.label} href={m.href!} label={m.label} />
                )
              )}
            </nav>

            {/* Right: CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex">
                <WalletButton href="/wallet">Access my wallet</WalletButton>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#0d2b46] hover:bg-black/5"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer so content doesn't hide behind nav */}
      <div className="h-20" />

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center text-[#0d2b46] space-y-6 p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-md hover:bg-black/5"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Links */}
            <nav className="flex flex-col items-center gap-4 text-lg font-medium">
              {MENUS.map((m) =>
                m.children ? (
                  <div
                    key={m.label}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="font-semibold text-[#0aa1a7]">
                      {m.label}
                    </span>
                    {m.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-[#0d2b46]/70 hover:text-black transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={m.label}
                    href={m.href!}
                    onClick={() => setMobileOpen(false)}
                    className="text-[#0d2b46]/80 hover:text-black transition"
                  >
                    {m.label}
                  </Link>
                )
              )}
            </nav>

            <WalletButton href="/wallet">Access my wallet</WalletButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function BrandImage() {
  return (
    <Link
      href="/"
      aria-label="MEW Home"
      className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0aa1a7] rounded-md"
    >
      <Image
        src="/brand/mew.svg"
        alt="MEW logo"
        width={120}
        height={28}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-base font-medium hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0aa1a7] rounded-md px-2 py-1"
    >
      {label}
    </Link>
  );
}

function Dropdown({
  label,
  items,
  open,
  onToggle,
  onClose,
}: {
  label: string;
  items: { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={onToggle}
        className="flex items-center gap-1 text-base font-medium hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0aa1a7] rounded-md px-2 py-1"
      >
        <span>{label}</span>
        <Caret down={!open} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 mt-2 w-52 overflow-hidden rounded-md border border-black/10 bg-white shadow-lg"
        >
          <ul>
            {items.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  role="menuitem"
                  className="block px-3 py-2 text-[14px] hover:bg-black/5"
                  onClick={onClose}
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function WalletButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-white text-[15px] font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
      {children}
    </Link>
  );
}

function Caret({ down = true }: { down?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      className={`transition-transform ${down ? "" : "rotate-180"}`}
      aria-hidden="true"
    >
      <path
        d="M7 10l5 5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

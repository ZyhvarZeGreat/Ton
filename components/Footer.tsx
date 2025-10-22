"use client";

import Link from "next/link";
import { useState } from "react";

type LinkItem = { label: string; href: string };
type LinkGroup = { title?: string; items: LinkItem[] };

const GROUPS: LinkGroup[] = [
  {
    items: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Team", href: "/team" },
      { label: "Advertise With Us", href: "/advertise" },
    ],
  },
  {
    items: [
      { label: "MEW Mobile App", href: "/mobile" },
      { label: "Enkrypt", href: "/enkrypt" },
      { label: "MEW Portfolio Manager", href: "/portfolio" },
      { label: "ethVM", href: "/ethvm" },
      { label: "Blog", href: "/blog" },
      { label: "Press Kit", href: "/press" },
    ],
  },
  {
    items: [
      { label: "Help Center", href: "/help" },
      { label: "Customer Support", href: "/support" },
      { label: "Security Policy", href: "/security" },
      { label: "Verify Message", href: "/verify-message" },
      { label: "Convert Units", href: "/convert-units" },
      { label: "Send Offline Helper", href: "/offline-helper" },
    ],
  },
  {
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Bug Bounty", href: "/bug-bounty" },
    ],
  },
];

const SOCIAL: { name: string; href: string; icon: React.ReactElement }[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.22.2 2.22.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22c4.78-.75 8.44-4.92 8.44-9.94z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3 3h4.6l4.12 5.79L16.8 3H21l-7.27 9.04L21.5 21H16.9l-4.39-6.17L8 21H3.5l7.82-9.72L3 3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V24h-4v-6.8c0-1.6-.03-3.67-2.24-3.67-2.24 0-2.58 1.75-2.58 3.56V24h-4V8.5z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.07 3.29 9.36 7.86 10.88.58.1.79-.26.79-.58v-2.04c-3.2.69-3.87-1.36-3.87-1.36-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.12-.12-.3-.52-1.51.12-3.16 0 0 .98-.31 3.2 1.19.93-.26 1.92-.39 2.91-.4.99.01 1.98.14 2.91.4 2.22-1.5 3.2-1.19 3.2-1.19.64 1.65.24 2.86.12 3.16.75.82 1.2 1.86 1.2 3.12 0 4.43-2.69 5.4-5.25 5.68.43.37.81 1.1.81 2.23v3.31c0 .32.21.69.79.58A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
      </svg>
    ),
  },
  {
    name: "Reddit",
    href: "https://reddit.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21.5 12.5c0-1.1-.9-2-2-2-.68 0-1.28.34-1.64.86-1.34-.66-3.06-1.08-5.01-1.13l1.02-3.2 2.8.59a2 2 0 1 0 .26-1.29l-3.41-.72a.8.8 0 0 0-.93.54l-1.36 4.27c-1.98.03-3.74.44-5.12 1.12A1.99 1.99 0 0 0 4.5 10.5c-1.1 0-2 .9-2 2 0 .57.24 1.09.61 1.45-.04.2-.06.42-.06.64 0 2.68 3.27 4.85 7.3 4.85s7.3-2.17 7.3-4.85c0-.22-.02-.44-.06-.64.38-.37.61-.88.61-1.45zM8.75 13a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 8.75 13zm6.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 19.25c-1.17 0-2.22-.28-2.98-.75a.75.75 0 1 1 .77-1.29c.5.3 1.24.49 2.02.49s1.52-.19 2.02-.49a.75.75 0 1 1 .77 1.29c-.76.47-1.81.75-2.98.75z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.5 7.5s-.23-1.63-.95-2.35c-.9-.95-1.9-.95-2.36-1C16.9 3.75 12 3.75 12 3.75h-.01S7.1 3.75 3.81 4.15c-.46.05-1.46.05-2.36 1-.72.72-.95 2.35-.95 2.35S0 9.38 0 11.25v1.5c0 1.87.5 3.75.5 3.75s.23 1.63.95 2.35c.9.95 2.08.92 2.61 1.02C6.12 20.28 12 20.25 12 20.25s4.9 0 8.19-.4c.46-.05 1.46-.05 2.36-1 .72-.72.95-2.35.95-2.35s.5-1.88.5-3.75v-1.5c0-1.87-.5-3.75-.5-3.75zM9.75 9.75 15.75 12 9.75 14.25V9.75z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.04 15.3 8.7 19.6c.61 0 .88-.26 1.2-.57l2.88-2.76 5.96 4.37c1.09.6 1.86.28 2.14-1.02l3.88-18.2h.01c.34-1.6-.58-2.22-1.64-1.83L1.4 9.6C-.16 10.2-.14 11.1 1.13 11.5l5.57 1.74L20.3 5.7c.75-.46 1.42-.21.86.25L9.04 15.3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [trackingOn, setTrackingOn] = useState(true);

  return (
    <footer className="w-full border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top grid: link columns + donations */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* 4 link columns */}
          {GROUPS.map((group, gi) => (
            <nav
              key={gi}
              aria-label={`Footer group ${gi + 1}`}
              className="space-y-3"
            >
              {group.title && (
                <h4 className="text-sm font-semibold text-black">
                  {group.title}
                </h4>
              )}
              <ul className="space-y-3">
                {group.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="text-[15px] text-neutral-800 hover:text-black transition-colors"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Donations side panel */}
          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-black/10 p-4">
              <p className="text-[15px] text-neutral-700">
                Help keep MEW free and open source; donations go a long way
                towards making that possible.
              </p>
              <div className="mt-4 space-y-3">
                <Link
                  href="/donate/eth"
                  className="inline-flex items-center gap-2 text-[15px] font-medium hover:opacity-90"
                >
                  <span className="text-[#6b7280]">⬨</span>
                  <span>Ethereum Donation</span>
                </Link>
                <br />
                <Link
                  href="/donate/btc"
                  className="inline-flex items-center gap-2 text-[15px] font-medium hover:opacity-90"
                >
                  <span className="text-amber-500">₿</span>
                  <span>Bitcoin Donation</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Social row */}
        <div className="mt-10">
          <h4 className="text-sm font-semibold text-neutral-900">
            Join MEW Community
          </h4>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {SOCIAL.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-neutral-800 hover:bg-black/5"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 text-[14px] text-neutral-600">
            <p>© 2025 MyEtherWallet. All rights reserved.</p>
            <p>Pricing taken from CoinGecko.</p>
          </div>

          {/* Tracking toggle */}
          <div className="flex items-center gap-7">
            <button
              type="button"
              role="switch"
              aria-checked={trackingOn}
              onClick={() => setTrackingOn((v) => !v)}
              className={`relative h-8 w-14 rounded-full transition-colors ${
                trackingOn ? "bg-emerald-400" : "bg-neutral-300"
              }`}
            >
              <span
                className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                  trackingOn ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-[14px] text-neutral-800">
              Data Tracking {trackingOn ? "On" : "Off"}
            </span>
          </div>

          {/* Version */}
          <div className="text-[14px] text-neutral-600">
            Version: v6.9.25 hotfix.2
          </div>
        </div>
      </div>
    </footer>
  );
}

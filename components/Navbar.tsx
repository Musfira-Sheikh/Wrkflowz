"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { services } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "process" | null>(
    null
  );

  const serviceMenu = services.map((service) => ({
    label: service.title,
    href: service.href,
  }));

  const processMenu = [
    { label: "Discovery", href: "/process/discovery" },
    { label: "Automation Design", href: "/process/design" },
    { label: "Build & Integration", href: "/process/build" },
    { label: "Launch & Optimization", href: "/process/launch" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#E5E7EB] bg-white/95 shadow-[0_6px_20px_rgba(15,23,42,0.12)] backdrop-blur-[20px]"
          : "border-b border-[#E5E7EB] bg-white"
      }`}
    >
      <nav className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#0A0A0A]"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white shadow-sm">
            <Sparkles size={14} />
          </span>
          wrkflowz
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm text-[#4B5563] transition-colors hover:text-[#2563EB]"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("services")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 text-sm text-[#4B5563] transition-colors hover:text-[#2563EB]">
              Services <ChevronDown size={14} />
            </button>
            {activeMenu === "services" && (
              <div className="absolute left-0 top-full w-56 rounded-xl border border-[#E5E7EB] bg-white p-2 shadow-lg">
                {serviceMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#2563EB]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/industries"
            className="text-sm text-[#4B5563] transition-colors hover:text-[#2563EB]"
          >
            Industries
          </Link>
          <Link
            href="/about"
            className="text-sm text-[#4B5563] transition-colors hover:text-[#2563EB]"
          >
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("process")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 text-sm text-[#4B5563] transition-colors hover:text-[#2563EB]">
              Process <ChevronDown size={14} />
            </button>
            {activeMenu === "process" && (
              <div className="absolute left-0 top-full w-56 rounded-xl border border-[#E5E7EB] bg-white p-2 shadow-lg">
                {processMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#2563EB]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className="text-sm text-[#4B5563] transition-colors hover:text-[#2563EB]"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#7C3AED] hover:shadow-md active:scale-95"
          >
            Start a Project
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-lg border border-[#E5E7EB] p-2 text-[#0A0A0A] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-5 bg-[#0A0A0A]" />
          <span className="my-1 block h-0.5 w-5 bg-[#0A0A0A]" />
          <span className="block h-0.5 w-5 bg-[#0A0A0A]" />
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          className="border-t border-[#E5E7EB] bg-white px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-[#4B5563] transition-colors hover:text-[#2563EB]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Services
            </p>
            {serviceMenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="pl-3 text-sm text-[#4B5563] transition-colors hover:text-[#2563EB]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/industries"
              className="text-[#4B5563] transition-colors hover:text-[#2563EB]"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="text-[#4B5563] transition-colors hover:text-[#2563EB]"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Process
            </p>
            {processMenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="pl-3 text-sm text-[#4B5563] transition-colors hover:text-[#2563EB]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[#4B5563] transition-colors hover:text-[#2563EB]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#7C3AED]"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="section-shell bg-[#F9FAFB] py-16">
      <div className="container-shell">
        <div className="text-center">
          <p className="section-kicker justify-center">Simple Packages</p>
          <h1 className="mt-4 text-4xl font-bold text-[#0A0A0A] sm:text-[56px]">
            Flexible plans for every stage.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B7280]">
            Transparent pricing with no hidden fees. We work with you to find the perfect plan for your project.
          </p>
        </div>
        
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {[
            { name: "Starter", price: "$1k - $5k", points: ["Landing pages", "Basic integrations", "Launch support"] },
            {
              name: "Growth",
              price: "$5k - $15k",
              points: ["Product features", "API + dashboard", "QA + optimization", "Conversion and performance tuning"],
              featured: true,
            },
            { name: "Scale", price: "$15k+", points: ["Custom software", "Automation workflows", "Long-term support"] },
          ].map((pkg) => (
            <article
              key={pkg.name}
              className={`group flex flex-col rounded-3xl border p-8 transition-all duration-300 lg:p-10 ${
                pkg.featured
                  ? "min-h-[470px] border-[#2563EB] bg-gradient-to-b from-[#EFF6FF] to-white shadow-[0_16px_45px_rgba(37,99,235,0.22)] lg:min-h-[520px]"
                  : "min-h-[400px] border-[#E5E7EB] bg-white shadow-[0_12px_30px_rgba(2,6,23,0.08)] hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(2,6,23,0.12)] lg:min-h-[450px]"
              }`}
            >
              <div className="flex items-start justify-between">
                <p className="text-base font-semibold text-[#111827]">{pkg.name}</p>
                {pkg.featured && (
                  <span className="rounded-full border border-[#BFDBFE] bg-white px-3 py-1 text-xs font-semibold text-[#2563EB]">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-4xl font-extrabold leading-none text-[#0A0A0A] lg:text-5xl">{pkg.price}</p>
              <p className="mt-3 text-sm text-[#6B7280]">
                {pkg.featured
                  ? "Best for teams scaling product and operations with automation."
                  : "Built for teams that need fast execution and reliable delivery."}
              </p>
              <div className="mt-7 space-y-3">
                {pkg.points.map((point) => (
                  <p key={point} className="flex items-center gap-2 text-base text-[#374151]">
                    <CheckCircle2 size={17} className="text-[#2563EB]" />
                    {point}
                  </p>
                ))}
              </div>
              <Link
                href="/contact"
                className={`mt-auto inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  pkg.featured
                    ? "bg-[#2563EB] text-white hover:brightness-110"
                    : "bg-[#0A0A0A] text-white hover:bg-[#111827]"
                }`}
              >
                Choose {pkg.name}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

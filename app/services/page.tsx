"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { serviceIcons, CheckCircle2 } from "@/components/IconMap";
import { services } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <main className="section-shell bg-[#F9FAFB] py-16">
      <div className="container-shell">
        <section className="py-10 text-center">
          <p className="section-kicker justify-center">Our Services</p>
          <h1 className="mt-4 text-4xl font-extrabold text-[#0A0A0A] sm:text-[56px]">
            What We Automate
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[#6B7280]">
            End-to-end automation services for modern operations teams.
          </p>
        </section>

        <section className="mt-8 space-y-5 pb-10">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <motion.article
                id={service.slug}
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[var(--shadow-sm)]"
                style={{ borderLeft: `4px solid ${service.color}` }}
              >
                <div className="grid gap-8 p-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <div className="grid h-20 w-20 place-items-center rounded-2xl" style={{ background: `${service.color}1A` }}>
                      <Icon size={34} style={{ color: service.color }} />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-[#0A0A0A]">{service.title}</h2>
                    <p className="mt-3 text-lg text-[#4B5563]">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-3 py-1 text-xs font-medium"
                          style={{ color: service.color, background: `${service.color}14`, borderColor: `${service.color}33` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-[#0A0A0A]">What&apos;s included</p>
                      <ul className="mt-3 space-y-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-[#4B5563]">
                            <CheckCircle2 size={16} style={{ color: service.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={service.href}
                        className="inline-flex rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:opacity-80"
                        style={{ color: service.color, borderColor: `${service.color}55`, background: `${service.color}0D` }}
                      >
                        View details
                      </Link>
                      <Link
                        href={`/contact?service=${service.slug}`}
                        className="inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                        style={{ background: service.color }}
                      >
                        Start this service →
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-64 w-full overflow-hidden rounded-xl lg:h-[400px]">
                    <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>
      </div>
    </main>
  );
}

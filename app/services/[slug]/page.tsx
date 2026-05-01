import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { serviceIcons, CheckCircle2 } from "@/components/IconMap";
import { services } from "@/lib/constants";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];

  return (
    <main className="section-shell bg-[#F9FAFB] py-16">
      <div className="container-shell">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-[var(--shadow-sm)] lg:p-12">
          <div>
            <p className="section-kicker">Service Detail</p>
            <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-extrabold text-[#0A0A0A] sm:text-5xl">{service.title}</h1>
                <p className="mt-4 text-lg text-[#4B5563]">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                      style={{ color: service.color, background: `${service.color}12`, borderColor: `${service.color}33` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 relative h-[300px] w-full overflow-hidden rounded-2xl lg:h-[400px]">
              <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 grid h-16 w-16 place-items-center rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg">
                <Icon size={30} style={{ color: service.color }} />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <section className="rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] p-6 lg:col-span-2">
              <h2 className="text-xl font-bold text-[#0A0A0A]">What is included</h2>
              <ul className="mt-4 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#4B5563]">
                    <CheckCircle2 size={16} style={{ color: service.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] p-6">
              <h2 className="text-xl font-bold text-[#0A0A0A]">Ideal for</h2>
              <ul className="mt-4 space-y-2 text-sm text-[#4B5563]">
                {service.idealFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] p-6 lg:col-span-3">
              <h2 className="text-xl font-bold text-[#0A0A0A]">Expected outcomes</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {service.outcomes.map((item) => (
                  <article key={item} className="rounded-xl border border-[#E5E7EB] bg-white p-4 text-sm font-medium text-[#374151]">
                    {item}
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: service.color }}
            >
              Start this service <ArrowRight size={15} className="ml-2" />
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-lg border border-[#D1D5DB] px-5 py-2.5 text-sm font-semibold text-[#374151]">
              Back to all services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

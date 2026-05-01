import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function DesignPage() {
  return (
    <main className="section-shell bg-white py-16">
      <div className="container-shell max-w-4xl">
        <p className="section-kicker">Process Step 02</p>
        <h1 className="mt-4 text-4xl font-extrabold text-[#0A0A0A] sm:text-5xl">
          Automation Design and System Architecture
        </h1>
        <p className="mt-4 text-[#6B7280]">
          We define workflows, agent behavior, fallback rules, and integration
          logic so your automation runs reliably in production.
        </p>
        <div className="mt-8 relative h-[300px] w-full overflow-hidden rounded-2xl shadow-sm lg:h-[400px]">
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200" alt="Design" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
        <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
          <p className="font-semibold text-[#0A0A0A]">What you get</p>
          <div className="mt-4 space-y-2">
            {[
              "Workflow diagrams and event maps",
              "Agent prompts and escalation rules",
              "Data contracts and integration blueprint",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm text-[#4B5563]">
                <CheckCircle2 size={16} className="text-[#2563EB]" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <Link href="/contact" className="btn-primary mt-8 inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold">
          Start Automation Design
        </Link>
      </div>
    </main>
  );
}

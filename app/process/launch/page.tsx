import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function LaunchPage() {
  return (
    <main className="section-shell bg-white py-16">
      <div className="container-shell max-w-4xl">
        <p className="section-kicker">Process Step 04</p>
        <h1 className="mt-4 text-4xl font-extrabold text-[#0A0A0A] sm:text-5xl">
          Launch, Monitoring, and Optimization
        </h1>
        <p className="mt-4 text-[#6B7280]">
          We launch your automation, monitor execution health, and optimize
          flows for speed, accuracy, and cost-efficiency.
        </p>
        <div className="mt-8 relative h-[300px] w-full overflow-hidden rounded-2xl shadow-sm lg:h-[400px]">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Launch" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
        <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
          <p className="font-semibold text-[#0A0A0A]">What you get</p>
          <div className="mt-4 space-y-2">
            {[
              "Go-live and rollback plan",
              "Monitoring dashboard and alerts",
              "30-day optimization sprint",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm text-[#4B5563]">
                <CheckCircle2 size={16} className="text-[#2563EB]" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <Link href="/contact" className="btn-primary mt-8 inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold">
          Launch With wrkflowz
        </Link>
      </div>
    </main>
  );
}

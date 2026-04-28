import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function DiscoveryPage() {
  return (
    <main className="section-shell bg-white py-16">
      <div className="container-shell max-w-4xl">
        <p className="section-kicker">Process Step 01</p>
        <h1 className="mt-4 text-4xl font-extrabold text-[#0A0A0A] sm:text-5xl">
          Discovery and Workflow Audit
        </h1>
        <p className="mt-4 text-[#6B7280]">
          wrkflowz maps your current operations, bottlenecks, and repetitive
          tasks so we can automate the right workflows first.
        </p>
        <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
          <p className="font-semibold text-[#0A0A0A]">What you get</p>
          <div className="mt-4 space-y-2">
            {[
              "Automation opportunity map",
              "Priority matrix by effort and impact",
              "Technical scope and implementation plan",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm text-[#4B5563]">
                <CheckCircle2 size={16} className="text-[#2563EB]" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <Link href="/contact" className="btn-primary mt-8 inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold">
          Book Discovery Call
        </Link>
      </div>
    </main>
  );
}

import { Sparkles, Cpu, Cloud, Layers } from 'lucide-react';

const highlights = [
  {
    icon: Sparkles,
    title: 'Interactive 3D Hero',
    desc: 'A futuristic, education-themed scene sets the tone for innovation.'
  },
  {
    icon: Cpu,
    title: 'AI-first Approach',
    desc: 'Automation and personalization drive better learning outcomes.'
  },
  {
    icon: Cloud,
    title: 'Cloud-native',
    desc: 'Scales securely with your campus across devices and locations.'
  },
  {
    icon: Layers,
    title: 'Modular Design',
    desc: 'Pick and integrate modules like attendance, timetables, and results.'
  }
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                <Icon size={16} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

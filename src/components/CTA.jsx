export default function CTA() {
  return (
    <section id="get-started" className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ready to build your Smart Campus?
          </h2>
          <p className="max-w-2xl text-slate-300">
            Get a personalized demo and see how AI-powered automation, role-based access, and real-time analytics can transform your campus operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-50">
              Request a Demo
            </a>
            <a href="#features" className="inline-flex items-center rounded-md bg-slate-800 px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 hover:bg-slate-700">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-900/10">
              AI-powered • Cloud-native • Secure
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Smart Campus — The Future of Intelligent Learning
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-7 text-slate-600">
              Connect students, teachers, and administrators in one seamless platform. Automate attendance, intelligent timetables, digital assessments, and real-time insights.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50">
                Explore Features
              </a>
            </div>
          </div>

          <div className="h-[420px] w-full rounded-2xl border border-slate-200 bg-white/60 shadow-inner">
            <Spline 
              scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" 
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[600px] bg-gradient-to-b from-indigo-50 via-white/40 to-transparent" />
    </section>
  );
}

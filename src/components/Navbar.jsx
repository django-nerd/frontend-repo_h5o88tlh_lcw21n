import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-lg">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">Smart Campus</span>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#features" className="text-slate-700 hover:text-slate-900">Features</a>
            <a href="#highlights" className="text-slate-700 hover:text-slate-900">Highlights</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="#get-started" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">Get Started</a>
          </div>

          <button
            aria-label="Toggle Menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <a href="#features" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Features</a>
              <a href="#highlights" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Highlights</a>
              <a href="#contact" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Contact</a>
              <a href="#get-started" className="block rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-800">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import { Shield, Bell, BarChart3, Clock, Users, CheckSquare } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Smart Attendance',
    desc: 'Automated, accurate attendance with real-time syncing and audit logs.'
  },
  {
    icon: CheckSquare,
    title: 'Digital Assessments',
    desc: 'Create, assign, and auto-grade tests with analytics and integrity checks.'
  },
  {
    icon: Bell,
    title: 'Real-time Notifications',
    desc: 'Instant updates for schedules, results, and campus alerts.'
  },
  {
    icon: BarChart3,
    title: 'AI Insights',
    desc: 'Performance dashboards that surface trends and recommend actions.'
  },
  {
    icon: Users,
    title: 'Role-based Access',
    desc: 'Secure, granular permissions for students, teachers, and admins.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Encrypted data storage with compliance-first architecture.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need for a modern campus</h2>
          <p className="mt-3 text-slate-600">A unified platform that connects people, streamlines processes, and unlocks data-driven decisions.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

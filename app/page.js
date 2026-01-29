import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <section className="mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-slate-900">
          CPRG 306: Web Development 2 – Assignments
        </h1>
        <nav className="flex gap-4">

          <Link
            href="/week-2"
            className="rounded-xl bg-white px-6 py-3 text-lg font-medium text-sky-600 shadow-sm ring-1 ring-slate-200
               hover:bg-emerald-50 hover:ring-emerald-300">
            Week 2
          </Link>

          <Link
            href="/week-3"
            className="rounded-xl bg-white px-6 py-3 text-lg font-medium text-emerald-700 shadow-sm ring-1 ring-slate-200
               hover:bg-emerald-50 hover:ring-emerald-300">
            Week 3
          </Link>
        </nav>
      </section>
    </main>
  );
}

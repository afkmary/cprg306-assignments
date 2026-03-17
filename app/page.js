import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          CPRG 306: Web Development 2 – Assignments
        </h1>

        <nav className="flex justify-center gap-4 w-full">
          <Link className="border px-4 py-2 text-lg" href="/week-2">
            Week 2
          </Link>
          <Link className="border px-4 py-2 text-lg" href="/week-3">
            Week 3
          </Link>
          <Link className="border px-4 py-2 text-lg" href="/week-4">
            Week 4
          </Link>
          <Link className="border px-4 py-2 text-lg" href="/week-5">
            Week 5
          </Link>
          <Link className="border px-4 py-2 text-lg" href="/week-6">
            Week 6
          </Link>
          <Link className="border px-4 py-2 text-lg" href="/week-7">
            Week 7
          </Link>
          <Link className="border px-4 py-2 text-lg" href="/week-8">
            Week 8
          </Link>
          <Link className="border px-4 py-2 text-lg" href="/week-9">
            Week 9
          </Link>
        </nav>
      </section>
    </main>
  );
}

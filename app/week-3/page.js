import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-pink-200 px-4 py-10">
      <section className="mx-auto max-w-2xl">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Shopping List
          </h1>
        </header>

        <GroceryItemList />
      </section>
    </main>
  );
}

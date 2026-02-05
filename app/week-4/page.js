import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <section className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
        <ItemList />
      </section>
    </main>
  );
}

import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Week 5</h1>
        <NewItem />
      </div>
    </main>
  );
}

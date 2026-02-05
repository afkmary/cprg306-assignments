import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const itemsByCategory = items.reduce((groups, item) => {
    const category = item.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(item);
    return groups;
  }, {});

  const sortedCategories = Object.keys(itemsByCategory).sort();

  return (
    <div className="max-w-md mx-auto mt-6 space-y-6">
      {sortedCategories.map((category) => (
        <section key={category}>
          <h2 className="text-xl font-bold mb-3 capitalize">{category}</h2>

          <ul className="space-y-3">
            {itemsByCategory[category].map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

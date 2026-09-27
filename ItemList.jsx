import ItemCard from './ItemCard';

function ItemList({ items, onClaim }) {
  return (
    <div>
      <h2>Available Lost & Found Items</h2>

      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onClaim={onClaim}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;
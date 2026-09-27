function ItemCard({ item, onClaim }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        margin: '15px 0',
        maxWidth: '500px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}
    >
      <h2>{item.item_name}</h2>

      <p>
        <strong>Location:</strong> {item.location}
      </p>

      <p>
        <strong>Status:</strong> {item.status}
      </p>

      <button
        onClick={() => onClaim(item.id)}
        style={{
          padding: '10px 15px',
          cursor: 'pointer'
        }}
      >
        Claim Item
      </button>
    </div>
  );
}

export default ItemCard;
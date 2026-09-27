import { useState } from 'react';

function AddItemForm({ onItemAdded }) {
  const [itemName, setItemName] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('Lost');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!itemName.trim() || !location.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    await onItemAdded({
      item_name: itemName,
      location: location,
      status: status
    });

    setItemName('');
    setLocation('');
    setStatus('Lost');
  }

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px 0',
        maxWidth: '500px'
      }}
    >
      <h3>Add Lost & Found Item</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          style={{
            padding: '10px',
            width: '90%',
            marginBottom: '10px'
          }}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            padding: '10px',
            width: '90%',
            marginBottom: '10px'
          }}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{
            padding: '10px',
            width: '95%',
            marginBottom: '10px'
          }}
        >
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>

        <br />

        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItemForm;
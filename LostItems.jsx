import ItemList from '../components/ItemList';
import ClaimForm from '../components/ClaimForm';
import AddItemForm from '../components/AddItemForm';

function LostItems({
  items,
  studentName,
  setStudentName,
  onClaim,
  onItemAdded
}) {
  return (
    <div style={{ padding: '30px' }}>
      <h2>Lost & Found Items</h2>

      <AddItemForm onItemAdded={onItemAdded} />

      <ClaimForm
        studentName={studentName}
        setStudentName={setStudentName}
      />

      <ItemList
        items={items}
        onClaim={onClaim}
      />
    </div>
  );
}

export default LostItems;
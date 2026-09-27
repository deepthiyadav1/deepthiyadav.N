function ClaimForm({ studentName, setStudentName }) {
  return (
    <div
      style={{
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        maxWidth: '500px'
      }}
    >
      <h3>Claim an Item</h3>

      <label>
        Enter your name:
      </label>

      <br />

      <input
        type="text"
        placeholder="Enter your name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        style={{
          padding: '10px',
          width: '90%',
          marginTop: '10px'
        }}
      />
    </div>
  );
}

export default ClaimForm;
function Home() {
  return (
    <div style={{ padding: '30px' }}>
      <h2>Welcome to Campus Lost & Found</h2>

      <p>
        This system helps students find lost items and claim
        items that belong to them.
      </p>

      <h3>How it works</h3>

      <ol>
        <li>View the lost and found items.</li>
        <li>Enter your name.</li>
        <li>Click the Claim Item button.</li>
        <li>Your claim is saved in the Supabase database.</li>
      </ol>
    </div>
  );
}

export default Home;
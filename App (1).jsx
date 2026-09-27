import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import LostItems from './pages/LostItems';
import Claims from './pages/Claims';
import { supabase } from './supabase';

function App() {
  const [items, setItems] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [page, setPage] = useState('home');

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.error('Error fetching items:', error);
    } else {
      setItems(data);
    }
  }

  async function claimItem(itemId) {
    if (!studentName.trim()) {
      alert('Please enter your name first.');
      return;
    }

    const { error } = await supabase
      .from('claims')
      .insert([
        {
          item_id: itemId,
          student_name: studentName
        }
      ]);

    if (error) {
      console.error('Error claiming item:', error);
      alert('Could not claim the item.');
    } else {
      alert('Item claimed successfully!');
      setStudentName('');
    }
  }

  async function addItem(newItem) {
    const { error } = await supabase
      .from('items')
      .insert([newItem]);

    if (error) {
      console.error('Error adding item:', error);
      alert('Could not add the item.');
      return;
    }

    alert('Item added successfully!');
    fetchItems();
  }

  return (
    <div>
      <Header />

      <nav
        style={{
          padding: '15px',
          textAlign: 'center',
          backgroundColor: '#eeeeee'
        }}
      >
        <button onClick={() => setPage('home')}>
          Home
        </button>

        <button
          onClick={() => setPage('items')}
          style={{ marginLeft: '10px' }}
        >
          Lost & Found
        </button>

        <button
          onClick={() => setPage('claims')}
          style={{ marginLeft: '10px' }}
        >
          Claims
        </button>
      </nav>

      <main>
        {page === 'home' && <Home />}

        {page === 'items' && (
          <LostItems
            items={items}
            studentName={studentName}
            setStudentName={setStudentName}
            onClaim={claimItem}
            onItemAdded={addItem}
          />
        )}

        {page === 'claims' && <Claims />}
      </main>

      <footer
        style={{
          marginTop: '40px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#1e3a8a',
          color: 'white'
        }}
      >
        <p>Campus Lost & Found</p>
        <p>Powered by React and Supabase</p>
      </footer>
    </div>
  );
}

export default App;
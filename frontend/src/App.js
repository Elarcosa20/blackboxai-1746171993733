import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/items')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Items List</h1>
      <ul className="max-w-md mx-auto bg-white rounded shadow p-4">
        {items.length === 0 ? (
          <li className="text-center text-gray-500">No items found.</li>
        ) : (
          items.map((item) => (
            <li key={item.id} className="border-b last:border-b-0 py-2">
              {item.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;

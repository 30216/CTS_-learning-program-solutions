import React from 'react';
import './App.css';

function App() {
  const offices = [
    {
      name: 'Skyline View Office',
      rent: 55000,
      address: '12th Floor, Phoenix Towers, Mumbai',
      image: 'https://via.placeholder.com/300x200.png?text=Skyline+Office',
    },
    {
      name: 'Tech Park Workspace',
      rent: 75000,
      address: '3rd Block, Tech Park, Bangalore',
      image: 'https://via.placeholder.com/300x200.png?text=Tech+Park+Office',
    },
    {
      name: 'Urban Cowork Hub',
      rent: 45000,
      address: '1st Ave, Sector 5, Hyderabad',
      image: 'https://via.placeholder.com/300x200.png?text=Urban+Hub',
    },
  ];

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', color: '#333' }}>🏢 Office Space Rental</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {offices.map((office, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              margin: '10px',
              width: '300px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              backgroundColor: 'white',
            }}
          >
            <img
              src={office.image}
              alt={office.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />

            <h3>{office.name}</h3>
            <p>{office.address}</p>

            <p
              style={{
                color: office.rent < 60000 ? 'red' : 'green',
                fontWeight: 'bold',
              }}
            >
              Rent: ₹{office.rent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

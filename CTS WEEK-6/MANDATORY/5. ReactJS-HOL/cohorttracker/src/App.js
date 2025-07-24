import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    {
      name: 'React Basics',
      trainer: 'John Doe',
      status: 'ongoing',
      startDate: '2025-07-01',
      endDate: '2025-07-31',
    },
    {
      name: 'Advanced Node.js',
      trainer: 'Jane Smith',
      status: 'completed',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
    },
  ];

  return (
    <div>
      <h2>My Academy Dashboard</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;

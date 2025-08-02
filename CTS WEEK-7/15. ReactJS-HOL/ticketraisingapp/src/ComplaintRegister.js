import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [complaintText, setComplaintText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (employeeName.trim() === '' || complaintText.trim() === '') {
      alert('Please fill in both fields.');
      return;
    }

    const referenceNumber = 'REF' + Math.floor(Math.random() * 1000000);
    alert(`Complaint submitted successfully!\nReference Number: ${referenceNumber}`);

    // Reset form
    setEmployeeName('');
    setComplaintText('');
  };

  return (
    <div style={{ padding: '30px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Raise a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label><br />
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          />
        </div>
        <div>
          <label>Complaint:</label><br />
          <textarea
            value={complaintText}
            onChange={(e) => setComplaintText(e.target.value)}
            required
            rows={5}
            style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintRegister;

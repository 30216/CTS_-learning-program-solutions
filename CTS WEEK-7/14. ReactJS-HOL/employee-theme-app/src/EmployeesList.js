import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeesList = () => {
  const employees = [
    { id: 1, name: "UJWALA", role: "Frontend Developer" },
    { id: 2, name: "SRI", role: "Backend Developer" },
  ];

  return (
    <div>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeesList;

import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";


function Emp(employee) {
  return (
    <div>
      <p>
        <label>Emp Name: {employee.name}</label>
      </p>
      <p>
        <label>Emp Salary:{employee.job}</label>
      </p>
    </div>
  );
}
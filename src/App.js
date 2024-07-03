import React, { useState } from 'react';

import EmployeesList from './components/EmployeeList/EmployeeList';
import NewEmployee from './components/NewEmployee/NewEmployee';
import Navbar from './components/Navbar/Navbar';

import './App.css';

const App = () => {
  const [EmployeeList, setEmployeeList] = useState([
    { id: 'cg1', name: 'Mochammad Faris', job: 'Staff IT Developer' }
  ]);

  // function add data to array
  const addNewEmployeeHandler = newEmployee => {
    setEmployeeList(prevEmployeeList => prevEmployeeList.concat(newEmployee));
  };

  // function edit data to array
  const editEmployeeHandler = (id, updatedEmployee) => {
    setEmployeeList(prevEmployeeList => prevEmployeeList.map(employee => employee.id === id ? updatedEmployee : employee));
  };

  // function delete data to array
  const deleteEmployeeHandler = employeeId => {
    setEmployeeList(prevEmployeeList => prevEmployeeList.filter(employee => employee.id !== employeeId));
  };

  return (
    <>
      <Navbar />
      <NewEmployee onAddEmployee={addNewEmployeeHandler} />
      <EmployeesList employee={EmployeeList} onDelete={deleteEmployeeHandler} onUpdate={editEmployeeHandler}/>
    </>
  );
};

export default App;

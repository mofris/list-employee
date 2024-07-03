import React, { useState } from 'react';
import Swal from 'sweetalert2';

const NewEmployee = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredJob, setEnteredJob] = useState('');

  const addEmployeeHandler = event => {
    event.preventDefault();

    if(enteredName === '' || enteredJob === ''){
      Swal.fire({
        title: 'Warning!',
        text: 'Make sure there are no empty inputs',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    } else {
      const newEmployee = {
        id: Math.random().toString(),
        name: enteredName,
        job: enteredJob
      };
  
      setEnteredName('');
      setEnteredJob('');
  
      props.onAddEmployee(newEmployee);

      Swal.fire({
        title: 'Success!',
        text: 'Employee added successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  };

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  
  const jobChangeHandler = event => {
    setEnteredJob(event.target.value);
  };

  return (
    <form className="mt-5" onSubmit={addEmployeeHandler}>
      <div className="input-group mb-3 container">
        <input type="text" className="form-control" id="basic-url" placeholder='Enter Name' aria-describedby="basic-addon3" value={enteredName} onChange={nameChangeHandler} />
        <input type="text" className="form-control" id="basic-url" placeholder='Enter Job' aria-describedby="basic-addon3" value={enteredJob} onChange={jobChangeHandler} />
        <button type="submit" className="btn btn-primary">
          <span className="fas fa-plus"></span>
          Add Employee
        </button>
      </div>
    </form>
  );
};

export default NewEmployee;


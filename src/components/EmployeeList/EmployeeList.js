import React from 'react';
import Swal from 'sweetalert2';

import './EmployeeList.css';

const EmployeeList = props => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this employee data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        props.onDelete(id);
        Swal.fire({
          title: "Success!",
          text: "The employee has been deleted!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "The employee data is safe!",
          icon: "error",
        });
      }
    });
  };

  const handleEdit = (id) => {
    const employee = props.employee.find(data => data.id === id);
    if (employee) {
      Swal.fire({
        title: "Update Employee",
        html: `
          <input id="name" class="swal2-input" placeholder="Name" value="${employee.name}">
          <input id="job" class="swal2-input" placeholder="Job" value="${employee.job}">
        `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('name').value,
            document.getElementById('job').value
          ];
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const updatedEmployee = {
            ...employee,
            name: result.value[0],
            job: result.value[1]
          };
          props.onUpdate(id, updatedEmployee);
          Swal.fire({
            title: "Success!",
            text: "Employee data has been updated!",
            icon: "success",
          });
        }
      });
    }
  };

  return (
    <div className='container'>
      <ul className="employee-list">
        {props.employee.map(data => {
          return (
            <li key={data.id} className="d-flex justify-content-between align-items-center">
              <div>
                <h3>{data.name}</h3>
                <h6>{data.job}</h6>
              </div>
              <div>
                <button className='btn btn-primary m-2' onClick={() => handleEdit(data.id)}>Edit</button>
                <button className='btn btn-danger' onClick={() => handleDelete(data.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EmployeeList;

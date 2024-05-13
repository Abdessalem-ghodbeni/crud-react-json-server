import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EmpListing() {
  const [ListeEmploye, setListeEmploye] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/employee`)
      .then((response) => {
        console.log(response);
        setListeEmploye(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("somthing was warrning");
      });
  }, [ListeEmploye]);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/employee/${id}`)
      .then((res) => {
        alert("deleted successfully");
      })
      .catch((error) => {
        findAllInRenderedTree("somthing was warrning");
      });
  };
  return (
    <>
      <Link to={"/employee/create"}>
        <button className="btn btn-primary">Ajouter employé</button>
      </Link>
      <table className=" table table-info">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ListeEmploye?.map((emp) => (
            <tr key={emp.id}>
              <th scope="row">{emp.id}</th>
              <td>{emp.name}</td>
              <td>{emp.phone}</td>
              <td> {emp.email}</td>
              <td>
                {" "}
                <div className="d-flex">
                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => handleDelete(emp.id)}
                  >
                    {" "}
                    Delete
                  </button>
                  <Link to={`/employee/detail/${emp.id}`}>
                    {" "}
                    <button className="btn btn-info mx-3"> details</button>
                  </Link>
                  <Link to={`/employee/edit/${emp.id}`}>
                    <button className="btn btn-info mx-3"> Update</button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EmpListing;

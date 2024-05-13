import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EmpDetail() {
  const { empid } = useParams();
  const [employe, setEmploye] = useState({});
  useEffect(() => {
    console.log(empid);
    axios
      .get(`http://localhost:8000/employee/${empid}`)
      .then((response) => {
        setEmploye(response.data);
      })
      .catch((error) => {
        alert("somthing was warrning");
      });
  }, [empid]);
  return (
    <>
      <div className="container p-2 mt-5">
        <dic className="card p-3 mt-5">
          <strong>{employe.name}</strong>
          <strong>{employe.email}</strong>
          <strong>{employe.id}</strong>
          <strong>{employe.phone}</strong>
        </dic>
      </div>
    </>
  );
}

export default EmpDetail;

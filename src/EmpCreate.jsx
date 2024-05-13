import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmpCreate() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  const handlesubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/employee/", { name, phone, email })
      .then(() => {
        alert("employe ajouté avec success");
        navigate("/");
      })
      .catch((error) => {
        alert("somthing was warrning");
      });
  };

  return (
    <>
      <div className="container p-2 mt-5">
        <div className="card pt-3 mt-5">
          <form onSubmit={handlesubmit}>
            <div>
              <div className="mb-3 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  phone
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="inputPassword"
                    name="name"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <button className="btn btn-success">Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmpCreate;

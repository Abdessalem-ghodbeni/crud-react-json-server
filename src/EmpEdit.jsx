import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmpEdit() {
  const { empid } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(phone, email);
    axios
      .get(`http://localhost:8000/employee/${empid}`)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      })
      .catch((error) => {
        alert("somthing was warrning");
      });
  }, [empid]);

  const handleupdateSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/employee/${empid}`, { name, email, phone })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        alert("somthting was warrning");
      });
  };
  return (
    <>
      <div className="container p-2 mt-5">
        <div className="card pt-3 mt-5">
          <form onSubmit={handleupdateSubmit}>
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
                    value={email}
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
                    value={name}
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
                    value={phone}
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

export default EmpEdit;

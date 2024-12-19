import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./home.css";
const bck = () => {
  const [employ, setemploy] = useState([]);
  const [useremploy, addemploy] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  function addlist() {
    setemploy((prev) => {
      const upt = [...prev, useremploy];
      return upt;
    });

    addemploy({
      id: uuidv4(),
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    console.log(employ);
  }
  function empolyfield(e) {
    const { name, value } = e.target;
    addemploy((curinfo) => {
      return { ...curinfo, [name]: value };
    });
    console.log(useremploy);
  }
  function uedit(e) {
    addemploy(e);
  }
  function udelete(e) {
    console.log(e);
  }
  return (
    <>
      <section className="homebannersecn">
        <input
          type="text"
          name="name"
          value={useremploy.name}
          placeholder="Name"
          onChange={empolyfield}
        />
        <br></br>
        <input
          type="text"
          name="email"
          value={useremploy.email}
          placeholder="Email"
          onChange={empolyfield}
        />
        <br></br>
        <input
          type="text"
          name="phone"
          value={useremploy.phone}
          placeholder="Phone"
          onChange={empolyfield}
        />
        <br></br>
        <input
          type="text"
          name="address"
          value={useremploy.address}
          placeholder="Address"
          onChange={empolyfield}
        />
        <br></br>
        <button onClick={addlist}>Submit</button>
      </section>
      <div>
        <h3>Employee List:</h3>
        <ul>
          {employ.map((emp, index) => (
            <li key={emp.id}>
              {emp.name} - {emp.email} - {emp.phone} - {emp.address}
              <button onClick={() => uedit(emp)}>Edit</button>
              <button onClick={() => udelete(emp.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default bck;

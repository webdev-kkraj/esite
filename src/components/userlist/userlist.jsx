import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./userlist.css";

const Userlist = ({ updateuser, deleteuser }) => {
  const employs = useSelector((state) => state.empstore.employees);

  return (
    <>
      <div className="container">
        <table className="table table-hover">
          <thead className="table-dark ">
            <tr>
              <td className="w-5">S.No</td>
              <td className="w-15">Name</td>
              <td className="w-15">Email</td>
              <td className="w-10">Phone</td>
              <td className="w-25">Address</td>
              <td className="w-35">Actions</td>
            </tr>
          </thead>
          <tbody>
            {employs.map((vlu, idx) => (
              <tr key={vlu.empid}>
                <td>{idx + 1}</td>
                <td>{vlu.empname}</td>
                <td>{vlu.empemail}</td>
                <td>{vlu.empphone}</td>
                <td>{vlu.empaddress}</td>
                <td className="text-center">
                  <button
                    onClick={() => updateuser(vlu)}
                    className="btn btn-success me-2"
                  >
                    <i className="bi bi-pencil-square me-2"></i>Edit
                  </button>
                  <button
                    onClick={() => deleteuser(vlu.empid)}
                    className="btn btn-danger"
                  >
                    <i className="bi bi-archive me-2"></i>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Userlist;

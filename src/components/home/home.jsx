import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addemployeeuser,
  updateemployeeuser,
  deleteemployeeuser,
} from "../../slices/employeeslice";
import "./home.css";
import Userlist from "../userlist/userlist";
import swal from "sweetalert";

const Home = () => {
  const dispatch = useDispatch();
  const [isedit, setisedit] = useState(false);
  const [singleuser, setsingleuser] = useState({
    empid: uuidv4(),
    empname: "",
    empemail: "",
    empphone: "",
    empaddress: "",
  });
  //const [users, setusers] = useState([]);
  const addemployee = (e) => {
    e.preventDefault();
    if (
      singleuser.empname == "" ||
      singleuser.empemail == "" ||
      singleuser.empphone == "" ||
      singleuser.empaddress == ""
    ) {
      swal("Oops!", "Please enter all fields values!", "error");
      return;
    }
    if (singleuser) dispatch(addemployeeuser(singleuser));
    //setusers((prev) => [...prev, singleuser]);
    setsingleuser({
      empid: uuidv4(),
      empname: "",
      empemail: "",
      empphone: "",
      empaddress: "",
    });
  };
  function setinputvalue(e) {
    const { name, value } = e.target;
    const stvalue = (prev) => {
      return { ...prev, [name]: value };
    };
    setsingleuser(stvalue);
  }
  function updateemployee(e) {
    e.preventDefault();
    dispatch(updateemployeeuser(singleuser));
    setsingleuser({
      empid: uuidv4(),
      empname: "",
      empemail: "",
      empphone: "",
      empaddress: "",
    });
    setisedit(false);
  }
  function uupdateuser(emp) {
    setisedit(true);
    setsingleuser(emp);
  }
  function ddeleteuser(emp) {
    //alert(emp);
    //return;
    swal({
      title: "Are you sure?",
      text: "You want to delete this employee ?",
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancel",
          value: null,
          visible: true,
          className: "btn btn-danger",
          closeModal: true,
        },
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-success",
          closeModal: false,
        },
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteemployeeuser(emp));
        swal("Deleted!", "Your employee has been deleted!", "success");
      }
    });
  }

  return (
    <>
      <section>
        <div className="empmsecn">
          <h2 className="text-center mb-5">Employee Management</h2>
          <form>
            <div className="row">
              <div className="col-5">
                <i className="bi bi-people me-2"></i>Name
              </div>
              <div className="col-7">
                <input
                  type="text"
                  name="empname"
                  value={singleuser.empname}
                  onChange={setinputvalue}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <i className="bi bi-envelope-at me-2"></i>Email
              </div>
              <div className="col-7">
                <input
                  type="email"
                  name="empemail"
                  value={singleuser.empemail}
                  onChange={setinputvalue}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <i className="bi bi-telephone me-2"></i>Phone
              </div>
              <div className="col-7">
                <input
                  type="text"
                  name="empphone"
                  value={singleuser.empphone}
                  onChange={setinputvalue}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-5">
                <i className="bi bi-house-add me-2"></i>Address
              </div>
              <div className="col-7">
                <textarea
                  name="empaddress"
                  value={singleuser.empaddress}
                  onChange={setinputvalue}
                  rows="4"
                  cols="30"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-5"></div>
              <div className="col-7">
                {!isedit && (
                  <button onClick={addemployee}>
                    <i className="bi bi-upload me-2"></i>Sumbit
                  </button>
                )}
                {isedit && (
                  <button onClick={updateemployee}>
                    <i className="bi bi-upload me-2"></i>Update
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="container mt-5">
          <div className="empgridlist">
            <Userlist updateuser={uupdateuser} deleteuser={ddeleteuser} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

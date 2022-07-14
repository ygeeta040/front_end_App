import React, { useEffect, useState } from "react";
import axios from "axios";
// import '../FORM/FormOne.css';
import { Link } from "react-router-dom";
import Navigations from "../Layout/Navigations";
const Homes = () => { 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");

    setUsers(result.data);
  };

  const deletUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };

  return (
    <div>
      <Navigations />
      <div className="container">
        Homes
        <div className="container-fluid">
          <table className="table w-100">
            <thead>
              <tr className="bg-dark text-white">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Emails</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row"> {index + 1} </th>
                  <td> {user.name} </td>
                  <td> {user.username} </td>
                  <td> {user.email} </td>

                  <td>
                    <Link
                      className="btn btn-primary"
                      to={`/EditUsers/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link className="btn btn-primary" to="/addusers">
                      Add
                    </Link>
                    <Link
                      className="btn btn-primary"
                      
                      onClick={() => (deletUser)}
                    >
                      delete User
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homes;

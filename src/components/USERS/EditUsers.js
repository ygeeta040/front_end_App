import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUsers = () => {

  let navigate =useNavigate();
  const { id } = useParams();


  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });



  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    navigate("/homes");
  };


  useEffect(()=>{
    loadUser();
  },[]);

  const loadUser = async()=>{
    const result=await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  }


  return (
    <div className="container">
    <div>
      <h2 className="text-center mb-4">Add a User</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
           placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
           placeholder="Enter your username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
           placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
          <div className="form-group">
            <input
              type="text"
              className=" form-control form-control-lg"
             placeholder="Enter your phone"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
             placeholder="Enter your website"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <button className="btn btn-primary btn-block">Edit users</button>
      </form>
    </div>
  </div>
  )
}

export default EditUsers;
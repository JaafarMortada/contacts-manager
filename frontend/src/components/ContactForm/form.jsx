import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
const AddContact = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    latitude: "",
    longitude: ""
  });

  const handleDataChange2 = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    
  };

  const handleSubmit2 = async () => {
    if (
      data.name &&
      data.phone_number &&
      data.latitude &&
      data.longitude
    ) {
      try {
        console.log(data)
        const response = await axios.post(
          "http://127.0.0.1:8000/api/add_update_contact", data
          // ,{
          //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          //   }
        );
        const new_id = response.data.contact.id;
        if (new_id) {
          // navigate("/home");
          navigate("/");
        } else if (response.data.contact === "failed"){
          const add_btn = document.getElementById("add-btn")
          add_btn.innerHTML = 'Failed'
          add_btn.style.color = 'rgb(228, 73, 73)'
          setTimeout(() => { 
            add_btn.innerHTML = 'Add Contact' 
            add_btn.style.color = 'rgb(48, 48, 48)'
          }, 3000)
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="form form-add">
        <div className="logo">
          <span className="title">Add new Contact</span>
        </div>
        <div className="input-with-label">
          <label>Enter the name:</label>
          <input
            name="name"
            type="text"
            placeholder="Enter the name"
            value={data.name}
            onChange={handleDataChange2}
          />
        </div>
        <div className="input-with-label">
          <label>Enter the phone number:</label>
          <input
            name="phone_number"
            type="text"
            placeholder="Enter the phone number"
            value={data.phone_number}
            onChange={handleDataChange2}
          />
        </div>
        <div className="input-with-label">
          <label>Enter the latitude:</label>
          <input
            name="latitude"
            type="text"
            placeholder="Enter the latitude"
            value={data.latitude}
            onChange={handleDataChange2}
          />
        </div>
        <div className="input-with-label">
          <label>Enter the longitude:</label>
          <input
            name="longitude"
            type="text"
            placeholder="Enter the longitude:"
            value={data.longitude}
            onChange={handleDataChange2}
          />
        </div>
        <div className="btn-link">
          <button
            type="button"
            className="back-btn"
            id="back-btn"
            onClick={ () => {
              navigate('/')
            }
            }
          >
            Back Home
          </button>
          <button
            type="button"
            className="submit-btn"
            id="add-btn"
            onClick={handleSubmit2}
          >
            Add Contact
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddContact;

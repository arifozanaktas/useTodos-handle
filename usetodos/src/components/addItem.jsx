import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../api/axiosInstance';

const AddItem = () => {

const [formData, setformdata] = useState({})

const handleChange = (e) => {

    setformdata({
        ...formData,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    axiosInstance.post("products", formData)
        .then(res => {
            navigate("products")
        })
}

const navigate = useNavigate()





  return (
    <div className="form-container">
      <form className="simple-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="input1">Name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="input2">Units In Stock</label>
          <input type="text" name="unitsInStock" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="input3">Unit Price</label>
          <input type="text" name="unitPrice" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="input4">Quantity Per Unit</label>
          <input type="text" name="quantityPerUnit" onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;

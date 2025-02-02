import React, { useState } from 'react';

const ProductForm = ({ onCreateProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateProduct({ name, price, description });
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <div className="card mb-5">
      <div className="card-body">
        <h2 className="card-title">Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
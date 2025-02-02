import React from 'react';

const Product = ({ product, onUpdateProduct, onDeleteProduct }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState(product.name);
  const [price, setPrice] = React.useState(product.price);
  const [description, setDescription] = React.useState(product.description);

  const handleUpdate = () => {
    onUpdateProduct({ id: product.id, name, price, description });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteProduct(product.id);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <form>
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
            <button onClick={handleUpdate} className="btn btn-primary">Update</button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Cancel</button>
          </form>
        ) : (
          <div>
            <h2 className="card-title">{product.name}</h2>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">{product.description}</p>
            <button onClick={() => setIsEditing(true)} className="btn btn-primary">Edit</button>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
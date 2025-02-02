import React, { useState, useEffect } from 'react';
import Product from './Product';
import ProductForm from './ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const onCreateProduct = (newProduct) => {
    fetch('http://localhost:8000/api/products/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => setProducts([...products, data]));
  };

  const onUpdateProduct = (updatedProduct) => {
    fetch(`http://localhost:8000/api/products/${updatedProduct.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => response.json())
      .then(data => {
        const updatedProducts = products.map(product => product.id === data.id ? data : product);
        setProducts(updatedProducts);
      });
  };

  const onDeleteProduct = (productId) => {
    fetch(`http://localhost:8000/api/products/${productId}/`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Product List</h1>
      <ProductForm onCreateProduct={onCreateProduct} />
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <Product product={product} onUpdateProduct={onUpdateProduct} onDeleteProduct={onDeleteProduct} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
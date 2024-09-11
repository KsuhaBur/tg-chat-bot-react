import React from 'react';
import './ProductsPage.css';
import Header from '../../components/Header/Header';
import ProductsList from '../../components/ProductsList/ProductsList';

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <ProductsList />
    </div>
  )
}

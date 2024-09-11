import React, { useEffect } from 'react';
import './App.css';
import ProductsPage from './pages/ProductsPage/ProductsPage';
const tg =  window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      <ProductsPage />
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
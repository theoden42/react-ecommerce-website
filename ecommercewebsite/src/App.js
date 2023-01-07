import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/products/:id' element={<ProductDetails/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

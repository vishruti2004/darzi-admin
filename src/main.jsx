import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import store,{ persistor } from './app/store.js';
import { Provider } from 'react-redux';
import Tailor from './components/Tailor.jsx';
import Customer from './components/Customer.jsx';
import Employee from './components/Employee.jsx';
import Inventory from './components/Inventory.jsx';
import Order from './components/Order.jsx';
import Tailor_data from './components/Tailor_data.jsx';
import Order_data from './components/Order_data.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="tailor" element={<Tailor />} />
            <Route path="customer" element={<Customer />} />
            <Route path="employee" element={<Employee />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="order" element={<Order />} />
            <Route path="/tailor/tailor_data/:id" element={<Tailor_data />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path="orderdata" element={<Order_data />} />

        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);

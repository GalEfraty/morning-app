import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import LoginPage from './auth/loginPage/LoginPage';
import Navbar from './layout/navbar/Navbar';
import WelcomePage from './welcome/WelcomePage';
import AccountPage from './account/AccountPage';
import accountStore from '../stores/account.store';
import NotFoundPage from './errorPages/NotFoundPage';

import '../styles/app.scss';

function PrivateRoute({ element }) {
  return accountStore.account ? element : <Navigate to={'/login'} />;
}

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Navigate to={'/account'} />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='welcome' element={<PrivateRoute element={<WelcomePage />} />} />
          <Route path='account' element={<PrivateRoute element={<AccountPage />} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

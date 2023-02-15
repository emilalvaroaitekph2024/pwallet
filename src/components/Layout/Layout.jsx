// import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';
import { Header } from 'components/Header/Header';
import { DashBoard } from 'components/DashBoard/DashBoard';
// import { Login } from 'pages/LoginPage/LoginPage';
// import { Registration } from 'pages/RegistrationsPage/RegistrationsPage';

export const Layout = () => {
  return (
    <>
      <header className="Header">
        <Header />
      </header>
      <main className="main">
        <DashBoard />
        <Outlet />
      </main>
    </>
  );
};

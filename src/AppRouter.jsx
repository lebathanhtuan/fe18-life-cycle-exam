import {
  Router,
  Switch,
} from "react-router-dom";

import history from './utils/history';

import DefaultLayout from './layouts/DefaultLayout';
import AdminLayout from './layouts/AdminLayout';
import FullLayout from './layouts/FullLayout';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import AboutPage from './pages/About';
import ProductDetailPage from './pages/ProductDetail';

import DashboardPage from './pages/admin/Dashboard';

import NotFoundPage from './pages/NotFound';

import './App.css';
import 'antd/dist/antd.css';

function AppRouter(props) {
  return (
    <Router history={history}>
      <Switch>
        <DefaultLayout exact path="/" component={HomePage} />
        <DefaultLayout exact path="/about" component={AboutPage} />
        <DefaultLayout exact path="/product/:id" component={ProductDetailPage} />
      
        <AdminLayout exact path="/admin" component={DashboardPage} />

        <FullLayout exact path="/login" component={LoginPage} />
        <FullLayout exact path="/register" component={RegisterPage} />
        <FullLayout component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;

import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// imports admin
import Dashboard from './pages/admin/dashboard';
import Product from './pages/admin/product';
import EditProduct from './pages/admin/product/edit.product';
import RegisterProduct from './pages/admin/product/register.product';
import Users from './pages/admin/users';
import EditUsers from './pages/admin/users/edit.users';
import RegisterUsers from './pages/admin/users/register.users';

// imports client
import Home from './pages/client/home';
import ProductDetails from './pages/client/product/products.details';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* route client */}
                <Route path='/' exact component={Home} />
                <Route path='/product/:idProduct' exact component={ProductDetails} />

                {/*route admin */}
                <Route path='/admin' exact component={Dashboard} />
                <Route path='/admin/product' exact component={Product} />
                <Route path='/admin/product/register' exact component={RegisterProduct} />
                <Route path='/admin/product/edit/:idProduct' exact component={EditProduct} />

                <Route path='/admin/users' exact component={Users} />
                <Route path='/admin/users/register' exact component={RegisterUsers} />
                <Route path='/admin/users/edit/:idProduct' exact component={EditUsers} />

            </Switch>
        </BrowserRouter>
    )
}
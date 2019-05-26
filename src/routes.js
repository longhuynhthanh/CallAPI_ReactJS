import React from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        main: ({history}) => <ProductsPage history = {history} />
    },
    {
        path: '/add-product',
        exact: false,
        main: ({history}) => <AddProductPage history = {history} />
    }
];

export default routes;
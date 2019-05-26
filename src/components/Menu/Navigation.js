import React from 'react';
import CustomMenuLink from '../../utils/CustomMenuLink';
import {Link} from 'react-router-dom'
const Menu = [
    {
        to: '/',
        exact: true,
        label: 'Home'
    },
    {
        to: '/products',
        exact: false,
        label: 'Products'
    },
    {
        to: '/add-product',
        exact: false,
        label: 'Add Product'
    }
];
class Navigation extends React.Component {
    render() {
        const elm = Menu.map((link, index) => {
            return (
                <CustomMenuLink
                    key = {index}
                    to = {link.to}
                    activeOnlyWhenExact = {link.exact}
                    label = {link.label}
                />
            );
        });
        return (
            <header className="App-header">
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <Link to="/" className="navbar-brand">CALL API</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {elm}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navigation;

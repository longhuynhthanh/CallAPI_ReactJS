import React from 'react';
import ProductsContainer from '../containers/Products/ProductsContainer';
class ProductsPage extends React.Component {
    render() {
        const {history} = this.props;
        return (
            <ProductsContainer history = {history} />
        );
    }
}

export default ProductsPage;

import React from 'react';
import ProductContainer from '../../containers/Product/ProductContainer';
class Products extends React.Component {
    componentDidMount(){
        this.props.FetchAllProductsRequest();
    }
    componentDidUpdate(){
        this.props.FetchAllProductsRequest();
    }
    render() {
        const {products, history} = this.props;
        
        const elm = products.map((product, index) => {
            return (
                <ProductContainer 
                    key = {index}
                    index = {index}
                    product = {product}
                    history = {history}
                />
            );
        });
        return (
            <div className="container">
                <h2>All Products</h2>
                <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {elm}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Products;

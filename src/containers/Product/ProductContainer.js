import React from 'react';
import Product from '../../components/Product/Product';
import { connect } from 'react-redux';
import { DeleteProductRequest, SelectedItem } from '../../actions/index';
class ProductContainer extends React.Component {
    render() {
        const { product, index, DeleteProductRequest, SelectedItem, history } = this.props;
        return (
            <Product
                index={index}
                product={product}
                DeleteProductRequest={DeleteProductRequest}
                SelectedItem={SelectedItem}
                history = {history}
            />
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        DeleteProductRequest: (id) => {
            dispatch(DeleteProductRequest(id));
        }, 
        SelectedItem: (product) => {
            dispatch(SelectedItem(product));
        }
    };
}

export default connect(null, mapDispatchToProps)(ProductContainer);
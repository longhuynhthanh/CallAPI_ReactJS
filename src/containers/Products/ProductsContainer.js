import React from 'react';
import Products from '../../components/Products/Products';
import {connect} from 'react-redux';
import {FetchAllProductsRequest, Null_SelectedItem} from '../../actions/index';
class ProductsContainer extends React.Component {
    componentDidMount(){
        this.props.Null_SelectedItem();
    }
    render() {
        const {products, FetchAllProductsRequest, history} = this.props;
        return (
            <Products
                products = {products}
                FetchAllProductsRequest = {FetchAllProductsRequest}
                history = {history}
             />
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        FetchAllProductsRequest: () => {
            dispatch(FetchAllProductsRequest());
        },
        Null_SelectedItem: () => {
            dispatch(Null_SelectedItem());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

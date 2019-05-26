import React from 'react';
import AddProduct from '../../components/Product/AddProduct';
import { AddProductRequest, EditProductRequest } from '../../actions/index';
import { connect } from 'react-redux';
class AddProductContainer extends React.Component {
    render() {
        const { AddProductRequest, SelectedItem, history, EditProductRequest } = this.props;
        return (
            <AddProduct
                AddProductRequest={AddProductRequest}
                SelectedItem={SelectedItem}
                history = {history}
                EditProductRequest = {EditProductRequest}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        SelectedItem: state.SelectedItem
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        AddProductRequest: (product) => {
            dispatch(AddProductRequest(product));
        },
        EditProductRequest: (product) => {
            dispatch(EditProductRequest(product));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);
import React from 'react';
import AddProductContainer from '../containers/Product/AddProductContainer';
class AddProductPage extends React.Component {
    render() {
        const {history} = this.props;
        return (
            <AddProductContainer history = {history}  />
        );
    }
}

export default AddProductPage;

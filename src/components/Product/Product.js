import React from 'react';
class Product extends React.Component {
    onDelete = () => {
        const id = this.props.product.id;
        this.props.DeleteProductRequest(id);
    }
    onEdit = () => {
        this.props.SelectedItem(this.props.product);
        this.props.history.push('/add-product');
    }
    render() {
        const { product, index } = this.props;
        return (
            <tr>
                <td className="text-center align-middle">{index + 1}</td>
                <td className="align-middle"><img src={product.imageURL} className="img-thumbnail" alt="Cinque Terre" width="300" height="150" /></td>
                <td className="align-middle">{product.name}</td>
                <td className="align-middle">{product.price}</td>
                <td className="align-middle">{product.status ? <span className="badge badge-success">Còn Hàng</span> : <span className="badge badge-danger">Hết Hàng</span>}</td>
                <td className="align-middle">
                    <button type="button" className="btn btn-warning" onClick={this.onEdit}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Product;
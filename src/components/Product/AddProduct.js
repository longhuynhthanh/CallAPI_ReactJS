import React from 'react';
class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            imageURL: '',
            name: '',
            price: 0,
            status: false
        };
    }
    componentWillMount() {
        const { SelectedItem } = this.props;
        if (SelectedItem) {
            this.setState({
                id: SelectedItem.id,
                imageURL: SelectedItem.imageURL,
                name: SelectedItem.name,
                price: SelectedItem.price,
                status: SelectedItem.status
            });
        }
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            const { SelectedItem } = nextProps;
            if (SelectedItem) {
                this.setState({
                    id: SelectedItem.id,
                    imageURL: SelectedItem.imageURL,
                    name: SelectedItem.name,
                    price: SelectedItem.price,
                    status: SelectedItem.status
                });
            }
        }
    };
    handleChange = event => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        if (name === 'status') {
            value = event.target.checked;
        }
        this.setState({
            [name]: value
        });
    };
    onSave = () => {
        if(this.state.id){
            const product = {
                id: this.state.id,
                imageURL: this.state.imageURL,
                name: this.state.name,
                price: this.state.price,
                status: this.state.status
            };
            this.props.EditProductRequest(product);
        }else{
            const product = {
                imageURL: this.state.imageURL,
                name: this.state.name,
                price: this.state.price,
                status: this.state.status
            };
            this.props.AddProductRequest(product);
        }
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="container">
                <form className="col-12">
                    <div className="form-group col-md-6 col-xs-12">
                        <label className="col-sm-1-12 col-form-label">Image URL</label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" value={this.state.imageURL} name="imageURL" placeholder="Image URL" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group col-md-6 col-xs-12">
                        <label className="col-sm-1-12 col-form-label">Name</label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" value={this.state.name} name="name" placeholder="Name Product" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group col-md-6 col-xs-12">
                        <label className="col-sm-1-12 col-form-label">Price</label>
                        <div className="col-sm-1-12">
                            <input type="number" className="form-control" value={this.state.price} name="price" placeholder="Price Of Product" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group col-md-6 col-xs-12">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="status" checked={this.state.status} onChange={this.handleChange} /> Status
                            </label>
                        </div>
                    </div>
                    <div className="form-group col-6">
                        <button type="button" className="btn btn-primary" onClick={this.onSave}>Save</button>
                        <button type="button" className="btn btn-warning">Xóa</button>
                    </div>

                </form>
            </div>
            );
        }
    }
    
export default AddProduct;
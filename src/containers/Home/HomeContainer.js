import React from 'react';
import Home from '../../components/Home/Home';
import {connect} from 'react-redux';
import {Null_SelectedItem} from '../../actions/index';
class HomeContainer extends React.Component {
    componentDidMount(){
        this.props.Null_SelectedItem();
    }
    render() {
        return (
            <Home />
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        Null_SelectedItem: () => {
            dispatch(Null_SelectedItem());
        }
    };
}
export default connect(null, mapDispatchToProps)(HomeContainer);

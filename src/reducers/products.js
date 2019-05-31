import * as Type from '../const/type';

const products = [];
const myReducer = (state = products, action) => {
    switch (action.type) {
        case Type.FETCH_ALL_PRODUCTS: {
            state = action.products;
            return [...state];
        }
        case Type.DELETE_PRODUCT: {
            const newState = state.filter(product => product.id !== action.id);
            return [...newState];
        }
        case Type.EDIT_PRODUCT: {
            const index = state.findIndex(product => product.id === action.product.id);
            state[index] = {...state[index], imageURL: action.product.imageURL, name: action.product.name, price: action.product.price, status: action.product.status};
            return [...state];
        }
        default:
            return [...state];
    }
};

export default myReducer;
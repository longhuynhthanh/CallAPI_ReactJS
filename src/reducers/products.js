import * as Type from '../const/type';

const products = [];
const myReducer = (state = products, action) => {
    switch (action.type) {
        case Type.FETCH_ALL_PRODUCTS: {
            state = action.products;
            return [...state];
        }
        default:
            return [...state];
    }
};

export default myReducer;
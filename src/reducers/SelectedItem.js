import * as Type from '../const/type';

const EditProduct = null;

const myReducer = (state = EditProduct, action) => {
    switch (action.type) {
        case Type.SELECTED_ITEM: {
            state = action.product;
            return {...state};
        }
        case Type.NULL_SELECTED_ITEM: {
            return null;
        }
        default: return null;
    }
};

export default myReducer;
import * as Type from '../const/type';
import callAPI from '../utils/callAPI';
//#region Fetch products
export const FetchAllProductsRequest = () => {
    return (dispatch) => {
        return callAPI('GET', 'products', null)
            .then(res => {
                dispatch(FetchAllProducts(res.data));
            });
    }
}

export const FetchAllProducts = (products) => {
    return {
        type: Type.FETCH_ALL_PRODUCTS,
        products
    };
};
//#endregion

//#region Add Product
export const AddProductRequest = (product) => {
    return (dispatch) => {
        return callAPI('POST', 'products', product)
            .then(res => {
                dispatch(AddProduct(product));
            });
    }
}

export const AddProduct = (product) => {
    return {
        type: Type.ADD_PRODUCT,
        product
    };
}
//#endregion

//#region Delete Product
export const DeleteProductRequest = (id) => {
    return dispatch => {
        return callAPI('DELETE', `products/${id}`, null)
            .then(res => {
                dispatch(DeleteProduct(id));
            });
    }
}

export const DeleteProduct = (id) => {
    return {
        type: Type.DELETE_PRODUCT,
        id
    };
}
//#endregion

//#region Selected Item
export const SelectedItem = (product) => {
    return {
        type: Type.SELECTED_ITEM,
        product
    };
};
export const Null_SelectedItem = () => {
    return {
        type: Type.NULL_SELECTED_ITEM
    };
}
//#endregion

//#region Edit Product
export const EditProductRequest = (product) => {
    return dispatch => {
        return callAPI('PUT', `products/${product.id}`, product)
        .then(res => {
            dispatch(EditProduct(product));
        });
    };
};
export const EditProduct = (product) => {
    return {
        type: Type.EDIT_PRODUCT,
        product
    };
}
//#endregion
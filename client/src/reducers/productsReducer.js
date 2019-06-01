import {
  GET_PRODUCTS,
  GET_PRODUCT,
  IS_LOADING,
  CHANGE_CATEGORY
} from '../actions/types';

const initialState = {
  products: [],
  selectedProduct: [],
  loading: true,
  allProducts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
        allProducts: action.products
      };
    //return Object.assign({}, state, { products: action.products });
    case GET_PRODUCT:
      // return Object.assign({}, state, { selectedProduct: action.product });
      return { ...state, selectedProduct: action.product };

    case IS_LOADING:
      return { ...state, loading: action.payload };

    case CHANGE_CATEGORY:
      return {
        ...state,
        products:
          action.category !== 'All'
            ? action.products.filter(
                product => product.category === action.category
              )
            : state.allProducts
      };
    default:
      return state;
  }
}

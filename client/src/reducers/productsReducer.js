import {
  GET_PRODUCTS,
  GET_PRODUCT,
  IS_LOADING,
  CHANGE_CATEGORY,
  SORT_PRODUCTS
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

    case GET_PRODUCT:
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

    case SORT_PRODUCTS:
      const key = action.event.target.dataset.prop;
      const direction = action.event.target.dataset.order;
      const sortedByPrice = state.products
        .concat()
        .sort((a, b) =>
          direction === 'asc'
            ? parseFloat(a[key]) - parseFloat(b[key])
            : parseFloat(b[key]) - parseFloat(a[key])
        );
      const sortedByName = state.products
        .concat()
        .sort(
          direction === 'asc'
            ? (a, b) =>
                a[key].toUpperCase() > b[key].toUpperCase()
                  ? 1
                  : b[key].toUpperCase() > a[key].toUpperCase()
                  ? -1
                  : 0
            : (a, b) =>
                a[key].toUpperCase() > b[key].toUpperCase()
                  ? -1
                  : b[key].toUpperCase() > a[key].toUpperCase()
                  ? 1
                  : 0
        );
      return {
        ...state,
        products: key === 'name' ? sortedByName : sortedByPrice
      };

    default:
      return state;
  }
}

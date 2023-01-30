import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';

// Reducers

import { korbReducer } from './reducers/korbReducers';
import {
  getProductDetailsReducer,
  getProductsReducer,
} from './reducers/productReducers';

const reducerSlice = createSlice({
  name: 'store',
  initialState: {},
  reducers: {
    someAction: function () {},
  },
});

const reducer = combineReducers({
  korb: korbReducer,
  getProducts: getProductsReducer,
  getProductDetailsReducer: getProductDetailsReducer,
});

const store = configureStore({
  reducer: {
    someReducer: reducerSlice.reducer,
    korb: korbReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
  },
});

export default store;

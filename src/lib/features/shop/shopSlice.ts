import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShopState {
  products: Product[];
}

const initialState: ShopState = {
  products: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } = storeSlice.actions;

export default storeSlice.reducer;

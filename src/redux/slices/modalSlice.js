import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  typeModal: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      console.log(action);
      const { payload } = action || {};
      return {
        ...state,
        isModalOpen: true,
        typeModal: payload.typeModal,
      };
    },
    closeModal: (state, action) => {
      return {
        ...state,
        isModalOpen: false,
        typeModal: null,
      };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

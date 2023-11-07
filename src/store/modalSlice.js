import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: {
    showLoginModal: false,
    showSignupModal: false,
  }
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showLogin: (state) => {
      return {
        ...state,
        modals: {
          ...state.modals,
          showLoginModal: !state.modals.showLoginModal,
        }
      };
    },
    showSignup: (state) => {
      return {
        ...state,
        modals: {
          ...state.modals,
          showSignupModal: !state.modals.showSignupModal,
        }
      };
    },
  }
});

export const { showLogin, showSignup } = modalSlice.actions;
export default modalSlice.reducer;

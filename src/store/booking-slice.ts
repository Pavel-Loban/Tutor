import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance } from '../services';


interface BookingInitialState {
  bookId: string,
  customerUserId: number,
  bookingId: number,
  bookingDateOrder: string,
  bookingResponse: boolean,
  bookingReject: boolean,
  loaderBooking: boolean,
}


const initialState: BookingInitialState = {
  bookId: '',
  customerUserId: -1,
  bookingId: 0,
  bookingDateOrder: '',
  bookingResponse: false,
  bookingReject: false,
  loaderBooking: false,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookId: (state, action: PayloadAction<string>) => {
      const newState = state;

      newState.bookId = action.payload;
    },
    setCustomerUserId: (state, action: PayloadAction<number>) => {
      const newState = state;

      newState.customerUserId = action.payload;
    },
    setBookingId: (state, action: PayloadAction<number>) => {
      const newState = state;

      newState.bookingId = action.payload;
    },
    setBookingDateOrder: (state, action: PayloadAction<string>) => {
      const newState = state;

      newState.bookingDateOrder = action.payload;
    },
    setBookingResponse: (state, action: PayloadAction<boolean>) => {
      const newState = state;

      newState.bookingResponse = action.payload;
    },
    setBookingReject: (state, action: PayloadAction<boolean>) => {
      const newState = state;

      newState.bookingReject = action.payload;
    },

    setLoaderBooking: (state, action: PayloadAction<boolean>) => {
      const newState = state;

      newState.loaderBooking = action.payload;
    },

  },
});

export default bookingSlice.reducer;
export const { setBookId, setCustomerUserId, setBookingId, setBookingDateOrder, setBookingResponse, setBookingReject, setLoaderBooking} = bookingSlice.actions;


// export const postRegister = async (payload: Reg) => {
//   const baseUrl = 'https://strapi.cleverland.by/api/auth/local/register';

//   const result = await axios.post(baseUrl, payload);

//   return result.data;
// };
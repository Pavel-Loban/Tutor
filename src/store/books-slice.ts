import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {instance} from '../services'

export const fetchCategories = createAsyncThunk(
  'books/fetchCategories',

  async (urlCategories: string) => {
    const data = await instance.get(urlCategories);

    return data.data;
  }
);

export const fetchBooks = createAsyncThunk(
  'books/fetchBooksStatus',

  async (baseUrl: string) => {
    const data = await instance.get(baseUrl);
    console.log(data)
    return data.data;
  }
);


export enum Status {
  NOTHING = 'nothing',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusCategories {
  NOTHING = 'nothing',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface Histories {
  userId: number;
  id: number;
}
interface Booking {
  customerFirstName: string;
  customerId: number;
  customerLastName: string;
  dateOrder: string;
  id: number;
  order: boolean;
}

interface Image {
  url: string;
}

interface UserComments {
  avatarUrl: string | null,
  commentUserId: number,
  firstName: string,
  lastName: string,
}
interface Comments {
  createdAt: string,
  id: number,
  rating: number,
  text?: string | undefined,
  user: UserComments | null,
}

export interface Book {
  image: Image;
  id: number;
  title: string;
  authors: string[];
  booking: Booking | null;
  issueYear: number;
  delivery: boolean | null;
  categories: string[];
  histories: Histories[] | null;
  rating: number | null;

  // ISBN: string,
  //   authors: string[],
  //   booking: Booking | null,
  //   categories: string[],
  //   comments: Comments[] | null,
  //   cover: string,
  //   delivery: boolean | null,
  //   description: string,
  //   format: string,
  //   id: number,
  //   issueYear: string,
  //   pages: string,
  //   producer: string,
  //   publish: string,
  //   title: string,
  //   weight: string,
}

interface BooksCategories {
  id: number;
  path: string;
  name: string;
}

interface BooksState {
  books: Book[];
  status: Status;
  loading: string;
  statusCategories: StatusCategories;
  booksCategories: BooksCategories[],
  modalCalendar: boolean,
}

const initialState: BooksState = {
  books: [],
  status: Status.NOTHING,
  statusCategories: StatusCategories.NOTHING,
  loading: '',
  booksCategories: [],
  modalCalendar: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<string>) {
      const newState = state;

      newState.loading = action.payload;
    },

    setBooks(state, action: PayloadAction<Book[]>) {
      const newState = state;

      newState.books = action.payload;
    },
    setModalCalendar(state, action: PayloadAction<boolean>) {
      const newState = state;

      newState.modalCalendar = action.payload;
    },

  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      const newState = state;

      newState.status = Status.LOADING;
    });

    builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
      const newState = state;

      newState.books = action.payload;
      newState.status = Status.SUCCESS;
    });

    builder.addCase(fetchBooks.rejected, (state) => {
      const newState = state;

      newState.status = Status.ERROR;
      newState.books = [];
    });





    builder.addCase(fetchCategories.pending, (state) => {
      const newState = state;

      newState.statusCategories = StatusCategories.LOADING;
      newState.booksCategories = [];
    });

    builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<BooksCategories[]>) => {
      const newState = state;

      newState.booksCategories = action.payload;
      newState.statusCategories = StatusCategories.SUCCESS;
    });

    builder.addCase(fetchCategories.rejected, (state) => {
      const newState = state;

      newState.statusCategories = StatusCategories.ERROR;
      newState.booksCategories = [];
    });
  },
});

export const { setLoading, setBooks, setModalCalendar} = booksSlice.actions;

export default booksSlice.reducer;

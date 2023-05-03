import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance } from '../services';

interface Form {
  step1: boolean;
  step2: boolean;
  step3: boolean;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  errorReg: string;
  serverResponse: string;
  errFlow: boolean;
  errAuth: boolean;
  authLoader: boolean;
  idFormStep1: string;
  idFormStep2: string;
  idFormStep3: string;
}
const initialState: Form = {
  step1: true,
  step2: false,
  step3: false,
  userName: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  errorReg: '',
  serverResponse: '',
  errFlow: false,
  errAuth: false,
  authLoader: false,
  idFormStep1: 'register-form',
  idFormStep2: '',
  idFormStep3: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep1(state, action: PayloadAction<boolean>) {
      const newState = state;

      newState.step1 = action.payload;
    },
    setStep2(state, action: PayloadAction<boolean>) {
      const newState = state;

      newState.step2 = action.payload;
    },
    setStep3(state, action: PayloadAction<boolean>) {
      const newState = state;

      newState.step3 = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      const newState = state;

      newState.userName = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      const newState = state;

      newState.password = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      const newState = state;

      newState.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      const newState = state;

      newState.lastName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      const newState = state;

      newState.email = action.payload;
    },
    setPhone(state, action: PayloadAction<string>) {
      const newState = state;

      newState.phone = action.payload;
    },
    setErrorReg(state, action: PayloadAction<string>) {
      const newState = state;

      newState.errorReg = action.payload;
    },
    setServerResponse(state, action: PayloadAction<string>) {
      const newState = state;

      newState.serverResponse = action.payload;
    },
    setErrFlow(state, action: PayloadAction<boolean>) {
      const newState = state;

      newState.errFlow = action.payload;
    },
    setErrAuth(state, action: PayloadAction<boolean>) {
      const newState = state;

      newState.errAuth = action.payload;
    },
    setAuthLoader(state, action: PayloadAction<boolean>) {
      const newState = state;

      newState.authLoader = action.payload;
    },
    setIdFormStep1(state, action: PayloadAction<string>) {
      const newState = state;

      newState.idFormStep1 = action.payload;
    },
    setIdFormStep2(state, action: PayloadAction<string>) {
      const newState = state;

      newState.idFormStep2 = action.payload;
    },
    setIdFormStep3(state, action: PayloadAction<string>) {
      const newState = state;

      newState.idFormStep3 = action.payload;
    },
  },
});

export const {
  setStep1,
  setStep2,
  setStep3,
  setUserName,
  setPassword,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setErrorReg,
  setServerResponse,
  setErrFlow,
  setErrAuth,
  setAuthLoader,
  setIdFormStep1,
  setIdFormStep2,
  setIdFormStep3,
} = formSlice.actions;

export default formSlice.reducer;

interface Reg {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

interface Auth {
  email: string;
  password: string;
  device: string;
}

export const postRegister = async (payload: Reg) => {
  const baseUrl = 'https://strapi.cleverland.by/api/auth/local/register';

  const result = await axios.post(baseUrl, payload);

  return result.data;
};

export const postAuth = async (payload: Auth) => {
  const result = await instance.post('/auth/singin', payload);

  return result.data;
};

interface Email {
  email: string;
}

export const postForgot = async (payload: Email) => {
  const baseUrl = 'https://strapi.cleverland.by/api/auth/forgot-password';

  const result = await axios.post(baseUrl, payload);

  return result.data;
};

interface RenamePass {
  password: string;
  passwordConfirmation: string;
  code: string;
}

export const postRenamePass = async (payload: RenamePass) => {
  const baseUrl = 'https://strapi.cleverland.by/api/auth/reset-password';

  const result = await axios.post(baseUrl, payload);

  return result.data;
};

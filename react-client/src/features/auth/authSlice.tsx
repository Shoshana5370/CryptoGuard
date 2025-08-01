import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types/UserDto';

export interface AuthState {
  user: User | null;
  token: string | null;
  loginLoading: boolean;
  registerLoading: boolean;
  loginError: string | null;
  registerError: string | null;
}

const loadInitialState = (): AuthState => ({
  user: JSON.parse(sessionStorage.getItem('user') || 'null'),
  token: sessionStorage.getItem('token'),
  loginLoading: false,
  registerLoading: false,
  loginError: null,
  registerError: null,
});

const initialState: AuthState = loadInitialState();

const url = import.meta.env.VITE_API_BASE_URL;
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    credentials: { email: string; password: string , captchaToken: string},
    { rejectWithValue }
  ) => {
    try {
      console.log(url);    
      const response = await axios.post(`${url}/api/Auth/login`, credentials);
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('user', JSON.stringify(response.data.user));
      sessionStorage.setItem('userId', response.data.user.id.toString());
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const message =
          err.response?.data?.message ||
          (typeof err.response?.data === 'string' ? err.response.data : null) ||
          'Login failed';
        return rejectWithValue(message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (
    userData: { email: string; password: string; name: string, captchaToken: string ,isAdmin: boolean},
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${url}/api/Auth/register`, userData);
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('user', JSON.stringify(response.data.user));
      sessionStorage.setItem('userId', response.data.user.id.toString());
      return response.data;
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        (typeof err.response?.data === 'string' ? err.response.data : null) ||
        err.message ||
        'Registration failed';
      return rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('userId');
    },
    clearErrors(state) {
      state.loginError = null;
      state.registerError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginLoading = true;
        state.loginError = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ token: string; user: User }>) => {
          state.loginLoading = false;
          state.token = action.payload.token;
          state.user = action.payload.user;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginError = action.payload as string;
      })

      .addCase(registerUser.pending, (state) => {
        state.registerLoading = true;
        state.registerError = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ token: string; user: User }>) => {
          state.registerLoading = false;
          state.token = action.payload.token;
          state.user = action.payload.user;
        }
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerError = action.payload as string;
      });
  },
});

export const { logout, clearErrors } = authSlice.actions;
export default authSlice.reducer;
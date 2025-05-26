import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types/UserDto';
export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | object | null;
}
const initialState: AuthState = {
  user: JSON.parse(sessionStorage.getItem('user') || 'null'),
  token: sessionStorage.getItem('token'),
  loading: false,
  error: null,
};
const url = import.meta.env.VITE_API_URL;
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      console.log(`url`, url);
      const response = await axios.post(`${url}/api/Auth/login`, credentials);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      sessionStorage.setItem("userId", response.data.user.id.toString());
      return response.data;
    } 
    catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: { email: string; password: string; name: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/api/Auth/register`, userData);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("userId", response.data.user.id.toString());
      return response.data;
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Login failed";
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});




export const { logout } = authSlice.actions;
export default authSlice.reducer;

//with recaptcha
// import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { User } from '../../types/UserDto';

// export interface AuthState {
//   user: User | null;
//   token: string | null;
//   loading: boolean;
//   error: string | object | null;
// }

// const initialState: AuthState = {
//   user: JSON.parse(sessionStorage.getItem('user') || 'null'),
//   token: sessionStorage.getItem('token'),
//   loading: false,
//   error: null,
// };

// const url = import.meta.env.VITE_API_BASE_URL;
// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (
//     credentials: { email: string; password: string; captchaToken: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await axios.post(`${url}/api/Auth/login`, credentials);
//       sessionStorage.setItem('token', response.data.token);
//       sessionStorage.setItem('user', JSON.stringify(response.data.user));
//       sessionStorage.setItem('userId', response.data.user.id.toString());
//       return response.data;
//     } catch (err: any) {
//       return rejectWithValue(
//         err.response?.data || 'Login failed. Please check credentials or reCAPTCHA.'
//       );
//     }
//   }
// );

// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async (
//     userData: { email: string; password: string; name: string },
//     { rejectWithValue }
//   ) => {
//     try {      
//       const response = await axios.post(`${url}/api/Auth/register`, userData);
//       sessionStorage.setItem('token', response.data.token);
//       sessionStorage.setItem('userId', response.data.user.id.toString());
//       return response.data;
//     } catch (err: any) {
//       return rejectWithValue(
//         err.response?.data || 'Registration failed. Please try again.'
//       );
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout(state) {
//       state.user = null;
//       state.token = null;
//       sessionStorage.removeItem('token');
//       sessionStorage.removeItem('user');
//       sessionStorage.removeItem('userId');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(
//         loginUser.fulfilled,
//         (state, action: PayloadAction<{ token: string; user: User }>) => {
//           state.loading = false;
//           state.token = action.payload.token;
//           state.user = action.payload.user;
//         }
//       )
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(
//         registerUser.fulfilled,
//         (state, action: PayloadAction<{ token: string; user: User }>) => {
//           state.loading = false;
//           state.token = action.payload.token;
//           state.user = action.payload.user;
//         }
//       )
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;

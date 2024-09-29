import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "../../api/data";

// Define types for the state
interface AuthState {
  userData: any | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface LoginParams {
  username: string;
  password: string;
}

// Define the initial state using the `AuthState` interface
const initialState: AuthState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

// Async thunk for login
export const login = createAsyncThunk<any, LoginParams, { rejectValue: string }>(
  "auth/login",
  async (params, thunkApi) => {
    console.log(params);
    try {
      const response = await API.post("auth/login", params);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message || "An error occurred");
    }
  }
);

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default AuthSlice.reducer;

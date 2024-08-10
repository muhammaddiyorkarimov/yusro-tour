import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, refreshToken } from '../../../service/admin/auth';
import { getAccessToken, getRefreshToken } from '../../../service/admin/tokenService';

export const loginUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await login(credentials.username, credentials.password);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Logout thunk
export const logoutUser = createAsyncThunk('auth/logout', async () => {
    await logout();
});

// Refresh token thunk
export const refreshTokenThunk = createAsyncThunk('auth/refreshToken', async (_, thunkAPI) => {
    const refreshToken = getRefreshToken();
    try {
        const response = await refreshToken(refreshToken);
        return response.access;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const adminAuthSlice = createSlice({
    name: 'adminAuth',
    initialState: {
        user: null,
        isAuthenticated: !!getAccessToken(),
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed. Please try again.';
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(refreshTokenThunk.fulfilled, (state, action) => {
                state.isAuthenticated = true;
            });
    },
});

export default adminAuthSlice.reducer;
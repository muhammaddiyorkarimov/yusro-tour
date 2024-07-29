import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../features/auth/authSlice';
import ArticlesReducer from '../features/alice/articlesSlice'; // Correct path

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    articles: ArticlesReducer,
  },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import typographyReducer from '../features/typographySlice';
import mediaReducer from '../features/mediaSlice';

export const store = configureStore( {
    reducer: {
        typography: typographyReducer,
        media: mediaReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
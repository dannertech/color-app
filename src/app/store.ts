import ColorBoxReducer from './features/ColorBoxSlice';

import { configureStore} from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        colorbox: ColorBoxReducer
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

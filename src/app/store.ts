import ColorBoxReducer from './features/ColorBoxSlice';
import { FavoriteColorReducer } from './features/FavoriteColorSlice';

import { configureStore} from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        colorbox: ColorBoxReducer,
        favoritecolor: FavoriteColorReducer
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

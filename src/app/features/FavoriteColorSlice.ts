import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface FavoriteColorUser {
    name: string,
    color: string
    id: number
}



interface FavoriteColorState {
    data: FavoriteColorUser[]
}

const initialState : FavoriteColorState = {
    data: []
}



const FavoriteColorSlice = createSlice({
    name: "favoritecolor",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<FavoriteColorUser>) => {
            state.data.push(action.payload)
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.data.map((user) => user.id !== action.payload)
        }
    }

});

export const {deleteUser, addUser} = FavoriteColorSlice.actions;
export const FavoriteColorReducer = FavoriteColorSlice.reducer;

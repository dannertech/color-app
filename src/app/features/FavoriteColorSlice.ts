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
            console.log("here")
            state.data.push(action.payload)
            
        },
        deleteUser: (state, action: PayloadAction<number>) => {
        
            const newArray = state.data.filter((x) => x.id !== action.payload)
            state.data = newArray;
        }
    }

});

export const {deleteUser, addUser} = FavoriteColorSlice.actions;
export const FavoriteColorReducer = FavoriteColorSlice.reducer;

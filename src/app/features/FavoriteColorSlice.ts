import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FavoriteColorUser {
    name: string,
    color: string
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
        
    }

})
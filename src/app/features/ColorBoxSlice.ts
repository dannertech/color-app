import React from 'react';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ColorBoxState {
    red: number,
    green: number,
    blue: number
}

const initialState : ColorBoxState = {
    red: 255,
    green: 215,
    blue: 0
}

const ColorBoxSlice = createSlice({
    initialState,
    name: 'color',
    reducers: {
        increaseRed: (state) => {
            state.red += 1;
        },
        increaseGreen: (state) => {
            state.green += 1;
        },
        increaseBlue: (state) => {
            state.blue += 1;
        }
    }
})

export const {increaseRed, increaseGreen, increaseBlue} = ColorBoxSlice.actions;
export default ColorBoxSlice.reducer;
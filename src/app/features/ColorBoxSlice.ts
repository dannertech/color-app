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
            if(state.red === 255){
                console.log("cannot increase red")
                alert("Cannot increase red any more!");
            } else {
                state.red += 1;
            }
            
        },
        increaseGreen: (state) => {
            if(state.green === 255){
                alert("Cannot increase green any more!");
            } else {
                state.green += 1;
            }
            
        },
        increaseBlue: (state) => {
            if(state.blue === 255){
                alert("Cannot increase blue any more!")
            } else {
                state.blue += 1;
            }
            
        },
        decreaseRed: (state) => {
            if(state.red === 0){
                alert("Cannot decrease blue any more!")
            } else {
                state.red -= 1;
            }
        },
        decreaseGreen: (state) => {
            if(state.green === 0){
                alert("Cannot decreease green any more!")
            } else {
                state.green -= 1;
            }
        },
        decreaseBlue: (state) => {
            if(state.blue === 0){
                alert("Cannot decrease blue any more!")
            } else {
                state.blue -= 1;
            }
        }
    }
})

export const {increaseRed, increaseGreen, increaseBlue, decreaseRed, decreaseGreen, decreaseBlue} = ColorBoxSlice.actions;
export default ColorBoxSlice.reducer;
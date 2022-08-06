import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increaseBlue, increaseGreen, increaseRed} from '../features/ColorBoxSlice';
import { RootState } from '../store';




const ColorBox = () => {
    const dispatch = useDispatch()
    const store = useSelector((state: RootState) => state.colorbox)
    console.log(store);
    return(
        <>
        <h1>This is the color box screen</h1>
        <div style={{height: 100, width: 100, backgroundColor: `rgb(${store.red}, ${store.green}, ${store.blue})`}}></div>
        <button onClick={() => dispatch(increaseRed)}>Increase Red</button>
        <button onClick={() => dispatch(increaseGreen)}>Increase Green</button>
        <button onClick={() => dispatch(increaseBlue)}>Increase Blue</button>
        </>
    )
};

export default ColorBox;
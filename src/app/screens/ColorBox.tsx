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
        <div>
        <h1>Increase</h1>
        <button onClick={() => dispatch(increaseRed())}>Increase Red</button>
        <button onClick={() => dispatch(increaseGreen())}>Increase Green</button>
        <button onClick={() => dispatch(increaseBlue())}>Increase Blue</button>
        </div>
        <div>
            <h1>Decrease</h1>
            <button>Decrease Red</button>
            <button>Decrease Green</button>
            <button>Decrease Blue</button>
        </div>
        </>
    )
};

export default ColorBox;
import React from 'react';
import {useSelector} from 'react-redux';
import { RootState } from '../store';

const FavoriteColor = () => {
    const state = useSelector((state: RootState) => state.favoritecolor)
    console.log(state);
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Favorite Color Screen</h1>
        <input type="text" style={{width: '50%'}}></input>
        </div>
    )
};

export default FavoriteColor;
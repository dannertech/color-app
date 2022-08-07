import React from 'react';
import {useSelector} from 'react-redux';
import { RootState } from '../store';

const FavoriteColor = () => {
    const state = useSelector((state: RootState) => state.favoritecolor)
    console.log(state);
    return (
        <h1>Favorite Color Screen</h1>

    )
};

export default FavoriteColor;
import React from 'react';
import {FavoriteColorUser} from '../features/FavoriteColorSlice';

const FavoriteColorCard = ({name, id, color} : FavoriteColorUser) => {
    return(
        <div style={{height: 100, width: 200, backgroundColor: `${color}`}}>
            <h1>{name}</h1>

        </div>
    )
};

export default FavoriteColorCard;
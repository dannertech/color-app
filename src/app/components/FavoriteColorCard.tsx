import React from 'react';
import {FavoriteColorUser} from '../features/FavoriteColorSlice';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser} from '../features/FavoriteColorSlice';

const FavoriteColorCard = ({name, id, color} : FavoriteColorUser) => {
    const dispatch = useDispatch();
    
    return(
        <div style={{height: 100, width: 200, backgroundColor: `${color}`}}>
            <h1 style={{color: 'white'}}>{name}</h1>
            <button onClick={() => dispatch(deleteUser(id))}>
            <img src={require('../icons/icons8-delete-100.png')} alt="Delete" style={{height: 30, width: 30}}/>
            </button>
        </div>
    )
};

export default FavoriteColorCard;
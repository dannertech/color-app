import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { RootState } from '../store';
import FavoriteColorCard from '../components/FavoriteColorCard';

const FavoriteColor = () => {
    const state = useSelector((state: RootState) => state.favoritecolor)

    const [nameInput, setNameInput] = useState('');
    const [colorInput, setColorInput] = useState('');
    console.log(state);
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Favorite Color Screen</h1>
        <label>Name</label>
        <input type="text" style={{width: '50%', border: 3, borderStyle: 'solid'}} title="Name"></input>
        <label style={{marginTop: 50}}>Favorite Color</label>
        <input type="text" style={{width: '50%',border: 3, borderStyle: 'solid'}}></input>
        <input type="submit" value="submit" style={{marginTop: 30}}></input>
        <div>
            <h1>Favorite Colors!</h1>
            {state.data.map((item) => {
                return <FavoriteColorCard name={item.name} id={item.id} color={item.color}/>
            })}
        </div>
        </div>
    )
};

export default FavoriteColor;
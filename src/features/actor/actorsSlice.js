import { createSlice } from '@reduxjs/toolkit';

import keanuPhoto from '../../images/actors/keanu_reeves.jpg'
import carriePhoto from '../../images/actors/carrie-anne_moss.jpg'
import laurencePhoto from '../../images/actors/laurence_fishburne.jpg'
import hugoPhoto from '../../images/actors/hugo_weaving.jpg'

import neoPhoto from '../../images/characters/neo_reloaded_01.jpg'
import trinityPhoto from '../../images/characters/trinity_reloaded_01.jpg'
import morpheusPhoto from '../../images/characters/morpheus_reloaded_01.jpg'
import smithPhoto from '../../images/characters/smith_reloaded_01.jpg'

const initialState = {
    value: [
        {
            name: "Keanu Reeves",
            character: "Neo",
            photo: keanuPhoto,
            photoCharacter: neoPhoto,
        },
        {
            name: "Laurence Fishburne",
            character: "Morpheus",
            photo: laurencePhoto,
            photoCharacter: morpheusPhoto,
        },
        {
            name: "Carrie-Anne Moss",
            character: "Trinity",
            photo: carriePhoto,
            photoCharacter: trinityPhoto,
        },
        {
            name: "Hugo Weaving",
            character: "Smith",
            photo: hugoPhoto,
            photoCharacter: smithPhoto,
        },
    ],
};

export const slice = createSlice({
    name: 'actors',
    initialState: initialState,
    reducers: {
        addActor: (state, action) => {
            state.value.push(action.payload);
        },
        clear: state => {
            state.value = [];
        },
        reset: state => initialState
    },
});

export const { addActor, clear, reset } = slice.actions;

export const selectCount = state => {
    return state.actors.value.length;
}

export const selectAll = state => {
    return state.actors.value;
}

export default slice.reducer;

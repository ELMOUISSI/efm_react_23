import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 /*currentStagiare :{
    image :'',
    nom : '',
    prenom : '',
    filiare : '',
 },
 */
 ListStagiaire : []

} ;
const stagiairSlice = createSlice({
    name: 'stagiair',
    initialState,
    reducers: {
         AddStagiair(state,action){
         state.ListStagiaire.push(action.payload)
         }
 
    }})

export const { AddStagiair } = stagiairSlice.actions;
export default stagiairSlice.reducer;
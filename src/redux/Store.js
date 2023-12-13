import {configureStore} from '@reduxjs/toolkit'
import StagiareSlice from './StagiareSlice';
const store =configureStore(
   {
    reducer :{
        stagiair:StagiareSlice
    }
   }
);

export default store
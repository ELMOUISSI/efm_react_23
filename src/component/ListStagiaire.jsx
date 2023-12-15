import React from 'react';
import { useSelector } from 'react-redux';
import Stagiaire from './Stagiaire';

export default function ListStagiair() {
  const ListStagiaire = useSelector(state => state.stagiair.ListStagiaire);
  console.log(ListStagiaire);

  return (
    <div className='row m-2 p-2'>
      {ListStagiaire.length > 0 ? (
        ListStagiaire.map((item) => (

            <Stagiaire item={item} />
          
        ))
      ) : (
        <div className='alert alert-danger'>liste vide</div>
      )}
    </div>
  );
}

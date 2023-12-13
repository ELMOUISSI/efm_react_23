import React from 'react';
import { useSelector } from 'react-redux';
import Stagiaire from './Stagiaire';

export default function ListStagiair() {
  const ListStagiaire = useSelector(state => state.stagiair.ListStagiaire);
  console.log(ListStagiaire);

  return (
    <div>
      {ListStagiaire.length > 0 ? (
        ListStagiaire.map((item) => (
          
            <Stagiaire item={item} />
          
        ))
      ) : (
        <p>liste vide</p>
      )}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Stagiaire({ item }) {


  return (
    <div>
      <div className="image">
      <Link to={ `/detail/${item.nom}`} >
      <img src={item.image} alt="image"/>
      </Link>
         
      </div>
     <h3 className="nameStr">{item.nom}</h3>
    </div>
  );
}

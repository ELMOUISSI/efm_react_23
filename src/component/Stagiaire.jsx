import React from 'react';
import { Link } from 'react-router-dom';

export default function Stagiaire({ item }) {


  return (
    <div className="card" style={{width: '18rem'}}>
      
      <Link to={ `/detail/${item.nom}`} >
      <img src={item.image} alt="image" className="card-img-top" />
      </Link>
         <div className="card-body">
         <h3 className="card-title">{item.nom}</h3>
         </div>
    
    </div>
  );
}

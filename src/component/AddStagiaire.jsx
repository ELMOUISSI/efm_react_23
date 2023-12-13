import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddStagiair } from '../redux/StagiareSlice';

export default function AddStagiaire() {
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  const nomRef = useRef(null);
  const prenomRef = useRef(null);
  const filiareRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStagiaire = {
      image: imageRef.current.value,
      nom: nomRef.current.value,
      prenom: prenomRef.current.value,
      filiare: filiareRef.current.value,
    };

    dispatch(AddStagiair(newStagiaire));

    // Resetting the input fields
    imageRef.current.value = '';
    nomRef.current.value = '';
    prenomRef.current.value = '';
    filiareRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          ref={imageRef}
        />
        <br />
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="nom"
          ref={nomRef}
        />
<br />
        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          id="prenom"
          ref={prenomRef}
        />
        <br />
        <label htmlFor="filiare">Filière</label>
        <input
          type="text"
          id="filiare"
          ref={filiareRef}
        />
        <br/>
        <button type="submit" className='btn btn-primary'>Ajouter</button>
      </form>
    </div>
  );
}

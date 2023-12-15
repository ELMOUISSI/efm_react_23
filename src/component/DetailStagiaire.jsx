import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailStagiaire() {
    const ListStagiare = useSelector((state) => state.stagiair.ListStagiaire);
    const { namestg }= useParams();
    console.log(ListStagiare)
   const filteredStagiaire = ListStagiare.filter(
        stagiaire => stagiaire.nom === namestg
    );
    console.log(filteredStagiaire)

    return (
        <div> 
            {filteredStagiaire.length > 0 ? (
                <div>
                    <h2>Informations sur {namestg}</h2>
                     {filteredStagiaire.map((stagiaire)=>(
                       
                        <div>
                        <img src={stagiaire.image} alt="" />    
                        <p>Nom   :  {stagiaire.nom}</p>
                        <p>prenom :   {stagiaire.prenom}</p>
                        <p> filiare : {stagiaire.filiare}</p>
                        
                        </div>
                     )

                     )}
                   
                </div>
            ) : (
                <p>Aucun stagiaire trouvé avec ce nom {namestg}</p>
            )}
        </div>
    );
}

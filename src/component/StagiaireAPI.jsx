import React, { useState, useEffect } from 'react';
import axios from '../function/AxiosFunction';


const StagiaireAPI = () => {
  const [stagiaires, setStagiaires] = useState([]);
  const [loading,setLoading]= useState(true)
  
  useEffect(() => {
    // Effect to fetch data from the API
    const fetchData = async () => {
         setLoading(true)
      try {
        const response = await axios.get('/stagiaire');
        if (response.status === 200) {
          setStagiaires(response.data); // Set fetched data to state
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false)
      }
    };

    fetchData(); // Fetch data when component mounts
  }, []);

  return (
    <div>
      <h2>Liste des Stagiaires</h2>
      {
        loading ? ( <p>loading ... </p>) :
      ( 
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Filière</th>
           
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((stagiaire, index) => (
            <tr key={index}>
              <td>{stagiaire.id}</td>
              <td>{stagiaire.nom}</td>
              <td>{stagiaire.prenom}</td>
              <td>{stagiaire.filiaire}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
       ) }
    </div>
  );
};

export default StagiaireAPI;

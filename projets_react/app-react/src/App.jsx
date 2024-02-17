import React, { useState } from 'react';

function App() {
  const [tache, setTache] = useState([]);

  function incTache() {
    const nouvelleTache = prompt("Entrez une tâche");
    setTache([...tache, nouvelleTache]);
  }

  function decTache(index) {
    const nouvellesTaches = [...tache];
    nouvellesTaches.splice(index, 1);
    setTache(nouvellesTaches);
  }

  function afficher() {
    return (
      <>
        <ul>
          {tache.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <h1>Liste des Tâches</h1>
      <button onClick={incTache}>Ajouter une tâche</button>
      <button onClick={() => decTache(0)}>Supprimer une tâche</button>
      {afficher()}
    </>
  );
}

export default App;

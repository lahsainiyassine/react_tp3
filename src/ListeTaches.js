import { useState } from 'react';

function ListeTaches() {
  const [taches, setTaches] = useState([
    { id: 1, titre: "Apprendre React" },
    { id: 2, titre: "Créer une application" },
    { id: 3, titre: "Tester le code" }
  ]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  const ajouterTache = (e) => {
    e.preventDefault();
    if (nouvelleTache.trim() === '') return;

    const nouvelle = {
      id: Date.now(),
      titre: nouvelleTache.trim()
    };

    setTaches([...taches, nouvelle]);
    setNouvelleTache('');
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((tache) => tache.id !== id));
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Liste des tâches à accomplir</h3>
      
      {/* Formulaire dynamique (Exercice 2) */}
      <form onSubmit={ajouterTache} style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Nouvelle tâche..."
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          style={{ padding: '6px 10px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '6px 12px' }}>
          Ajouter
        </button>
      </form>

      <ul>
        {taches.map((tache) => (
          <li key={tache.id} style={{ marginBottom: '8px' }}>
            <span>{tache.titre}</span>
            <button
              onClick={() => supprimerTache(tache.id)}
              style={{
                marginLeft: '10px',
                fontSize: '11px',
                padding: '2px 6px',
                color: '#e74c3c',
                cursor: 'pointer',
                borderRadius: '3px',
                border: '1px solid #e74c3c',
                background: 'transparent'
              }}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeTaches;

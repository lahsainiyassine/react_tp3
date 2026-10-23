import { useState } from 'react';

function AdminPanel() {
  const [role, setRole] = useState('utilisateur');

  return (
    <div style={{ margin: '20px 0', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '15px', background: '#fafafa' }}>
      <h3>Panneau d'administration (Exercice 1)</h3>
      <p>
        Rôle actuel : <strong>{role}</strong>
      </p>
      
      <button
        onClick={() => setRole(role === 'admin' ? 'utilisateur' : 'admin')}
        style={{ padding: '6px 12px', cursor: 'pointer' }}
      >
        Basculer en {role === 'admin' ? 'Utilisateur' : 'Admin'}
      </button>

      {/* Rendu conditionnel strict : visible uniquement si role === 'admin' */}
      {role === 'admin' ? (
        <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '6px' }}>
          <h4>Espace Administrateur débloqué</h4>
          <p>Vous avez accès aux fonctions avancées : configuration du système, gestion des utilisateurs, journaux d'activité.</p>
        </div>
      ) : (
        <p style={{ marginTop: '10px', color: '#7f8c8d', fontStyle: 'italic', fontSize: '14px' }}>
          (Ce panneau complet ne s'affiche que si vous avez le rôle "admin")
        </p>
      )}
    </div>
  );
}

export default AdminPanel;

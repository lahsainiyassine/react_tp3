import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nom && form.email) {
      setEnvoye(true);
    }
  };

  return (
    <div className="carte-conteneur">
      <h2>Page Contact (Exercice 3)</h2>
      <p>N'hésitez pas à nous laisser un message via ce formulaire :</p>

      {envoye ? (
        <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '15px', borderRadius: '5px' }}>
          Merci {form.nom}, votre message a bien été envoyé !
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Nom :</label>
            <input
              type="text"
              required
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email :</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Message :</label>
            <textarea
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <button type="submit" style={{ padding: '10px 15px', alignSelf: 'flex-start', cursor: 'pointer' }}>
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;

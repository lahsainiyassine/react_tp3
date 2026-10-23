import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="titre-principal">Mon Application React</h1>
      <nav className="nav-barre">
        <Link to="/" className="nav-lien">Accueil</Link>
        <Link to="/apropos" className="nav-lien">À propos</Link>
        <Link to="/contact" className="nav-lien">Contact</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

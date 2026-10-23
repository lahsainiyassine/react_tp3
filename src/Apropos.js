function Apropos() {
  return (
    <div className="carte-conteneur">
      <h2>Page À propos</h2>
      <p>Cette application a été créée dans le cadre d'un TP React.</p>
      <p>
        Elle met en œuvre les concepts fondamentaux :
      </p>
      <ul>
        <li>Routage SPA avec <code>react-router-dom</code></li>
        <li>Rendu conditionnel avec opérateurs ternaires et <code>&&</code></li>
        <li>Rendu dynamique de listes avec <code>map()</code> et clés uniques</li>
        <li>Intégration d'images locales et balises multimédias (audio)</li>
      </ul>
    </div>
  );
}

export default Apropos;

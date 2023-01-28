import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Fenster
import Hauptmenue from './Fenster/Hauptmenue';
import Artikelsbeschreibung from './Fenster/Artikelsbeschreibung';
import WarenkorbFenster from './Fenster/WarenkorbFenster';

// Components
import Navbar from './components/Navbar';
import HemdenFenster from './Fenster/HemdenFenster';

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route exact path="/" element={<Hauptmenue />} />
          <Route exact path="/product/:id" element={<Artikelsbeschreibung />} />
          <Route exact path="/Korb" element={<WarenkorbFenster />} />
          <Route exact path="/HemdenFenster" element={<HemdenFenster />} />
        </Routes>
      </main>

      {/* HomeScreen == Hauptmenue */}
      {/* ProductScreen == Artikelsbeschreibung */}
      {/* CartScreen == WarenkorbFenster */}
    </Router>
  );
}

export default App;

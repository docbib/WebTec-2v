import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Fenster
import Hauptmenue from './Fenster/Hauptmenue';
import Artikelsbeschreibung from './Fenster/Artikelsbeschreibung';
import WarenkorbFenster from './Fenster/WarenkorbFenster';
import HemdenFenster from './Fenster/HemdenFenster';
import PolosFenster from './Fenster/PolosFenster';
import StrickFenster from './Fenster/StrickFenster';
import AccessoiresFenster from './Fenster/AccessoiresFenster';
import OutletFenster from './Fenster/OutletFenster';

// Components
import Navbar from './components/Navbar';

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
          <Route exact path="/PolosFenster" element={<PolosFenster />} />
          <Route exact path="/StrickFenster" element={<StrickFenster />} />
          <Route
            exact
            path="/AccessoiresFenster"
            element={<AccessoiresFenster />}
          />
          <Route exact path="/OutletFenster" element={<OutletFenster />} />
        </Routes>
      </main>

      {/* HomeScreen == Hauptmenue */}
      {/* ProductScreen == Artikelsbeschreibung */}
      {/* CartScreen == WarenkorbFenster */}
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './Pages/Landing';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

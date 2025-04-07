import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Grouped from './pages/grouped.jsx';
import Color from './pages/color.jsx';
import NotFound from './pages/notfound.jsx';
import { ColorProvider } from './context/color.provider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grouped" element={<Grouped />} />
          <Route path="/color/:colorid" element={<Color />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ColorProvider>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import './index.scss';
import GlobalStyles from './utils/style/GlobalStyle.jsx';
import { ThemeProvider } from './utils/context/ThemeContext.js';

import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import Freelances from './pages/Freelances/Freelances';
import Results from './pages/Results/Results';
import { SurveyProvider } from './utils/context/SurveyContext.js';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyles />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Error />} />
          </Routes>

          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

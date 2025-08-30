
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Quiz from './components/Quiz';
import ProfilePage from './pages/ProfilePage';
import BlogDroppingServices from './pages/BlogDroppingServices';
import BlogCuradorEstrategico from './pages/BlogCuradorEstrategico';
import BlogArquitectoDigital from './pages/BlogArquitectoDigital';
import BlogConectorOportunidades from './pages/BlogConectorOportunidades';
import BlogMercaderDigital from './pages/BlogMercaderDigital';
import BlogCreadorSoluciones from './pages/BlogCreadorSoluciones';
import BlogEditorIA from './pages/BlogEditorIA';
import BlogOperadorEcommerce from './pages/BlogOperadorEcommerce';
import BlogConsultorEspecialista from './pages/BlogConsultorEspecialista';
import BlogModeradorComunidades from './pages/BlogModeradorComunidades';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-brand-dark text-brand-light min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generador" element={<Quiz />} />
          <Route path="/perfil/:profileId" element={<ProfilePage />} />
          <Route path="/blog/guia-dropping-services" element={<BlogDroppingServices />} />
          <Route path="/blog/guia-curador-estrategico" element={<BlogCuradorEstrategico />} />
          <Route path="/blog/guia-arquitecto-digital" element={<BlogArquitectoDigital />} />
          <Route path="/blog/guia-conector-oportunidades" element={<BlogConectorOportunidades />} />
          <Route path="/blog/guia-mercader-digital" element={<BlogMercaderDigital />} />
          <Route path="/blog/guia-creador-soluciones" element={<BlogCreadorSoluciones />} />
          <Route path="/blog/guia-editor-ia" element={<BlogEditorIA />} />
          <Route path="/blog/guia-operador-ecommerce" element={<BlogOperadorEcommerce />} />
          <Route path="/blog/guia-consultor-especialista" element={<BlogConsultorEspecialista />} />
          <Route path="/blog/guia-moderador-comunidades" element={<BlogModeradorComunidades />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
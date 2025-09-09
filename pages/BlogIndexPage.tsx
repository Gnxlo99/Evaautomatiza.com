import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Quiz from './components/Quiz';
import ProfilePage from './pages/ProfilePage';
import BlogIndexPage from './pages/BlogIndexPage';
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
import BlogLandingPages from './pages/BlogLandingPages';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './src/pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import PortfolioLandingPage from './pages/PortfolioLandingPage';
import MarketingConsultantLP from './pages/lp/MarketingConsultantLP';
import GymTrainerLP from './pages/lp/GymTrainerLP';
import SaaSLP from './pages/lp/SaaSLP';
import RealEstateLP from './pages/lp/RealEstateLP';
import BusinessCoachLP from './pages/lp/BusinessCoachLP';
import ManicuristLP from './pages/lp/ManicuristLP';


const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-brand-dark text-brand-light min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generador" element={<Quiz />} />
            <Route path="/perfil/:profileId" element={<ProfilePage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
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
            <Route path="/blog/landing-pages-convierten" element={<BlogLandingPages />} />
            <Route path="/portfolio/landing-pages" element={<PortfolioLandingPage />} />
            <Route path="/portfolio/marketing-consultant" element={<MarketingConsultantLP />} />
            <Route path="/portfolio/gym-trainer" element={<GymTrainerLP />} />
            <Route path="/portfolio/saas" element={<SaaSLP />} />
            <Route path="/portfolio/real-estate" element={<RealEstateLP />} />
            <Route path="/portfolio/business-coach" element={<BusinessCoachLP />} />
            <Route path="/portfolio/manicurist" element={<ManicuristLP />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/politica-de-cookies" element={<CookiePolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuizIntroPage from './pages/HomePage';
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
import BlogErroresLandingPage from './pages/BlogErroresLandingPage';
import BlogLpVsWeb from './pages/BlogLpVsWeb';
import BlogAnatomiaLandingPage from './pages/BlogAnatomiaLandingPage';
import BlogVendedorDigital from './pages/BlogVendedorDigital';
import BlogInstagramClientes from './pages/BlogInstagramClientes';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import PortfolioLandingPage from './pages/PortfolioLandingPage';
import MarketingConsultantLP from './pages/lp/MarketingConsultantLP';
import GymTrainerLP from './pages/lp/GymTrainerLP';
import SaaSLP from './pages/lp/SaaSLP';
import RealEstateLP from './pages/lp/RealEstateLP';
import BusinessCoachLP from './pages/lp/BusinessCoachLP';
import ManicuristLP from './pages/lp/ManicuristLP';
import LawyerLP from './pages/lp/LawyerLP';
import DentistLP from './pages/lp/DentistLP';
import AgendaProPage from './pages/AgendaProPage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-brand-dark text-brand-light min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PortfolioLandingPage />} />
            <Route path="/comenzar" element={<QuizIntroPage />} />
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
            <Route path="/blog/5-errores-landing-page" element={<BlogErroresLandingPage />} />
            <Route path="/blog/landing-page-vs-sitio-web" element={<BlogLpVsWeb />} />
            <Route path="/blog/anatomia-landing-page-convierte" element={<BlogAnatomiaLandingPage />} />
            <Route path="/blog/landing-page-vendedor-digital" element={<BlogVendedorDigital />} />
            <Route path="/blog/instagram-clientes-landing-page" element={<BlogInstagramClientes />} />
            <Route path="/portfolio/marketing-consultant" element={<MarketingConsultantLP />} />
            <Route path="/portfolio/gym-trainer" element={<GymTrainerLP />} />
            <Route path="/portfolio/saas" element={<SaaSLP />} />
            <Route path="/portfolio/real-estate" element={<RealEstateLP />} />
            <Route path="/portfolio/business-coach" element={<BusinessCoachLP />} />
            <Route path="/portfolio/manicurist" element={<ManicuristLP />} />
            <Route path="/portfolio/lawyer" element={<LawyerLP />} />
            <Route path="/portfolio/dentist" element={<DentistLP />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/politica-de-cookies" element={<CookiePolicyPage />} />
            <Route path="/agenda" element={<AgendaProPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

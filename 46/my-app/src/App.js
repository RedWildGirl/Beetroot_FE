import './App.scss';
import Header from './components/Blocks/Header/Header';
import HeroSection from './components/Sections/Hero-Section/HeroSection';
import FtrsSection from './components/Sections/Ftrs-Section/FtrsSection';
import DesignSection from './components/Sections/Design-Section/DesignSection';
import Footer from './components/Blocks/Footer/Footer';

function App() {
  return (
    <>

    <Header />

    <main>

      <HeroSection />

      <FtrsSection />

      <DesignSection />

    </main>

    <Footer />
    
    </>       
      
  );
}

export default App;

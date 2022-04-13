import React, {useState} from 'react';
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
  <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection />
    <Menu />
    <Footer />
  </>
  );
}

export default Home;
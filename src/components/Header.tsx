
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="bg-sport-red rounded-full p-2">
            <Icon name="Dumbbell" className="text-white h-6 w-6" />
          </div>
          <span className="font-montserrat font-bold text-xl text-sport-blue">
            СПОРТ<span className="text-sport-red">МАСТЕР</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sport-blue font-medium hover:text-sport-red transition-colors">
            Главная
          </a>
          <a href="#products" className="text-sport-blue font-medium hover:text-sport-red transition-colors">
            Товары
          </a>
          <a href="#categories" className="text-sport-blue font-medium hover:text-sport-red transition-colors">
            Категории
          </a>
          <a href="#about" className="text-sport-blue font-medium hover:text-sport-red transition-colors">
            О нас
          </a>
          <a href="#contacts" className="text-sport-blue font-medium hover:text-sport-red transition-colors">
            Контакты
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Icon name="Search" className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="ShoppingCart" className="h-5 w-5" />
          </Button>
          <Button className="bg-sport-red hover:bg-sport-red/90">
            Купить сейчас
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Icon name="ShoppingCart" className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container flex flex-col py-4">
          <a href="#" className="py-3 px-4 text-sport-blue font-medium hover:bg-sport-gray rounded-md">
            Главная
          </a>
          <a href="#products" className="py-3 px-4 text-sport-blue font-medium hover:bg-sport-gray rounded-md">
            Товары
          </a>
          <a href="#categories" className="py-3 px-4 text-sport-blue font-medium hover:bg-sport-gray rounded-md">
            Категории
          </a>
          <a href="#about" className="py-3 px-4 text-sport-blue font-medium hover:bg-sport-gray rounded-md">
            О нас
          </a>
          <a href="#contacts" className="py-3 px-4 text-sport-blue font-medium hover:bg-sport-gray rounded-md">
            Контакты
          </a>
          <div className="mt-3 px-4">
            <Button className="w-full bg-sport-red hover:bg-sport-red/90">
              Купить сейчас
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

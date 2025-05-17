
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-50 rounded-full bg-sport-blue text-white hover:bg-sport-red border-none shadow-lg transition-all duration-300 ${
        showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <Icon name="ChevronUp" className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;

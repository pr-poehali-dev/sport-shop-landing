
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

const Index = () => {
  // Для плавной прокрутки по якорным ссылкам
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Учитываем высоту шапки
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Categories />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

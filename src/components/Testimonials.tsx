
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Алексей Смирнов",
    role: "Профессиональный бегун",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Я покупаю экипировку только в этом магазине. Отличное качество, быстрая доставка и компетентные консультации. Рекомендую всем спортсменам!",
    rating: 5
  },
  {
    id: 2,
    name: "Елена Иванова",
    role: "Фитнес-тренер",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Как фитнес-тренер, я всегда рекомендую своим клиентам этот магазин. Здесь есть все необходимое для тренировок и по разумным ценам.",
    rating: 5
  },
  {
    id: 3,
    name: "Дмитрий Петров",
    role: "Любитель активного отдыха",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "Недавно купил здесь кроссовки для бега и остался очень доволен. Удобные, качественные и по хорошей цене. Буду покупать здесь и дальше.",
    rating: 4
  },
  {
    id: 4,
    name: "Анна Козлова",
    role: "Йога-инструктор",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    quote: "Нашла здесь все необходимое для занятий йогой. Качество товаров на высоте, а обслуживание просто отличное! Спасибо за вашу работу.",
    rating: 5
  },
  {
    id: 5,
    name: "Сергей Николаев",
    role: "Велосипедист",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Большой выбор велоаксессуаров и запчастей. Всегда нахожу то, что искал. Приятно удивлен ценами и обслуживанием. Молодцы!",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Автоматическая прокрутка
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Скролл к активному слайду
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cards = Array.from(container.children) as HTMLElement[];
      
      if (cards[activeIndex]) {
        const scrollTo = cards[activeIndex].offsetLeft - container.offsetWidth / 2 + cards[activeIndex].offsetWidth / 2;
        container.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // Обработчики свайпа для мобильных устройств
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    } else if (isRightSwipe) {
      setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-sport-gray/50 to-white">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sport-blue mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-gray-600">
            Мнения наших клиентов очень важны для нас. Вот что они говорят о нашем магазине и товарах
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="flex overflow-x-auto gap-6 py-4 no-scrollbar"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`flex-shrink-0 w-full md:w-[400px] transform transition-all duration-300 ${
                activeIndex === index 
                  ? "scale-100 opacity-100 shadow-lg" 
                  : "scale-95 opacity-70"
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-500" : "fill-gray-200"}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 text-lg italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-sport-blue/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-sport-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full p-0 ${
                activeIndex === index 
                  ? "bg-sport-blue" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              <span className="sr-only">Отзыв {index + 1}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

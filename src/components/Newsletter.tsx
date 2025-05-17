
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from '@/components/ui/icon';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Здесь можно добавить логику отправки email на сервер
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="section-padding bg-sport-blue">
      <div className="container">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-sport-blue/60 to-sport-red/60 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop" 
                alt="Спортивная тренировка" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20 p-8 text-center md:text-left">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Скидка 10% на первый заказ
                  </h3>
                  <p className="text-white/90 mb-4">
                    Подпишитесь на нашу рассылку и получите скидку
                  </p>
                  <div className="hidden md:flex gap-2 items-center">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/${i % 2 ? 'men' : 'women'}/${20 + i}.jpg`} 
                          alt="Customer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <p className="text-white text-sm">Присоединяйтесь!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold text-sport-blue mb-4">
                  Подпишитесь на нашу рассылку
                </h2>
                <p className="text-gray-600 mb-6">
                  Будьте в курсе новых поступлений, акций и эксклюзивных предложений. 
                  Никакого спама, только полезная информация.
                </p>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                    <Icon name="CheckCircle" className="text-green-500 h-6 w-6 mr-3" />
                    <p className="text-green-700">Спасибо за подписку! Проверьте свою почту.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex gap-3 items-center">
                    <div className="relative flex-1">
                      <Icon name="Mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        type="email"
                        placeholder="Ваш email"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="bg-sport-red hover:bg-sport-red/90">
                      Подписаться
                    </Button>
                  </form>
                )}
                
                <p className="text-xs text-gray-500 mt-4">
                  Нажимая на кнопку, вы соглашаетесь с нашей {" "}
                  <a href="#" className="text-sport-blue underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

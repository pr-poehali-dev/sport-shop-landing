
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-sport-blue/10 text-sport-blue font-medium px-4 py-2 rounded-full mb-6">
              Почему мы?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sport-blue mb-6">
              Лучший выбор для спортсменов любого уровня
            </h2>
            <p className="text-gray-600 mb-8">
              Наш магазин предлагает товары высшего качества от известных брендов, 
              профессиональную консультацию и безупречный сервис. Мы помогаем 
              нашим клиентам достигать спортивных целей с 2010 года.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "Shield", title: "Гарантия качества", desc: "Только оригинальные товары с гарантией" },
                { icon: "CircleDollarSign", title: "Лучшие цены", desc: "Регулярные акции и специальные предложения" },
                { icon: "Users", title: "Консультации", desc: "Профессиональная помощь в выборе" },
                { icon: "Clock", title: "Быстрая доставка", desc: "От 1 дня по всей России" },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-sport-blue/10">
                    <Icon name={item.icon} className="text-sport-blue h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-sport-blue mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-sport-blue hover:bg-sport-blue/90">
              Узнать больше
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sport-blue/10 to-sport-red/10 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="shadow-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=1469&auto=format&fit=crop" 
                  alt="Спорт" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-sport-blue">Профессиональный подход</h3>
                </CardContent>
              </Card>
              <Card className="shadow-lg overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=1470&auto=format&fit=crop" 
                  alt="Консультация тренера" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-sport-blue">Консультации экспертов</h3>
                </CardContent>
              </Card>
              <Card className="shadow-lg overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform col-span-2 max-w-xs mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop" 
                  alt="Тренировка" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-sport-blue">Персональный подбор</h3>
                </CardContent>
              </Card>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sport-red rounded-lg rotate-12 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sport-blue rounded-lg -rotate-12 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

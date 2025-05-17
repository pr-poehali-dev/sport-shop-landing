
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative bg-gradient-to-br from-white to-sport-gray">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-sport-blue"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full border-8 border-sport-red"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border-8 border-sport-blue/50 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <div className="inline-block bg-sport-blue/10 text-sport-blue font-medium px-4 py-2 rounded-full mb-6 opacity-0 animate-fadeIn">
              Новая коллекция 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sport-blue leading-tight mb-6 opacity-0 animate-fadeIn delay-100">
              Преодолевай <br />
              <span className="text-sport-red">границы</span> с нашей <br /> экипировкой
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-md opacity-0 animate-fadeIn delay-200">
              Откройте для себя премиальное спортивное снаряжение, которое поможет вам достичь новых высот. Качество, комфорт и стиль в каждом товаре.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 opacity-0 animate-fadeIn delay-300">
              <Button className="bg-sport-red hover:bg-sport-red/90">
                Купить сейчас
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-sport-blue text-sport-blue hover:bg-sport-blue hover:text-white">
                Популярные товары
              </Button>
            </div>
            <div className="flex items-center gap-6 opacity-0 animate-fadeIn delay-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} name="Star" className="fill-yellow-500 h-4 w-4" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">4.9</span> (2.5k+ отзывов)
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center opacity-0 animate-fadeIn delay-200">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-sport-blue/20 to-sport-red/20 rounded-full blur-3xl opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1470&auto=format&fit=crop" 
              alt="Спортивная обувь" 
              className="relative max-w-full h-auto rounded-xl shadow-xl object-cover z-10 rotate-12 hover:rotate-0 transition-all duration-500"
            />
            <div className="absolute -bottom-4 left-0 right-0 h-8 bg-black/10 filter blur-md rounded-full z-0"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 opacity-0 animate-fadeIn delay-500">
          {[
            { icon: "Trophy", title: "Качественные бренды", desc: "Официальный дилер" },
            { icon: "Truck", title: "Быстрая доставка", desc: "По всей России" },
            { icon: "BadgePercent", title: "Скидки и акции", desc: "Постоянные распродажи" },
            { icon: "LifeBuoy", title: "Гарантия и возврат", desc: "30 дней на возврат" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sport-blue/10 mb-4">
                <Icon name={item.icon} className="text-sport-blue h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-sport-blue mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

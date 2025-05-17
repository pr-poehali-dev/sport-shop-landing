
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const categories = [
  {
    id: 1,
    name: "Беговая коллекция",
    description: "Обувь и экипировка для бега",
    icon: "Running",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1485&auto=format&fit=crop",
    bgColor: "from-blue-500/10 to-blue-700/10"
  },
  {
    id: 2,
    name: "Тренажеры",
    description: "Оборудование для домашних тренировок",
    icon: "Dumbbell",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1471&auto=format&fit=crop",
    bgColor: "from-red-500/10 to-red-700/10"
  },
  {
    id: 3,
    name: "Спортивная одежда",
    description: "Комфортная одежда для активного образа жизни",
    icon: "Shirt",
    image: "https://images.unsplash.com/photo-1565128939070-37168577d6a8?q=80&w=1472&auto=format&fit=crop",
    bgColor: "from-green-500/10 to-green-700/10"
  },
  {
    id: 4,
    name: "Спортивное питание",
    description: "Питание и добавки для лучших результатов",
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?q=80&w=1499&auto=format&fit=crop",
    bgColor: "from-yellow-500/10 to-yellow-700/10"
  }
];

const Categories = () => {
  return (
    <section id="categories" className="section-padding bg-sport-gray/50">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sport-blue mb-4">
            Категории товаров
          </h2>
          <p className="text-gray-600">
            Мы предлагаем широкий выбор спортивных товаров от ведущих мировых брендов 
            для любого вида спорта и активного отдыха
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.bgColor} opacity-80 z-0`}></div>
              <div className="relative z-10 flex items-start p-8 h-full">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                />
                <div className="relative z-10 flex-1">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/90 mb-4">
                    <Icon name={category.icon} className="text-sport-blue h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/90 mb-6 max-w-xs">
                    {category.description}
                  </p>
                  <Button className="bg-white text-sport-blue hover:bg-white/90">
                    Подробнее
                    <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-sport-red hover:bg-sport-red/90 px-10">
            Смотреть все категории
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;

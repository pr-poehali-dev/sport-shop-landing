
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CATEGORIES = ["Все", "Обувь", "Одежда", "Аксессуары", "Тренажеры"];

// Демо-данные продуктов
const PRODUCTS = [
  {
    id: 1,
    name: "Беговые кроссовки Sport Pro",
    category: "Обувь",
    price: 7990,
    oldPrice: 9990,
    discount: "-20%",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 2,
    name: "Спортивная футболка Dri-Fit",
    category: "Одежда",
    price: 2490,
    oldPrice: 2990,
    discount: "-17%",
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1364&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 3,
    name: "Умные часы FitTrack Pro",
    category: "Аксессуары",
    price: 12490,
    oldPrice: 14990,
    discount: "-17%",
    rating: 4.9,
    reviews: 213,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1527&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 4,
    name: "Гантели чугунные 2x10кг",
    category: "Тренажеры",
    price: 3990,
    oldPrice: 4590,
    discount: "-13%",
    rating: 4.7,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1590771998996-8589ec9b5ac6?q=80&w=1374&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 5,
    name: "Баскетбольный мяч Pro",
    category: "Аксессуары",
    price: 2990,
    oldPrice: 3490,
    discount: "-15%",
    rating: 4.5,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1471&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 6,
    name: "Компрессионные лосины",
    category: "Одежда",
    price: 3490,
    oldPrice: 3990,
    discount: "-13%",
    rating: 4.7,
    reviews: 104,
    image: "https://images.unsplash.com/photo-1562886877-3a0d4944ab3d?q=80&w=1374&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 7,
    name: "Шейкер для протеина",
    category: "Аксессуары",
    price: 990,
    oldPrice: 1290,
    discount: "-24%",
    rating: 4.3,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 8,
    name: "Кроссовки для бега Trail",
    category: "Обувь",
    price: 8990,
    oldPrice: 10990,
    discount: "-19%",
    rating: 4.9,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1364&auto=format&fit=crop",
    isNew: true,
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  
  const filteredProducts = activeCategory === "Все" 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-sport-blue mb-4">
              Популярные товары
            </h2>
            <p className="text-gray-600 max-w-md">
              Выбирайте из нашей коллекции премиальных спортивных товаров от лучших мировых брендов
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button className="bg-sport-red hover:bg-sport-red/90">
              Смотреть все
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-8 items-center justify-center md:justify-start">
          {CATEGORIES.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category 
                  ? "bg-sport-blue hover:bg-sport-blue/90" 
                  : "border-sport-blue/30 hover:border-sport-blue hover:bg-transparent"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden border-none shadow-md card-hover">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {product.discount && (
                  <Badge className="absolute top-4 left-4 bg-sport-red hover:bg-sport-red">
                    {product.discount}
                  </Badge>
                )}
                {product.isNew && (
                  <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-600">
                    Новинка
                  </Badge>
                )}
                <Button variant="outline" size="icon" className="absolute right-4 bottom-4 rounded-full bg-white hover:bg-sport-red hover:text-white transition-colors">
                  <Icon name="Heart" className="h-5 w-5" />
                </Button>
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="fill-yellow-500 h-4 w-4" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-sport-blue mb-2 truncate">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{product.price.toLocaleString()} ₽</span>
                  {product.oldPrice && (
                    <span className="text-gray-500 line-through text-sm">{product.oldPrice.toLocaleString()} ₽</span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-sport-blue hover:bg-sport-blue/90">
                  <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

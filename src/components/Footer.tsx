
import Icon from '@/components/ui/icon';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-sport-blue text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-sport-red rounded-full p-2">
                <Icon name="Dumbbell" className="text-white h-6 w-6" />
              </div>
              <span className="font-montserrat font-bold text-xl text-white">
                СПОРТ<span className="text-sport-red">МАСТЕР</span>
              </span>
            </a>
            <p className="text-white/80 mb-6">
              Ваш надежный партнер в мире спорта. Качественные товары, профессиональная консультация и отличный сервис.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10 hover:text-white">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10 hover:text-white">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10 hover:text-white">
                <Icon name="Twitter" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10 hover:text-white">
                <Icon name="Youtube" className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Магазин</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Каталог товаров</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Новинки</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Распродажа</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Популярные бренды</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Возврат товара</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Оферта</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="h-5 w-5 text-sport-red shrink-0 mt-0.5" />
                <p className="text-white/80">
                  ул. Спортивная, 123<br />
                  Москва, 123456
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="h-5 w-5 text-sport-red shrink-0" />
                <a href="tel:+78001234567" className="text-white/80 hover:text-white transition-colors">
                  +7 (800) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="h-5 w-5 text-sport-red shrink-0" />
                <a href="mailto:info@sportmaster.ru" className="text-white/80 hover:text-white transition-colors">
                  info@sportmaster.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="h-5 w-5 text-sport-red shrink-0" />
                <p className="text-white/80">
                  Пн-Вс: 9:00 - 20:00
                </p>
              </div>
              
              <div className="pt-3">
                <h4 className="text-sm font-bold mb-2">Способы оплаты:</h4>
                <div className="flex gap-2 flex-wrap">
                  {["Visa", "Mastercard", "PayPal", "ApplePay"].map((payment) => (
                    <div key={payment} className="bg-white/10 text-xs px-2 py-1 rounded">
                      {payment}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 СпортМастер. Все права защищены.
          </p>
          <div className="flex gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            <a href="#" className="hover:text-white transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

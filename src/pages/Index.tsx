import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5DC] text-[#3A2618]">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-[#8B5A2B] text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-playfair">Ласточка</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-[#F5F5DC] transition-colors">
              О нас
            </a>
            <a
              href="#gallery"
              className="hover:text-[#F5F5DC] transition-colors"
            >
              Галерея
            </a>
            <a
              href="#contacts"
              className="hover:text-[#F5F5DC] transition-colors"
            >
              Контакты
            </a>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} />
          </Button>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#8B5A2B] py-4 px-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                className="hover:text-[#F5F5DC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </a>
              <a
                href="#gallery"
                className="hover:text-[#F5F5DC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Галерея
              </a>
              <a
                href="#contacts"
                className="hover:text-[#F5F5DC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair animate-fade-in">
            Кафе-библиотека "Ласточка"
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Место, где встречаются книги, кофе и интересные люди
          </p>
          <Button className="bg-[#800020] hover:bg-[#600010] text-white">
            Забронировать столик
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair text-[#800020]">
            О нас
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Интерьер кафе-библиотеки"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <p className="text-lg mb-6">
                Кафе-библиотека "Ласточка" — это уникальное пространство, где
                культура, знания и вкус объединяются. Мы стремимся вдохновлять
                наших гостей на открытие новых книг, идей и вкусов, предлагая
                уютную атмосферу для чтения, общения и наслаждения качественной
                кухней.
              </p>
              <p className="text-lg mb-6">
                В нашей библиотеке вы найдете тщательно отобранную коллекцию
                литературы разных жанров — от классики до современных
                бестселлеров. А наша кухня предлагает изысканные блюда,
                приготовленные с любовью и вниманием к деталям.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-[#E5E4E2] p-3 rounded-lg">
                  <Icon name="BookOpen" className="text-[#800020]" />
                  <span>Более 1000 книг</span>
                </div>
                <div className="flex items-center gap-2 bg-[#E5E4E2] p-3 rounded-lg">
                  <Icon name="Coffee" className="text-[#800020]" />
                  <span>Авторские напитки</span>
                </div>
                <div className="flex items-center gap-2 bg-[#E5E4E2] p-3 rounded-lg">
                  <Icon name="Wifi" className="text-[#800020]" />
                  <span>Бесплатный Wi-Fi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-[#F5F5DC]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair text-[#800020]">
            Наша галерея
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            ].map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover-scale transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={`Фото кафе ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair text-[#800020]">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Адрес</h3>
                <p className="flex items-center gap-2 text-lg">
                  <Icon name="MapPin" className="text-[#800020]" />
                  Москва, ул. Новый Арбат, 17
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Часы работы</h3>
                <p className="flex items-center gap-2 mb-2">
                  <Icon name="Clock" className="text-[#800020]" />
                  Пн-Пт: 09:00 - 22:00
                </p>
                <p className="flex items-center gap-2 mb-2">
                  <Icon name="Clock" className="text-[#800020]" />
                  Сб-Вс: 10:00 - 23:00
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Контактная информация
                </h3>
                <p className="flex items-center gap-2 mb-2">
                  <Icon name="Phone" className="text-[#800020]" />
                  +7 (123) 456-78-90
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" className="text-[#800020]" />
                  info@lastochka-cafe.ru
                </p>
              </div>
            </div>
            <div className="h-[400px] rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2624477290735!2d37.58839731584497!3d55.752425800565445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4a1ee05005%3A0x14db687e0d991ed5!2z0J3QvtCy0YvQuSDQkNGA0LHQsNGCLCAxNywg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDExOTAxOQ!5e0!3m2!1sru!2sus!4v1651764241234!5m2!1sru!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения кафе-библиотеки Ласточка"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B5A2B] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold font-playfair">Ласточка</h2>
              <p>Кафе-библиотека</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#F5F5DC]"
              >
                <Icon name="Facebook" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#F5F5DC]"
              >
                <Icon name="Instagram" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#F5F5DC]">
                <Icon name="Twitter" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p>
              &copy; {new Date().getFullYear()} Кафе-библиотека "Ласточка". Все
              права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

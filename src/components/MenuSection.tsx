import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const menuData: Record<string, { name: string; detail?: string; price: string }[]> = {
  'APPETIZERS': [
    { name: 'Chicken Poppers', detail: 'Gravy, Kpop Sauce', price: '299' },
    { name: 'Orange Chicken', price: '299' },
    { name: 'Pork Shanghai', price: '239' },
    { name: 'Fried Siomai', price: '239' },
    { name: 'Pork Bulaklak', price: '239' },
    { name: 'Cheesesticks', price: '199' },
    { name: 'Sizzling Tofu', price: '189' },
    { name: 'Nachos', detail: 'Beef, Tuna', price: '279' },
    { name: 'Cheesy Fries', price: '259' },
    { name: 'Chicken Skin', price: '239' },
    { name: 'Sliced Cucumber in Vinegar', price: '189' },
    { name: 'Sliced Lemon', price: '88' },
  ],
  'MAIN DISH': [
    { name: 'Half Fried Chicken', price: '449' },
    { name: 'Whole Fried Chicken', price: '898' },
    { name: 'Chicken Wings', detail: 'Original, Cheese, BBQ, Sour Cream', price: '349' },
    { name: 'Sizzling Sisig', price: '299' },
    { name: 'Crispy Pata', price: '949' },
    { name: 'Lechon Kawali', price: '349' },
    { name: 'Spicy Spareribs', price: '349' },
    { name: 'Sizzling Beef', price: '349' },
    { name: 'Burger Steak', detail: '5pcs', price: '199' },
    { name: 'Sizzling Hungarian', price: '299' },
    { name: 'Sizzling Hotdog', price: '239' },
  ],
  'BEERS': [
    { name: 'San Mig Pale', detail: 'Per Piece', price: '95' },
    { name: 'San Mig Pale', detail: 'Per Bucket', price: '468' },
    { name: 'San Mig Light', detail: 'Per Piece', price: '95' },
    { name: 'San Mig Light', detail: 'Per Bucket', price: '468' },
    { name: 'San Mig Apple', detail: 'Per Piece', price: '95' },
    { name: 'San Mig Apple', detail: 'Per Bucket', price: '468' },
    { name: 'Smirnoff Mule', detail: 'Per Piece', price: '95' },
    { name: 'Smirnoff Mule', detail: 'Per Bucket', price: '468' },
    { name: 'Corona Extra', detail: 'Per Piece', price: '159' },
    { name: 'Corona Extra', detail: 'Per Bucket', price: '788' },
    { name: 'Heineken', detail: 'Per Piece', price: '159' },
    { name: 'Heineken', detail: 'Per Bucket', price: '788' },
  ],
  'VODKA / GIN': [
    { name: 'Stoli Vodka', price: '999' },
    { name: 'Smirnoff Vodka', price: '1,899' },
    { name: 'Tanqueray', price: '1,899' },
  ],
  'TEQUILA': [
    { name: 'Jose Cuervo 1L', price: '2,399' },
    { name: 'Jose Cuervo', detail: 'Per Shot', price: '200' },
    { name: '1800 Reposado 750ML', price: '2,999' },
    { name: '1800 Reposado', detail: 'Per Shot', price: '200' },
    { name: 'Mojitos', price: '1,199' },
    { name: 'El Hombre', price: '1,199' },
    { name: 'Tequila Rose', price: '1,899' },
    { name: 'Patron Silver', price: '5,499' },
  ],
  'RHUM': [
    { name: 'Bacardi Gold', price: '1,699' },
    { name: 'Bacardi White', price: '1,699' },
    { name: 'Alfonso w/ Coke 1.5L', price: '899' },
    { name: 'Fundador w/ Coke 1.5L', price: '899' },
    { name: 'Zabana w/ Coke 1.5L', price: '699' },
  ],
  'WHISKEY': [
    { name: 'Charles and James', price: '869' },
    { name: 'Jack Daniels 1L', price: '2,899' },
    { name: 'Jack Daniels', detail: 'Per Shot', price: '200' },
    { name: 'J.W Black Label 1L', price: '2,499' },
    { name: 'J.W Black Label', detail: 'Per Shot', price: '200' },
    { name: 'Red Label', price: '1,699' },
    { name: 'Gold Label', price: '4,999' },
    { name: 'Chivas 700ML', price: '1,999' },
    { name: 'Chivas 1L', price: '2,399' },
    { name: 'Jameson', price: '1,899' },
    { name: 'Jagermeister 700ML', price: '1,799' },
  ],
  'COGNAC': [
    { name: 'Hennessy VSOP 700ML', price: '5,999' },
    { name: 'Hennessy VS Cognac', price: '4,449' },
  ],
  'COCKTAILS': [
    { name: 'Poison Ivy', detail: 'Cocktail Tower', price: '349' },
    { name: 'Bloodmoon', detail: 'Cocktail Tower', price: '349' },
    { name: 'Auxiliary Best', detail: 'Cocktail Tower', price: '349' },
    { name: 'Cheetah', detail: 'Cocktail Tower', price: '349' },
    { name: 'Notorious', detail: 'Cocktail Tower', price: '349' },
    { name: 'Tequilla Sunrise', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Sex on the Beach', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Screwdriver', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Cuba Libre', detail: 'Cocktail Shooter', price: '150' },
    { name: 'God Father', detail: 'Cocktail Shooter', price: '150' },
    { name: 'God Mother', detail: 'Cocktail Shooter', price: '150' },
    { name: 'White Russian', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Black Russian', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Cape Cod', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Long Island I.T', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Tokyo Iced Tea', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Adios MF', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Dirty Shirley', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Margarita', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Mojito', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Gin Sour', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Whiskey Sour', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Ammareto Sour', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Cosmopolitan', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Kamikazee', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Daiquiri', detail: 'Cocktail Shooter', price: '150' },
    { name: 'Gimlet', detail: 'Cocktail Shooter', price: '150' },
    { name: 'B52', detail: 'Cocktail Shooter', price: '150' },
  ],
  'NON-ALCOHOLIC': [
    { name: 'Coke 1.5L', detail: 'Pitcher', price: '169' },
    { name: 'Coke Zero', detail: 'Pitcher', price: '169' },
    { name: 'Cucumber Lemonade Carafe', detail: 'Pitcher', price: '100' },
    { name: 'Iced Tea Carafe', detail: 'Pitcher', price: '100' },
    { name: 'Blue Lemonade Carafe', detail: 'Pitcher', price: '100' },
    { name: 'Bottled Water', price: '50' },
    { name: 'Coke in Can', price: '70' },
    { name: 'Sprite in Can', price: '70' },
    { name: 'Royal in Can', price: '70' },
  ],
};

const categories = Object.keys(menuData);

const MenuSection = () => {
  const [active, setActive] = useState('APPETIZERS');
  const header = useScrollReveal();
  const items = useScrollReveal(0.05);

  return (
    <section id="menu" className="py-[100px] px-6 bg-background">
      <div ref={header.ref} className={`text-center mb-10 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-heading text-[2rem] tracking-[5px] text-[#f1f1f1]">OUR MENU</h2>
        <p className="font-body text-[0.82rem] text-muted-foreground font-light max-w-[540px] mx-auto mt-3">
          From premium spirits to signature cocktail towers, we have everything to fuel your night.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-heading text-[0.82rem] tracking-[2.5px] px-4 py-2 rounded-full border transition-all duration-300 ${
              active === cat
                ? 'border-gold text-gold bg-[rgba(212,168,67,0.08)]'
                : 'border-[rgba(255,255,255,0.1)] text-muted-foreground hover:border-gold hover:text-gold'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items */}
      <div ref={items.ref} className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {menuData[active]?.map((item, i) => (
          <div
            key={`${item.name}-${item.detail}-${i}`}
            className={`flex items-baseline justify-between py-3 border-b border-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.02)] px-2 rounded transition-all duration-500 ${items.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: items.isVisible ? `${Math.min(i * 30, 300)}ms` : '0ms' }}
          >
            <div>
              <span className="font-body text-[0.78rem] text-[#f1f1f1]">{item.name}</span>
              {item.detail && <span className="font-body text-[0.7rem] text-muted-foreground ml-2">{item.detail}</span>}
            </div>
            <span className="font-heading text-[0.95rem] tracking-[1px] text-gold ml-4 whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;

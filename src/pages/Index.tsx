import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { MenuItem } from "@/components/MenuItem";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <main id="menu" className="container mx-auto px-4 py-16">
        {/* Anti Pasti */}
        <MenuSection id="anti-pasti" title="Anti Pasti">
          <MenuItem 
            name="Butter and Herbs Baked Garlic Bread"
            price={220}
            customizable
          />
          <MenuItem 
            name="Baked Mozzarella Garlic Bread"
            price={270}
            customizable
          />
          <MenuItem 
            name="Pesto and Sun Dried Tomatoes Baked Garlic Bread"
            price={270}
            customizable
          />
          <MenuItem 
            name="Trio Garlic Bread"
            price={260}
            description="All three types of Garlic bread flavor served in one"
          />
          <MenuItem 
            name="Garlic Knots"
            price={280}
            description="Freshly made Bread knots infused with our house special garlic butter sauce. 7 pieces. Served with a Marina Dip"
          />
          <MenuItem 
            name="Cheese Garlic Knots"
            price={320}
            description="Cheesy filled garlic knots tossed in butter, garlic, parmesan and fresh parsley. Served with marinara dip."
            customizable
          />
          <MenuItem 
            name="Marinara Dip"
            price={60}
            description="Thickened Tomato sauce made with San marzano, paprika, garlic and olive oil. Goes best with our Garlic Bread and Pies."
            customizable
          />
        </MenuSection>

        {/* Veg Pizza */}
        <MenuSection id="veg-pizza" title="Veg Pizza">
          <MenuItem 
            name="Margherita Pie - The Classic Pizza"
            price={430}
            description="San marzano tomato sauce with fresh mozzarella"
            customizable
          />
          <MenuItem 
            name="Ricky's Cheese Pie Pizza"
            price={420}
            description="Domestic cheese on san marzano tomato sauce (Double cheese optional)"
            customizable
          />
          <MenuItem 
            name="Italian Fresh Medley Pizza"
            price={520}
            description="Loaded with vibrant seasonal veggies and garnished with red bell pepper reduction"
            customizable
          />
          <MenuItem 
            name="Makhmali Paneer Pie Pizza"
            price={495}
            description="Soft cubes of paneer roasted and served with our house special makhani sauce"
            customizable
          />
          <MenuItem 
            name="The White Pie Veg Pizza"
            price={495}
            description="Flavourful white sauce pizza with veggies, fresh mozzarella and ricotta"
            customizable
          />
          <MenuItem 
            name="Spicy Funghi Pie Pizza"
            price={470}
            description="Mushrooms on san Marzano tomato sauce with a blast of chilli pepper sauce"
            customizable
          />
          <MenuItem 
            name="Marinara Pizza"
            price={400}
            description="This is a NO CHEESE PIE served with Our House Special Italian Tomato Sauce Pie, Garnished With Basil Leaves (Without Cheese). Traditionally known as the 'TOMATO PIE'"
            customizable
          />
          <MenuItem 
            name="The Vodka Pie"
            price={465}
            description="Our house special Vodka Sauce is graciously spread over our pies giving it a richer, creamier and spicier alternative to traditional san Marzano tomato sauce cheese pie. Disclaimer: It does not have too much vodka, just a little amount to give a bit of acidity. Only suitable for 18 and above adults."
            customizable
          />
          <MenuItem 
            name="Peppery Corn Pie"
            price={540}
            description="This pie layered with spicy marinara sauce features fresh mozzarella, shaved onion, chili paste, and many sweet kernels steamed fresh everyday."
            customizable
          />
          <MenuItem 
            name="Tie Dye Pie (Triple Sauce Pie)"
            price={550}
            description="This new york city's favorite pie is served with bocconcini cheese and 3 different sauces - marina sauce, vodka sauce and a swirl of pesto sauce."
            customizable
          />
          <MenuItem 
            name="Cheese Pie With Spinach And Mushroom"
            price={560}
            description="Creamy garlic white sauce topped with cheddar, fresh mozarella, ricotta and parmasean and served with roasted mushrooms and flavorful baby spinach"
            customizable
          />
        </MenuSection>

        {/* Non Veg Pizza */}
        <MenuSection id="non-veg-pizza" title="Non Veg Pizza">
          <MenuItem 
            name="Butter Chicken Pie Pizza"
            price={550}
            description="Traditional murgh makhani flavours infused with house special makhani sauce"
            customizable
          />
          <MenuItem 
            name="New York's Pepperoni Pie Pizza"
            price={540}
            description="The famous new york style pizza with authentic american style pork peperoni"
            customizable
          />
          <MenuItem 
            name="Chicken Explosion Pizza"
            price={550}
            description="An overdose of chicken cooked in different styles served with rosemary infused oil"
            customizable
          />
          <MenuItem 
            name="The White Pie Non Veg Pizza"
            price={540}
            description="Flavourful white sauce pizza with chicken salami, fresh mozzarella and ricotta"
            customizable
          />
          <MenuItem 
            name="Spicy Lamb Pie Pizza"
            price={590}
            description="Our homage to lahmacun the middle eastern flatbread served with fresh jalapenos"
            customizable
          />
          <MenuItem 
            name="Barbecue Chicken Pie"
            price={540}
            description="Finest recipe of flavourful barbecue chicken, just rightly cooked served in our house special san marzano tomato sauce"
            customizable
          />
          <MenuItem 
            name="Butter Garlic Prawn Pie"
            price={620}
            description="Prawns Tossed with butter and garlic, served with pesto drizzle."
            customizable
          />
          <MenuItem 
            name="Meatball Pie"
            price={580}
            description="We use two different kinds of ground meat, chicken and mutton to make the most flavorful tiny succulent meatballs. Served in san marazano tomato sauce and garnished with fresh jalapenos."
            customizable
          />
          <MenuItem 
            name="Pepperoni Buratta Fiesta"
            price={600}
            description="A pizza that brings together the richness of creamy burrata with the bold flavors of black olives spicy red paprika and tangy jalapeños with our in house special san Marzano sauce"
            customizable
          />
        </MenuSection>

        {/* Square Pies */}
        <MenuSection id="square-pies" title="Square Pies">
          <MenuItem 
            name="Stuffed Crusts x Square Pie"
            price={680}
            description="Loaded with Cheese topped with rich san marazano sauce. The crust is filled with cheese. 6 square Pies."
            customizable
          />
          <MenuItem 
            name="Classic Detroit Squares Pie"
            price={650}
            description="Detroit-style pizza is a rectangular pizza with a thick crust that is crispy and chewy. It comes with a layer of cheese, loaded with thick tomato sauce on top. 6 square pieces"
            customizable
          />
          <MenuItem 
            name="Pepperoni Burrata Square Pie"
            price={720}
            description="Our traditional square pie served with well cooked pepperoni cups (10 pieces pepperoni) and stracciatella cheese (buratta)."
            customizable
          />
          <MenuItem 
            name="Vodka Square Pie"
            price={700}
            description="Our traditional square pie served with our house special vodka sauce."
            customizable
          />
        </MenuSection>

        {/* Veg Pasta */}
        <MenuSection id="pasta" title="Pasta">
          <MenuItem 
            name="Spaghetti Aglio Olio Pasta"
            price={280}
            description="Spaghetti tossed in garlic sauce, chilli flakes, olive oil and garnished with fresh parsley"
            customizable
          />
          <MenuItem 
            name="Spaghetti Al Pomodoro Pasta"
            price={340}
            description="Spaghetti tossed in san marzano tomato sauce, sauteed broccoli and cherry tomato with fresh basil"
            customizable
          />
          <MenuItem 
            name="Veg Lemon and Cream Pasta"
            price={340}
            description="Relishing pasta tossed in creamy rich alfredo sauce with sauteed mushrooms and broccoli"
            customizable
          />
          <MenuItem 
            name="Basil Pesto Pasta"
            price={500}
            description="Fussilli Pasta Tossed In Butter And House Special Creamy Pesto Sauce. Our Pesto Is The Best-O."
            customizable
          />
          <MenuItem 
            name="Pasta Alla Vodka"
            price={420}
            description="A creamy and flavorful pasta dish that perfectly combines the richness of vodka sauce with the comfort of shell pasta."
            customizable
          />
          <MenuItem 
            name="Non Veg Lemon and Cream Pasta"
            price={360}
            description="Relishing pasta tossed in creamy rich alfredo sauce with roasted chicken and sunny side up"
            customizable
          />
        </MenuSection>

        {/* Calzones */}
        <MenuSection id="calzones" title="Calzones">
          <MenuItem 
            name="Veg Calzone"
            price={350}
            description="This half folded pizza contains small dollops of Alfredo sauce, ricotta, fresh mozarella, baby spinach and roasted mushrooms."
            customizable
          />
          <MenuItem 
            name="Non Veg Calzone"
            price={370}
            description="This half folded pizza contains marinara sauce, succulent meatballs which are crumbled, fresh mozzarella and ricotta."
            customizable
          />
        </MenuSection>

        {/* Desserts */}
        <MenuSection id="desserts" title="Desserts">
          <MenuItem 
            name="Pizza A La Nutella"
            price={280}
            description="Mini pizza with nutella, sliced strawberries, roasted almonds and garnished with icing sugar"
          />
          <MenuItem 
            name="Ferrero Rocher Freshly Baked Brownie"
            price={120}
          />
          <MenuItem 
            name="Triple Choco Freshly Baked Brownie"
            price={120}
          />
          <MenuItem 
            name="Kit Kat Freshly Baked Brownie"
            price={120}
          />
          <MenuItem 
            name="Reeses Freshly Baked Brownie"
            price={140}
          />
          <MenuItem 
            name="Freshly Baked Nutella Brownie"
            price={140}
          />
          <MenuItem 
            name="Chocolate Mousse Cups"
            price={150}
          />
          <MenuItem 
            name="Choco Caramel Tart"
            price={200}
          />
          <MenuItem 
            name="Chocolate Overload"
            price={350}
          />
          <MenuItem 
            name="Double Chocolate Walnut Style (DCW) Cookie"
            price={170}
          />
          <MenuItem 
            name="Tiramisu"
            price={320}
            description="A creamy dessert of espresso-soaked ladyfingers surrounded by lightly sweetened whipped cream and a rich mascarpone"
          />
          <MenuItem 
            name="Plum Cake 250gms"
            price={225}
            description="Our Rich plum cake is moist and flavorful, aged and soaked with a variety of dry fruits, nuts, delicately spiced with cinnamon, nutmeg, cloves and old monk. Enjoy a slice of tradition, baked to perfection for a melt-in-your-mouth experience."
          />
        </MenuSection>

        {/* Loca Slice */}
        <MenuSection id="loca-slice" title="Loca Slice (The 18 inches NY Slice)">
          <MenuItem 
            name="Loca Slice 18 inches"
            price={380}
            customizable
          />
        </MenuSection>

        {/* Combos */}
        <MenuSection id="combos" title="Loca's Match Day Combo">
          <MenuItem 
            name="Loca Veg Combo"
            price={899}
            description="Combo - Any Veg pie of your choice, a portion garlic knots (6 pieces) with marinara dip, one triple chocolate brownie and two mini cokes. Please mention which pizza in the notes while ordering."
            customizable
          />
          <MenuItem 
            name="Loca Non veg Combo"
            price={999}
            description="Combo - Any Non Veg pie of your choice, a portion garlic knots (6 pieces) with marinara dip, one triple chocolate brownie and two mini cokes. Please mention which pizza in the notes while ordering."
            customizable
          />
        </MenuSection>
      </main>

      {/* About Section */}
      <section id="about" className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-accent">
            About La Pizza Loca
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            At La Pizza Loca, we bring you authentic Italian flavors with a passion for perfection. 
            Every pizza is crafted with traditional techniques, premium ingredients, and love. 
            From our signature New York-style pies to handmade pasta and decadent desserts, 
            we promise an unforgettable dining experience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-display font-bold mb-4 text-accent">Contact Us</h3>
              <div className="space-y-3 text-lg">
                <p>📞 Phone: +91 97898 08325</p>
                <p>📧 Email: info@lapizzaloca.com</p>
                <p>📍 Address: Chennai, Tamil Nadu</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold mb-4 text-accent">Opening Hours</h3>
              <div className="space-y-2 text-lg">
                <p>Monday - Sunday</p>
                <p className="text-accent font-semibold">11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-sm opacity-80">
              © 2025 La Pizza Loca. All rights reserved. Crafted with ❤️ and passion.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;

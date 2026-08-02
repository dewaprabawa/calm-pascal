export default function DishShowcase() {
  const signatureDishes = [
    {
      title: "Sate Lilit",
      desc: "Minced pork or fish mixed with grated coconut and lemongrass. Grilled over charcoal until charred.",
      img: "/images/satelilit.jpg"
    },
    {
      title: "Ayam Betutu",
      desc: "The king of Balinese dishes. Chicken packed in spice paste and banana leaves, slow-baked for hours.",
      img: "/images/ayambetutu.jpg"
    },
    {
      title: "Bebek Bengil",
      desc: "Our famous 'Dirty Duck'. Rubbed with fermented rice, roasted whole until the skin is incredibly crisp.",
      img: "/images/bebekbengil.jpg"
    },
    {
      title: "Klepon",
      desc: "Soft green rice flour balls filled with liquid palm sugar, covered in freshly grated coconut.",
      img: "/images/klepon.jpg"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#2D4A3E] mb-4">What We Will Cook</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">Your menu varies by season, but you will always master these traditional staples.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureDishes.map((dish, i) => (
            <div key={i} className="group bg-stone-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="h-48 w-full relative overflow-hidden">
                 <div 
                    className="absolute inset-0 bg-stone-300 group-hover:scale-105 transition duration-500"
                    style={{backgroundImage: `url(${dish.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                 ></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{dish.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border-l-4 border-[#2D4A3E] rounded-r">
          <p className="text-stone-700 italic">
            <strong>Note:</strong> We cater to all dietary needs. Vegetarian alternatives and Halal options are available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}

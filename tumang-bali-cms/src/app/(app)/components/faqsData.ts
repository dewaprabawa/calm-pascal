export const faqs = [
  {
    question: 'What is included in the cooking class?',
    answer: 'Our cooking class includes a guided local market tour, a welcome drink, hands-on cooking of 10+ traditional Balinese dishes (both regular and vegetarian options), a full lunch or dinner with the food you prepared, a recipe book to take home, and complimentary hotel pickup from the Ubud area.',
  },
  {
    question: 'Do I need any cooking experience?',
    answer: 'Absolutely not! Our classes are designed for all skill levels — from complete beginners to experienced home cooks. Our friendly local chefs will guide you step-by-step through every recipe. It\'s more about the fun cultural experience than perfection!',
  },
  {
    question: 'Is there a vegetarian menu available?',
    answer: 'Yes! We offer a complete vegetarian menu featuring dishes like Kare Tahu (Tofu Curry), Sate Tempe (Tempeh Satay), Tofu Pepes (Steamed Tofu in Banana Leaf), and many more. Just let us know when booking and we\'ll prepare everything fresh for you.',
  },
  {
    question: 'What time does the class start?',
    answer: 'We offer two sessions daily: a Morning Class starting at 8:00 AM (includes market tour) and an Afternoon Class starting at 2:00 PM. The morning class is our most popular option as you get to experience the vibrant local market!',
  },
  {
    question: 'How do I get to the cooking class?',
    answer: 'We offer complimentary hotel pickup and drop-off from the Ubud area. For guests staying outside Ubud, we can arrange transport for a small additional fee. You can also arrange your own transportation — we\'ll send you our exact location via WhatsApp after booking.',
  },
  {
    question: 'Can I book for a group?',
    answer: 'Absolutely! We welcome groups of any size. For groups of 6 or more, we can arrange a private cooking class exclusively for your party. Contact us via WhatsApp for special group rates and availability.',
  },
  {
    question: 'What should I bring?',
    answer: 'Just bring yourself, comfortable clothing, and a great appetite! We provide aprons, all cooking equipment, and ingredients. We recommend wearing closed-toe shoes for the market tour and bringing sunscreen and a hat for the rice field walk.',
  },
  {
    question: 'How long is the cooking class?',
    answer: 'The full experience lasts approximately 4–5 hours, which includes the market tour (45 mins), rice field walk (30 mins), cooking class (2 hours), and dining time (1 hour). It\'s a complete cultural and culinary immersion!',
  },
  {
    question: 'Is this cooking class suitable for beginners?',
    answer: 'Absolutely. Our hands-on cooking class is designed for complete beginners. Chef Wayan guides you step-by-step, and by the end, you\'ll feel confident cooking traditional Balinese dishes at home. We even provide a recipe booklet!',
  },
  {
    question: 'Do you offer a vegetarian or vegan cooking class?',
    answer: 'Yes! We serve a fully plant-based Balinese menu upon request, featuring dishes like Veggie Sate, Tempe Curry, and local vegetable soups. Just let us know when you book.',
  },
  {
    question: 'Can kids join the cooking class?',
    answer: 'Kids aged 8 and above are very welcome! It\'s a fun, interactive family activity. Little hands love grinding spices and stirring the sate sauce. We provide child-friendly portions and extra guidance.',
  },
  {
    question: 'Will I get a recipe booklet to take home?',
    answer: 'Yes! Every guest receives a printed recipe booklet with all 10+ dishes we cook, so you can recreate the authentic flavors long after your cooking class in Ubud.',
  },
]

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

import {
  PRIVATE_ADULT_MIN2_IDR,
  PRIVATE_ADULT_SOLO_IDR,
  PRIVATE_PRICING_SUMMARY,
  SHARED_ADULT_GROUP_IDR,
  SHARED_ADULT_SOLO_IDR,
  SHARED_PRICING_SUMMARY,
  formatIdr,
} from '@/lib/pricing'

export const faqs = [
  {
    question: 'What is Tumang Bali Cooking Class?',
    answer: `Tumang Bali Cooking Class is a family-run Balinese cooking school in Tumang village near Ubud. Guests take a morning market tour (morning session), walk rice paddies, and cook 10+ traditional dishes with Chef Wayan Sudiana. Shared class: ${SHARED_PRICING_SUMMARY}. Private: ${PRIVATE_PRICING_SUMMARY}. Max 8 guests, English instruction, complimentary Ubud hotel pickup. TripAdvisor Travelers' Choice 2026 with a 5.0 rating from 1500+ reviews.`,
  },
  {
    question: 'How much does a cooking class in Ubud cost?',
    answer: `At Tumang Bali, a shared morning or afternoon class is ${formatIdr(SHARED_ADULT_GROUP_IDR)} per adult for 2+ guests — the best value for couples and friends. Solo (1 adult) is ${formatIdr(SHARED_ADULT_SOLO_IDR)}. A private class is ${formatIdr(PRIVATE_ADULT_SOLO_IDR)} for 1 adult, or ${formatIdr(PRIVATE_ADULT_MIN2_IDR)} for a minimum of 2 participants. Same price on website, WhatsApp, GetYourGuide, Viator, and Airbnb — no commission overcharge. Includes instruction, ingredients, the meal you cook, a recipe booklet, and Ubud-area hotel transport. Morning sessions also include the market tour and rice-field walk.`,
  },
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
    answer: 'We offer two daily sessions: the Morning Class (08:30 AM – 12:30 PM, ~3–4 hours, includes the traditional market tour & lunch) and the Afternoon Class (14:30 PM – 17:30 PM, ~3 hours, hands-on cooking & dinner). The market visit is morning classes only — afternoon guests start with the rice-field walk and cooking. Both options include complimentary Ubud pickup and hands-on preparation of 10+ authentic dishes!',
  },
  {
    question: 'Is the cooking class taught in English?',
    answer: 'Yes. Classes are taught in English by our local chefs, so international guests can follow every step clearly. Our team can also help in Indonesian when needed.',
  },
  {
    question: 'How do I get to the cooking class?',
    answer: 'We offer complimentary hotel pickup and drop-off from the Ubud area. For guests staying outside Ubud, we can arrange transport for a small additional fee. You can also arrange your own transportation — we\'ll send you our exact location via WhatsApp after booking.',
  },
  {
    question: 'Can I book for a group or a private class?',
    answer: `Yes. Shared classes: ${SHARED_PRICING_SUMMARY}. Private: ${PRIVATE_PRICING_SUMMARY}. For larger exclusive groups contact us via WhatsApp.`,
  },
  {
    question: 'What should I bring?',
    answer: 'Just bring yourself, comfortable clothing, and a great appetite! We provide aprons, all cooking equipment, and ingredients. We recommend wearing closed-toe shoes for the market tour and bringing sunscreen and a hat for the rice field walk.',
  },
  {
    question: 'How long is the cooking class?',
    answer: 'Our Morning Class lasts approximately 3–4 hours (including the 45-minute Ubud market tour — morning only — plus rice field walk, 2 hours of cooking, and dining time). Our Afternoon Class is a focused 3-hour experience with no market visit: rice field walk, cooking masterclass, and dinner feast.',
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
    answer: `Kids aged 8 and above are very welcome. Shared adult rates apply (${SHARED_PRICING_SUMMARY}). On private bookings kids pay the same as adults (${PRIVATE_PRICING_SUMMARY}). Little hands love grinding spices and wrapping sate.`,
  },
  {
    question: 'Will I get a recipe booklet to take home?',
    answer: 'Yes! Every guest receives a printed recipe booklet with all 10+ dishes we cook, so you can recreate the authentic flavors long after your cooking class in Ubud.',
  },
  {
    question: 'What is your cancellation and refund policy?',
    answer: 'Cancellations made at least 24 hours before the class starts receive a 100% refund for direct Tumang Bali bookings. Cancel via WhatsApp (+62 822-1013-2418) or email tumangbalicookingclass@gmail.com. Bookings made on GetYourGuide, Viator, Airbnb, or other partners follow that platform’s refund rules. Full details are on our Refund Policy page.',
  },
]

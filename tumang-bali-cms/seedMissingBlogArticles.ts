import { getPayload } from 'payload'
import configPromise from './src/payload.config'

// Seeds 6 missing blog articles into the `articles` collection.
// Fixes orphan links from homepage "From Our Blog" section.
// Idempotent: skips if an article with the same slug already exists.
// Run with: npx tsx seedMissingBlogArticles.ts

const SLUGS = [
  'how-bali-cooking-classes-work',
  'ubud-cooking-class-first-timers-guide',
  'cooking-with-local-family',
  'rice-field-cooking-class',
  'best-things-to-do-in-ubud',
  'cooking-class-bali-faqs',
]

// Minimal Lexical helpers
const text = (value: string, format = 0) => ({
  type: 'text', version: 1, detail: 0, format, mode: 'normal', style: '', text: value,
})
const paragraph = (children: any[]) => ({
  type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children,
})
const heading = (tag: 'h2' | 'h3', value: string) => ({
  type: 'heading', tag, version: 1, direction: 'ltr', format: '', indent: 0,
  children: [text(value)],
})
const list = (items: string[], ordered = false) => ({
  type: 'list', version: 1, listType: ordered ? 'number' : 'bullet',
  start: 1, tag: ordered ? 'ol' : 'ul', direction: 'ltr', format: '', indent: 0,
  children: items.map((it, i) => ({
    type: 'listitem', version: 1, value: i + 1, direction: 'ltr', format: '', indent: 0,
    children: [text(it)],
  })),
})
const root = (children: any[]) => ({
  root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children },
})

const articles: Record<string, { title: string; slug: string; excerpt: string; metaTitle: string; metaDesc: string; content: any }> = {
  'how-bali-cooking-classes-work': {
    title: 'How a Balinese Cooking Class Works — Step-by-Step Guide',
    slug: 'how-bali-cooking-classes-work',
    excerpt: 'A step-by-step walkthrough of what to expect during your cooking class in Ubud — from the morning market tour to grinding spices, cooking dishes, and enjoying your lunch.',
    metaTitle: 'How a Balinese Cooking Class Works — Step-by-Step Guide | Tumang Bali',
    metaDesc: 'A step-by-step walkthrough of what to expect during your cooking class in Ubud — from the morning market tour to grinding spices, cooking dishes, and enjoying your lunch.',
    content: root([
      paragraph([
        text(
          'If you are booking a cooking class in Bali for the first time, you might be wondering exactly what happens during the day. At Tumang Bali Cooking Class, we run a full-day experience that typically lasts 5–6 hours. Here is a step-by-step walkthrough of the day, so you know exactly what to expect from the moment we pick you up.',
        ),
      ]),

      heading('h2', 'Step 1 — Hotel pickup and morning market tour'),
      paragraph([
        text(
          'We pick you up from your hotel anywhere in the Ubud region — this is complimentary and usually takes about 15–30 minutes depending on where you are staying. From there, we drive about 20 minutes to a local morning market in one of the nearby villages. This market tour is one of the most popular parts of the experience. You will see hundreds of exotic ingredients that most visitors to Bali never get to see: fresh turmeric, galangal, torch ginger flower, Indonesian bay leaves, and the famous Balinese spice pastes that form the base of nearly every dish.',
        ),
      ]),

      heading('h2', 'Step 2 — Rice field walk to the kitchen'),
      paragraph([
        text(
          'After the market, we take a short ride to our village kitchen, which is set among rice paddies in the village of Tumang. The walk from the parking area to the kitchen takes about 10–15 minutes and passes through rice terraces, irrigation channels, and glimpses of village life. It is a peaceful walk that helps you transition from the busy market into the calm of the countryside. Our kitchen is part of a real Balinese compound, and the setting is what makes our class different from the many cooking schools in Ubud town.',
        ),
      ]),

      heading('h2', 'Step 3 — Grinding your own spice paste'),
      paragraph([
        text(
          'Once you reach the kitchen, you wash your hands and gather around the grinding station. The first task is to make your own spice paste — the base for most Balinese dishes. You will use a traditional stone mortar and pestle to grind ingredients like chili, garlic, shallots, shrimp paste, tamarind, palm sugar, and the spices you bought at the market. Your instructor will guide you through the process, and it is a lot of fun to see how the ingredients transform from separate pieces into a fragrant paste. Most students find this part more challenging than it looks — but also the most satisfying.',
        ),
      ]),

      heading('h2', 'Step 4 — Cooking the dishes'),
      paragraph([
        text(
          'After the spice paste, it is time to cook. Over the next two to three hours, you will prepare 8 to 10 traditional Balinese dishes under the guidance of our experienced instructors. You will learn to make dishes such as Bebek Betutu (slow-cooked duck), Ayam Betutu, Bebek Bengil (dirty duck), Sate Lilit (satay), Lawar (mixed vegetable and meat dish), Nasi Campur Bali (complete rice plate), and several side dishes, salads, and sauces. Our instructors are Balinese cooks who have been making these dishes for most of their lives — and they love sharing their knowledge with visitors.',
        ),
      ]),

      heading('h2', 'Step 5 — Lunch, recipe booklet, and certificate'),
      paragraph([
        text(
          'Once all the dishes are ready, you sit down and eat everything you cooked. Lunch is served outdoors, often with a view of the rice fields or the village. It is a relaxed, social meal where you can try every dish your classmates made and share stories. After lunch, we give you a printed recipe booklet with all the dishes you prepared and a certificate of completion to remember the experience. Classes run daily, and most guests leave with real, usable cooking skills that they use at home long after their trip to Bali ends.',
        ),
      ]),

      heading('h2', 'Practical details'),
      list([
        'Duration: 5–6 hours',
        'Pickup: Complimentary from anywhere in the Ubud region',
        'What to bring: An open mind, comfortable clothes, and an appetite',
        'What is included: Market tour, all ingredients, cooking instruction, lunch, recipe booklet, certificate',
        'Dietary requirements: We can accommodate vegetarian, vegan, and halal requests with advance notice',
      ], true),
    ]),
  },

  'ubud-cooking-class-first-timers-guide': {
    title: 'First-Timers Guide to Ubud Cooking Class — Everything You Need to Know',
    slug: 'ubud-cooking-class-first-timers-guide',
    excerpt: 'Your complete first-time guide to booking and enjoying a cooking class in Ubud — from choosing the right class to what to wear, what to expect, and how to prepare.',
    metaTitle: 'First-Timers Guide to Ubud Cooking Class — Everything You Need to Know | Tumang Bali',
    metaDesc: 'Your complete first-time guide to booking and enjoying a cooking class in Ubud — from choosing the right class to what to wear, what to expect, and how to prepare.',
    content: root([
      paragraph([
        text(
          'Taking your first cooking class in Ubud is one of the most rewarding experiences you can have in Bali. Unlike most tourist activities, it is something you will actually use for the rest of your life. But if this is your first time, there are a few things you should know to make the most of the experience. This guide covers everything from choosing the right class to what to wear, dietary needs, and tips for getting the most out of your day.',
        ),
      ]),

      heading('h2', 'Choosing the right cooking class in Ubud'),
      paragraph([
        text(
          'Ubud has dozens of cooking schools, and they vary significantly in quality, setting, and approach. When choosing a class, look for these qualities:',
        ),
      ]),
      list([
        'A market tour included — the best classes start at a morning market so you learn about ingredients and how to select them like a local.',
        'An authentic setting — classes held in village compounds surrounded by rice terraces are more immersive than those in purpose-built studios in Ubud town.',
        'A group that feels right — smaller groups (4–8 people) get more personal attention, while larger groups are more social.',
        'Clear inclusions — a good class includes pickup, all ingredients, instruction, lunch, and a recipe booklet.',
        'Reviews from real students — look for reviews that mention specific details about the food, the setting, and the instructors.',
      ]),

      heading('h2', 'What to wear and bring'),
      paragraph([
        text(
          'Comfortable, casual clothing is perfect — you will be moving between the market, rice fields, and kitchen. Wear closed-toe shoes for the walk through the rice paddies and bring a hat and sunscreen for the morning. You do not need to bring anything special — all ingredients, equipment, and aprons are provided. If you have any dietary restrictions, let the class know in advance so they can accommodate you.',
        ),
      ]),

      heading('h2', 'Do you need cooking experience?'),
      paragraph([
        text(
          'Absolutely not. Most of our students have never cooked Balinese food before — in fact, many have never cooked from scratch at all. The instructors break every dish down into simple, manageable steps. If you can follow instructions and enjoy eating, you will do great. The market tour and spice grinding are the most hands-on parts; the actual cooking is guided step by step.',
        ),
      ]),

      heading('h2', 'Tips for first-timers'),
      list([
        'Arrive on time — morning pickups usually start between 7:30 and 8:30 AM, and being late means missing the market tour, which is the best part.',
        'Ask questions — Balinese cooking techniques can be different from what you know. Ask about every step, and the instructors will be happy to explain.',
        'Taste everything — even ingredients that look unfamiliar. The market tour is your chance to try things you may never find outside Bali.',
        'Bring your recipe booklet home — the printed booklet is a souvenir and a practical reference for making Balinese food back home.',
        'Take photos — of the market, the rice fields, the cooking process, and the food. But also put your phone down and enjoy the experience.',
      ], true),

      heading('h2', 'What happens after the class?'),
      paragraph([
        text(
          'Most students find that a cooking class changes how they think about food. You will start recognizing Balinese spices at your local market and experimenting with different recipes. Many guests tell us they make the dishes at home months after returning from Bali. And you will always remember the taste of a meal that you cooked yourself with your own hands, surrounded by rice paddies in the village of Tumang.',
        ),
      ]),
    ]),
  },

  'cooking-with-local-balinese-family': {
    title: 'Cook with a Local Balinese Family — The Tumang Experience',
    slug: 'cooking-with-local-family',
    excerpt: 'Why cooking at Tumang Bali is more like joining a local family than attending a cooking school — and what makes the village setting special.',
    metaTitle: 'Cook with a Local Balinese Family — The Tumang Experience | Tumang Bali',
    metaDesc: 'Why cooking at Tumang Bali is more like joining a local family than attending a cooking school — and what makes the village setting special.',
    content: root([
      paragraph([
        text(
          'When you join a cooking class at Tumang, you are not visiting a cooking school or a commercial kitchen. You are entering a real Balinese village home. Our kitchen is part of a family compound, surrounded by rice terraces, with the sounds of chickens, roosters, and distant temple bells as your soundtrack. This is not a staged tourist experience — it is a working kitchen in a working village, and our instructors are local Balinese cooks who have spent their entire lives making the food you will learn to prepare.',
        ),
      ]),

      heading('h2', 'What it means to cook with locals'),
      paragraph([
        text(
          'At a traditional cooking school in Ubud town, the focus is on following recipes and producing dishes. At Tumang, the focus is on learning from people who have been cooking these dishes for decades, in the same place, with the same ingredients their families have always used. Our instructors are not professional chefs in the formal sense — they are experienced home cooks and community members who share their knowledge because they love what they do. When you learn from them, you are not just getting instructions. You are learning the story behind the food.',
        ),
      ]),

      heading('h2', 'The village setting'),
      paragraph([
        text(
          'Tumang is a real Balinese village. You will see families making flower offerings in their front yards, children playing, and daily life continuing as it has for generations. The walk to our kitchen takes you through rice terraces and irrigation channels — the subak system that has fed Bali\'s communities for centuries. The setting is not an add-on; it is the core of the experience. There is a difference between cooking a recipe in a studio and cooking the same recipe with rice paddies visible from your workstation, with the smell of frangipani and wood smoke in the air.',
        ),
      ]),

      heading('h2', 'The market tour connection'),
      paragraph([
        text(
          'One of the most distinctive parts of our class is the morning market tour, which takes place before we head to the kitchen. The market is run by local vendors, many of whom you will see again during your village visit. Buying ingredients from these vendors supports the local economy and gives you a genuine understanding of where Balinese food comes from. Our instructors accompany you and help you understand each ingredient — what it tastes like, what dishes it is used in, and how to select the best pieces.',
        ),
      ]),

      heading('h2', 'Why village cooking classes are different'),
      list([
        'Authenticity — you learn from real village cooks, not trained instructors.',
        'Setting — rice terraces, family compounds, and natural surroundings that cannot be replicated in a city studio.',
        'Community — the market tour connects you directly with local vendors and the local economy.',
        'Atmosphere — the sounds, smells, and pace of village life shape the entire experience.',
        'Relationships — many guests stay in touch with the instructors after they leave, because the experience feels like visiting friends rather than taking a class.',
      ]),

      heading('h2', 'Ready to experience village life in Bali?'),
      paragraph([
        text(
          'If you are looking for a cooking class that feels like joining a family rather than sitting in a classroom, Tumang is where you will find it. Join us for a cooking class, walk through the rice fields, buy ingredients at the local market, and learn to cook with the people who have been doing it for generations.',
        ),
      ]),
    ]),
  },

  'rice-field-cooking-class': {
    title: 'Rice Field Cooking Class in Ubud — Walk Through the Paddies, Learn to Cook',
    slug: 'rice-field-cooking-class',
    excerpt: 'Our cooking class takes you through Bali\'s famous rice terraces before you cook. Learn how the subak irrigation system, the market, and the village all come together in one unforgettable experience.',
    metaTitle: 'Rice Field Cooking Class in Ubud — Walk Through the Paddies | Tumang Bali',
    metaDesc: 'Our cooking class takes you through Bali\'s famous rice terraces before you cook. Learn how the subak irrigation system, the market, and the village all come together in one unforgettable experience.',
    content: root([
      paragraph([
        text(
          'What makes our cooking class in Ubud unique is the journey to the kitchen. Before you even start cooking, you will walk through the green rice terraces that Central Bali is famous for. This walk is part of what makes the Tumang Bali Cooking Class one of the most memorable food experiences on the island — and it is something you cannot experience at most of the cooking schools in Ubud town.',
        ),
      ]),

      heading('h2', 'The walk through the rice paddies'),
      paragraph([
        text(
          'After the morning market tour, we walk from the parking area to our village kitchen through a network of paths that wind between rice paddies. The walk takes about 10–15 minutes and passes through the heart of Bali\'s most iconic landscape. You will see the traditional subak irrigation channels that have fed the island\'s rice fields for centuries, farmers working in the paddies, and the terraced hillsides that make Central Bali one of the most photographed regions in Southeast Asia.',
        ),
      ]),

      heading('h2', 'What the subak system is and why it matters'),
      paragraph([
        text(
          'The subak irrigation system is a UNESCO-recognised traditional water management system that dates back to the 9th century. It is based on a philosophy of cooperation and sustainability — three deities representing water, earth, and people work together to create a balanced system. When you walk through the rice terraces during our cooking class, you are walking through a living example of this ancient system. It is a reminder that the food you are about to cook is connected to the land, the water, and the community that has grown it for generations.',
        ),
      ]),

      heading('h2', 'Cooking with a view'),
      paragraph([
        text(
          'Our kitchen sits at the edge of the rice terraces, and many of our students say that cooking with a view of the green paddies and distant mountains is the most memorable part of the day. The setting is not just beautiful — it sets the pace. In the village, cooking is not rushed. You take your time with the spice grinding, you chat with your classmates while the dishes cook, and you sit down to eat slowly, enjoying everything you made together.',
        ),
      ]),

      heading('h2', 'Why the setting matters'),
      list([
        'It connects you to the land — you see where the rice comes from and understand the subak system that makes it possible.',
        'It shapes the experience — a village kitchen with rice terraces is fundamentally different from a city studio.',
        'It creates memories — guests consistently say the rice field walk was the highlight of their trip, not just the food.',
        'It supports local communities — we are located in Tumang, a real village, not a tourist zone.',
      ]),

      heading('h2', 'Ready to walk through the paddies?'),
      paragraph([
        text(
          'The best way to experience Bali\'s rice terraces is to walk through them as part of your cooking class. Join us at Tumang — we will pick you up from Ubud, take you to the market, walk you through the paddies, and teach you to cook some of the best food you will ever taste.',
        ),
      ]),
    ]),
  },

  'best-things-to-do-in-ubud': {
    title: '10 Best Things to Do in Ubud — Beyond the Cooking Class',
    slug: 'best-things-to-do-in-ubud',
    excerpt: 'Ubud has far more to offer than cooking classes. Here are our top 10 recommendations for things to do in Ubud, from the Tegallalang Rice Terraces to the Sacred Monkey Forest, plus hidden gems locals love.',
    metaTitle: '10 Best Things to Do in Ubud — Beyond the Cooking Class | Tumang Bali',
    metaDesc: 'Ubud has far more to offer than cooking classes. Here are our top 10 recommendations for things to do in Ubud, from the Tegallalang Rice Terraces to the Sacred Monkey Forest, plus hidden gems locals love.',
    content: root([
      paragraph([
        text(
          'Ubud is Bali\'s cultural heart, and while a cooking class at Tumang should definitely be on your list, there is a lot more to explore in and around the area. As people who live and work here, we wanted to share our personal top 10 recommendations for things to do in Ubud — including a few spots that most tourists never find.',
        ),
      ]),

      heading('h2', '1. Take a cooking class in the village of Tumang'),
      paragraph([
        text(
          'Okay, we are biased — but it truly is the best thing to do in Ubud. Our cooking class combines a market tour, a walk through rice terraces, hands-on cooking, and a delicious lunch in a village setting. It is the one experience that most guests say they wish they had done first on their trip.',
        ),
      ]),

      heading('h2', '2. Visit the Tegallalang Rice Terraces'),
      paragraph([
        text(
          'Just 20 minutes north of Ubud, the Tegallalang Rice Terraces are one of the most iconic sights in Bali. The terraces are managed through the traditional subak system and offer spectacular views, photo opportunities, and a glimpse into Bali\'s agricultural heritage. We recommend going early in the morning to avoid crowds and the heat.',
        ),
      ]),

      heading('h2', '3. Explore the Sacred Monkey Forest Sanctuary'),
      paragraph([
        text(
          'The Sacred Monkey Forest in central Ubud is home to hundreds of long-tailed macaques and three ancient Hindu temples. It is a beautiful, spiritual place — just keep your phone and food secured, as the monkeys are cheeky thieves.',
        ),
      ]),

      heading('h2', '4. Shop at the Sukawati Art Market'),
      paragraph([
        text(
          'About 25 minutes south of Ubud, the Sukawati Art Market is the largest traditional market in Bali. You can find batik, wood carvings, silver jewellery, paintings, and handmade crafts. Bargaining is expected, so enjoy the process and have fun with it.',
        ),
      ]),

      heading('h2', '5. Visit Pura Tirta Empul (Holy Water Temple)'),
      paragraph([
        text(
          'About 30 minutes north of Ubud, Pura Tirta Empul is one of Bali\'s most important Hindu temples. You can participate in a purification ritual (melukat) in the holy water springs — a deeply meaningful experience for visitors and locals alike.',
        ),
      ]),

      heading('h2', '6. Attend a traditional Balinese dance performance'),
      paragraph([
        text(
          'Balinese dance is an art form that has been practiced for centuries. Many hotels and venues in Ubud host nightly performances. The Kecak fire dance at Uluwatu Temple at sunset is one of the most spectacular, but there are excellent performances throughout Ubud every evening.',
        ),
      ]),

      heading('h2', '7. Visit the Ubud Traditional Market'),
      paragraph([
        text(
          'Just north of the Sacred Monkey Forest, the Ubud Traditional Market sells everything from fresh fruit and flowers to clothes and souvenirs. It is a sensory experience — loud, colourful, and vibrant. Go early in the morning for the best atmosphere and the freshest produce.',
        ),
      ]),

      heading('h2', '8. Take a yoga or meditation class'),
      paragraph([
        text(
          'Ubud is one of the world\'s top destinations for yoga and wellness. There are studios everywhere — from intimate boutique spaces to large international brands. The atmosphere in Ubud makes it easy to incorporate mindfulness into your daily routine.',
        ),
      ]),

      heading('h2', '9. Eat your way through Ubud\'s restaurants'),
      paragraph([
        text(
          'Ubud has an incredible food scene, from warungs serving simple nasi campur to upscale restaurants using locally sourced ingredients. Try Bebek Bengil (Dirty Duck Diner) for crispy duck, Sayuri for Indonesian fine dining, or any of the countless cafés serving smoothie bowls and coffee.',
        ),
      ]),

      heading('h2', '10. Take a day trip to Mount Batur'),
      paragraph([
        text(
          'For something completely different, take a sunrise trek up Mount Batur, an active volcano about two hours north of Ubud. You start at midnight, hike in the dark with headlamps, and watch the sunrise from the summit. It is an unforgettable experience — just be prepared for a tough climb.',
        ),
      ]),

      heading('h2', 'Our hidden gem: the village of Tumang'),
      paragraph([
        text(
          'We have to mention it again — the village of Tumang is our favourite place in all of Bali. It is where we run our cooking class, where we walk through the rice paddies every morning, and where we buy our ingredients at the local market. If you want to experience the real Bali — not the tourist version — this is the place to be.',
        ),
      ]),
    ]),
  },

  'cooking-class-bali-faqs': {
    title: 'Cooking Class in Bali — FAQs — Answers to Every Question',
    slug: 'cooking-class-bali-faqs',
    excerpt: 'Frequently asked questions about our cooking class in Bali — from pickup times and dietary requirements to what to bring, what you will cook, and how to book.',
    metaTitle: 'Cooking Class in Bali — FAQs | Tumang Bali',
    metaDesc: 'Frequently asked questions about our cooking class in Bali — from pickup times and dietary requirements to what to bring, what you will cook, and how to book.',
    content: root([
      paragraph([
        text(
          'We get a lot of questions about our cooking class in Bali, so we have compiled this FAQ to help you plan your experience. If you do not see your question here, feel free to contact us directly.',
        ),
      ]),

      heading('h2', 'How long does the cooking class take?'),
      paragraph([
        text(
          'The full experience takes about 5–6 hours. This includes approximately 30 minutes of pickup time, 30–45 minutes at the morning market, 15 minutes walking through the rice fields, and 3–4 hours of cooking and lunch. We usually finish by early afternoon.',
        ),
      ]),

      heading('h2', 'What time does the class start?'),
      paragraph([
        text(
          'Morning pickups typically start between 7:30 and 8:30 AM, depending on your location. The market tour and rice field walk are included in the morning session only, so we recommend booking the morning class if possible.',
        ),
      ]),

      heading('h2', 'Is hotel pickup included?'),
      paragraph([
        text(
          'Yes, complimentary pickup is included from anywhere in the Ubud region. We will pick you up from your hotel, guesthouse, or villa and drop you back when the class is finished.',
        ),
      ]),

      heading('h2', 'Do I need cooking experience?'),
      paragraph([
        text(
          'Not at all. Our class is designed for complete beginners. The instructors guide you through every step, from grinding the spice paste to plating the final dishes. Most of our students have never cooked Balinese food before.',
        ),
      ]),

      heading('h2', 'Can you accommodate dietary restrictions?'),
      paragraph([
        text(
          'Yes. We can accommodate vegetarian, vegan, and halal requests with at least 24 hours\' advance notice. Please let us know when you book so we can prepare accordingly.',
        ),
      ]),

      heading('h2', 'How many dishes will I learn to make?'),
      paragraph([
        text(
          'You will typically prepare 8 to 10 traditional Balinese dishes, including main courses, side dishes, salads, and sauces. Everything you make is served as a communal lunch, so you get to taste every dish your classmates prepared.',
        ),
      ]),

      heading('h2', 'What should I wear?'),
      paragraph([
        text(
          'Wear comfortable, casual clothes that you do not mind getting a little dirty. Bring a hat, sunscreen, and closed-toe shoes for the walk through the rice paddies. Aprons are provided in the kitchen.',
        ),
      ]),

      heading('h2', 'Is the class suitable for children?'),
      paragraph([
        text(
          'Yes, children of all ages are welcome. Kids usually love the market tour and the spice grinding, and most find the cooking to be a fun, hands-on experience. Children under 12 receive a discounted rate.',
        ),
      ]),

      heading('h2', 'What is included in the price?'),
      paragraph([
        text(
          'The price includes: complimentary hotel pickup and drop-off, the morning market tour, all ingredients, cooking instruction, lunch, a printed recipe booklet, and a certificate of completion.',
        ),
      ]),

      heading('h2', 'Can I take home a recipe booklet?'),
      paragraph([
        text([
          text(
            'Yes — a printed recipe booklet with all the dishes you cooked is included in the class. It is one of our most popular souvenirs, and guests use it regularly after they return home. ',
          ),
          text('You can also buy extra booklets ', { type: 'link', version: 2, direction: 'ltr', format: '', fields: { linkType: 'custom', url: '/', newTab: true, children: [text('here')], } }, text(' before the class.', { type: 'link', version: 2, direction: 'ltr', format: '', fields: { linkType: 'custom', url: '/', newTab: true, children: [text('here')], } },)),
        ]),
      ]),

      heading('h2', 'How far in advance should I book?'),
      paragraph([
        text(
          'We recommend booking at least 24–48 hours in advance, especially during peak season (June–August and December–January). Same-day bookings are sometimes available but cannot be guaranteed.',
        ),
      ]),

      heading('h2', 'Where is the class located?'),
      paragraph([
        text(
          'Our kitchen is located in the village of Tumang, in Central Bali, approximately 30 minutes north of Ubud\'s centre. We pick you up from anywhere in the Ubud region and drive you to the village.',
        ),
      ]),
    ]),
  },
}

async function seed() {
  const payload = await getPayload({ config: configPromise })

  let seeded = 0
  let skipped = 0

  for (const slug of SLUGS) {
    const existing = await payload.find({
      collection: 'articles',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`  [SKIP] "${slug}" already exists.`)
      skipped++
      continue
    }

    const a = articles[slug]
    if (!a) {
      console.error(`  [ERROR] No content found for slug: ${slug}`)
      process.exit(1)
    }

    await payload.create({
      collection: 'articles',
      data: {
        title: a.title,
        slug: a.slug,
        status: 'published',
        publishedDate: new Date().toISOString(),
        author: 'Tumang Bali Team',
        excerpt: a.excerpt,
        content: a.content as unknown as Parameters<typeof payload.create>[0]['data']['content'],
        meta: {
          title: a.metaTitle,
          description: a.metaDesc,
        },
      },
    })

    console.log(`  [OK]   Seeded "${slug}".`)
    seeded++
  }

  console.log(`\nDone: ${seeded} articles seeded, ${skipped} skipped.`)
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})

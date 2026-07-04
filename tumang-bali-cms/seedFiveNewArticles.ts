import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import fs from 'fs'
import path from 'path'

// --- Lexical helpers --------------------------------------------------------
type LexNode = Record<string, unknown>

const text = (value: string, format = 0): LexNode => ({
  type: 'text',
  version: 1,
  detail: 0,
  format,
  mode: 'normal',
  style: '',
  text: value,
})

const link = (value: string, url: string): LexNode => ({
  type: 'link',
  version: 2,
  fields: { url, newTab: false, linkType: 'custom' },
  direction: 'ltr',
  format: '',
  indent: 0,
  children: [text(value)],
})

const paragraph = (children: LexNode[]): LexNode => ({
  type: 'paragraph',
  version: 1,
  direction: 'ltr',
  format: '',
  indent: 0,
  children,
})

const heading = (tag: 'h2' | 'h3', value: string): LexNode => ({
  type: 'heading',
  tag,
  version: 1,
  direction: 'ltr',
  format: '',
  indent: 0,
  children: [text(value)],
})

const list = (items: string[], ordered = false): LexNode => ({
  type: 'list',
  version: 1,
  listType: ordered ? 'number' : 'bullet',
  start: 1,
  tag: ordered ? 'ol' : 'ul',
  direction: 'ltr',
  format: '',
  indent: 0,
  children: items.map((it, i) => ({
    type: 'listitem',
    version: 1,
    value: i + 1,
    direction: 'ltr',
    format: '',
    indent: 0,
    children: [text(it)],
  })),
})

const root = (children: LexNode[]): LexNode => ({
  root: {
    type: 'root',
    version: 1,
    direction: 'ltr',
    format: '',
    indent: 0,
    children,
  },
})

// --- Seed function ----------------------------------------------------------
async function seed() {
  const payload = await getPayload({ config: configPromise })

  const newArticles = [
    {
      slug: 'rice-field-cooking-class',
      title: 'Rice Field Cooking Class in Ubud — Outdoor Balinese Experience',
      author: 'Chef Wayan',
      excerpt: 'Cook outdoors among the rice terraces of Ubud — our rice field cooking class walks through green paddies, starts at the morning market, and ends with a shared feast overlooking the fields.',
      imageFile: 'rice-field-class.webp',
      imageAlt: 'Traditional outdoor cooking class overlooking rice terraces in Ubud, Bali',
      metaTitle: 'Rice Field Cooking Class in Ubud — Outdoor Balinese Experience',
      metaDesc: 'Cook outdoors among the rice terraces of Ubud — our rice field cooking class walks through green paddies, starts at the morning market, and ends with a shared feast overlooking the fields.',
      content: root([
        paragraph([text("A rice field cooking class you won't forget.", 1)]),
        paragraph([
          text("Most cooking classes happen indoors — in a kitchen, in a hotel room, in a studio. Ours starts in the green, surrounded by the rice paddies that Ubud is famous for. Outdoors, open-air, under the shade of a warung (traditional Balinese kitchen) with the paddies stretching out in every direction.")
        ]),
        heading('h2', '1. The morning market — before it gets crowded'),
        paragraph([
          text("The morning class starts at "),
          text("8:00 AM", 1),
          text(" with hotel pickup. We drive to a real market on the edge of Ubud — the one locals use, not the souvenir stalls near the centre. Vendors are setting up, early customers are bargaining, and the air is full of fresh turmeric, kaffir lime leaves, chilies and things you've never seen.")
        ]),
        paragraph([
          text("Your guide points out the ingredients that will become your lunch — turmeric for colour and anti-inflammatory properties, galangal that tastes nothing like regular ginger, kencur (lesser galangal) that's a Bali specialty, pandan for aroma. You carry some of it in your hands as we walk. This is the part that most classes don't include, and it's the one you'll talk about afterwards.")
        ]),
        paragraph([
          text("If you've searched for "),
          text("Bali cooking class with market tour", 1),
          text(" or "),
          text("traditional Balinese cooking class", 1),
          text(", this is the experience that sits at the heart of it all. No market tour, no spice identification, no real context for the dishes you'll cook.")
        ]),
        heading('h2', '2. A walk through the rice terraces'),
        paragraph([
          text("From the market, we take a short walk through the rice paddies to the cooking area. You'll pass fields at different stages — newly flooded, bright green shoots, then taller stalks turning gold ready for harvest. Balinese farmers work on a subak system, the ancient water-sharing cooperative that UNESCO recognises as a cultural landscape.")
        ]),
        paragraph([
          text("It's a gentle walk — 10–15 minutes, flat path. Wear shoes you don't mind getting a little dusty. If you're joining the "),
          text("rice paddy walk with cooking class", 1),
          text(", this is the moment. You'll see how Balinese farmers grow the jasmine rice that'll feature in your meal later.")
        ]),
        heading('h2', '3. The outdoor cooking area'),
        paragraph([
          text("This is where most cooking classes in Ubud wouldn't take you. Our kitchen is open-air but sheltered — a warung with charcoal grills, stone mortars, and a long table where everyone sits together. The walls are open, so you get the breeze and the views. It's cool even in the morning heat.")
        ]),
        paragraph([
          text("You'll cook by hand: "),
          text("base genep", 1),
          text(" spice paste ground in a stone mortar (the real way, not a food processor), "),
          text("sate lilit", 1),
          text(" pressed onto lemongrass stalks, curry simmered in a clay pot, and the "),
          text("sambal matah", 1),
          text(" that needs no cooking at all. Ten to twelve dishes by the time you're done, all built on the spice paste you made yourself.")
        ]),
        paragraph([
          text("This is what people mean when they search for "),
          text("outdoor cooking class Ubud", 1),
          text(" or "),
          text("Balinese kitchen cooking class", 1),
          text(" — the genuine article, not a staged setup for tourists.")
        ]),
        heading('h2', '4. Eating together, over the paddies'),
        paragraph([
          text("The food goes onto banana leaves on a low table in the shade. Everyone sits cross-legged or on a cushion — no chairs, no plates, just the communal way. You pass dishes around, you eat with your hands or a spoon and fork, you talk about what you just made.")
        ]),
        paragraph([
          text("This is the feast: "),
          text("base genep", 1),
          text(", "),
          text("sate lilit", 1),
          text(", chicken or tofu curry in coconut sauce, "),
          text("urab", 1),
          text(" (coconut vegetable salad), "),
          text("sambal matah", 1),
          text(", sambal goreng, pepes (steamed in banana leaf), and bubur injin (black rice pudding) for dessert. The full menu changes with the season.")
        ]),
        paragraph([
          text("After lunch there's no rush. Stay as long as you like. The rice fields don't go anywhere.")
        ]),
        heading('h2', 'Frequently Asked Questions'),
        paragraph([text("Q: How long is the rice field cooking class?", 1)]),
        paragraph([text("About 5 hours total: pickup at 8 AM, market tour, rice field walk, two hours of hands-on cooking, and the shared feast. It ends around 1 PM.")]),
        paragraph([text("Q: Is the rice paddy walk difficult?", 1)]),
        paragraph([text("No — it's a gentle, flat walk through established pathways between the terraces. About 10–15 minutes. Wear comfortable shoes and bring a hat.")]),
        paragraph([text("Q: What if I don't like being outdoors?", 1)]),
        paragraph([text("The cooking area is fully sheltered — it has a roof and open sides, so it's cool and dry. You're in the fresh air with the views but you're not exposed to sun or rain.")]),
        paragraph([text("Q: Can I do this class if I'm vegetarian?", 1)]),
        paragraph([
          text("Absolutely. Every dish has a vegetarian and vegan version. The menu changes slightly — we swap meat for tempeh and extra vegetables — but it's just as full and flavourful. See our "),
          link("vegetarian & vegan page", "/vegetarian-cooking-class-ubud"),
          text(".")
        ]),
        paragraph([text("Q: How much does the rice field cooking class cost?", 1)]),
        paragraph([
          text("The morning class with market tour is IDR 450k (~$29) per person. Afternoon (no market) is IDR 400k (~$26). Both include a full meal, recipe book, and free Ubud pickup. See "),
          link("our pricing page", "/cooking-class-with-market-tour-ubud"),
          text(" for full details.")
        ]),
        heading('h2', 'Cook where the rice grows.'),
        paragraph([
          text("Morning market tour, rice field walk, hands-on class and a feast overlooking the paddies. Book your spot — groups are small.")
        ])
      ])
    },
    {
      slug: 'cooking-with-local-family',
      title: 'Cooking Class with a Local Balinese Family — The Real Ubud Experience',
      author: 'Chef Wayan',
      excerpt: 'A Balinese cooking class in a local family\'s compound — not a tourist venue. Cook with a Balinese chef over charcoal, learn the stories behind the dishes, and eat together among the rice fields.',
      imageFile: 'cooking-local-family.webp',
      imageAlt: 'Authentic cooking experience with a local Balinese family in their compound',
      metaTitle: 'Cooking Class with a Local Balinese Family — The Real Ubud Experience',
      metaDesc: 'A Balinese cooking class in a local family\'s compound — not a tourist venue. Cook with a Balinese chef over charcoal, learn the stories behind the dishes, and eat together among the rice fields.',
      content: root([
        paragraph([text("Cook with a local family, not a tour group.", 1)]),
        paragraph([
          text("The difference between a tourist cooking class and a "),
          text("cultural cooking experience in Bali", 1),
          text(" comes down to one thing: who's teaching you. At Tumang, you're not in a restaurant kitchen or a hotel function room. You're in a family compound just outside Ubud, cooking alongside a local Balinese chef who grew up making these dishes.")
        ]),
        heading('h2', '1. A home, not a venue'),
        paragraph([
          text("Our kitchen is part of a family compound — your guide may even be the home's resident chef or the daughter of the family that runs it. The space is open-air, surrounded by banana trees, citrus plants, and chilies growing in pots. It's where meals for the family are made every day, not just for visitors.")
        ]),
        paragraph([
          text("There's no script, no rehearsed tour. Your guide shares personal stories — why turmeric is used in Balinese ceremonies, how the spice paste changes depending on which village you're from, what dishes their grandmother made that have been passed down through generations.")
        ]),
        heading('h2', '2. Cooking the way Balinese families cook'),
        paragraph([
          text("In a Balinese home, food preparation is a communal, social act. Everyone has a role: one person grinds the spice paste, another prepares the vegetables, another tends the fire. That's how we run the class — you're working alongside your guide, not watching a demonstration.")
        ]),
        paragraph([
          text("You'll learn the "),
          text("traditional Balinese spice making", 1),
          text(" the way it's done by hand — using a cobek (stone mortar) and ulekan (pestle). A food processor can approximate it, but it doesn't bruise the herbs the same way, and the flavour is noticeably different. This is the part you'll take home with you — the muscle memory of grinding paste that no recipe book can give you.")
        ]),
        heading('h2', '3. The dishes have context'),
        paragraph([
          text("Every dish you cook has a story. "),
          text("Sate lilit", 1),
          text(" isn't just satay — it's what you make when you're grilling at a temple festival and need something that cooks fast over coconut-husk charcoal. "),
          text("Urab", 1),
          text(" is often served at celebrations. "),
          text("Bubur injin", 1),
          text(" (black rice pudding) is the dessert that closes every good meal.")
        ]),
        paragraph([
          text("When you go back to your hotel and order from room service — or better yet, try to recreate these dishes at home — you'll understand not just the recipe but the context. That's the difference between a "),
          text("traditional Balinese cooking class", 1),
          text(" and a tourist demonstration.")
        ]),
        heading('h2', '4. Eating as a family does'),
        paragraph([
          text("In Bali, meals are shared. Everyone eats from the same spread — no individual plates unless it's a Western-style setup. At our class, you eat together on banana leaves, just like a Balinese family would. You pass dishes around, you serve each other, you sit on the floor.")
        ]),
        paragraph([
          text("It might feel unfamiliar at first. It shouldn't. That's the point — this is a "),
          text("cultural cooking experience", 1),
          text(" in the truest sense. You're not observing Balinese food culture; you're participating in it for an afternoon.")
        ]),
        heading('h2', 'Frequently Asked Questions'),
        paragraph([text("Q: Is the cooking class really with a local family, or is it a business?", 1)]),
        paragraph([text("It's a family-run operation. Our chef guides have worked with us for years — some for a decade or more — and they grew up cooking these dishes in Balinese homes. This is their livelihood and their heritage.")]),
        paragraph([text("Q: What makes this an authentic Balinese cooking experience?", 1)]),
        paragraph([text("The setting, the ingredients, and the method. We source from the morning market, we cook outdoors on charcoal, we use a stone mortar for the spice paste, and we eat communally on banana leaves. None of that is optional — it's how Balinese families actually cook.")]),
        paragraph([text("Q: Can I ask my guide personal questions about Balinese culture?", 1)]),
        paragraph([text("Absolutely. We encourage it. Your guide will be happy to talk about Balinese daily life, food taboos, ceremony, and traditions. Most guests say the conversation was one of the highlights of the class.")]),
        paragraph([text("Q: Do I need to be comfortable with strangers to do this?", 1)]),
        paragraph([text("Not at all. Balinese people are famously warm and welcoming. Your guide will make you feel at home — literally. Whether you're travelling solo, as a couple, or with a group, everyone sits down together and shares the meal.")]),
        heading('h2', 'This is how food is meant to be shared.'),
        paragraph([
          text("A class led by a local Balinese chef in a family compound, surrounded by rice fields. Book your spot — mornings include the market tour.")
        ])
      ])
    },
    {
      slug: 'how-bali-cooking-classes-work',
      title: 'How a Balinese Cooking Class Works — Full Walkthrough (2026)',
      author: 'Chef Wayan',
      excerpt: 'Step by step: what happens during a traditional Balinese cooking class in Ubud, from pickup to the final dessert. How long it takes, what you cook, what to expect, and what to wear.',
      imageFile: 'walkthrough-class.webp',
      imageAlt: 'Cooking class walkthrough setting showing stone mortar and prep ingredients',
      metaTitle: 'How a Balinese Cooking Class Works — Full Walkthrough (2026)',
      metaDesc: 'Step by step: what happens during a traditional Balinese cooking class in Ubud, from pickup to the final dessert. How long it takes, what you cook, what to expect, and what to wear.',
      content: root([
        paragraph([text("How a Balinese cooking class works, step by step.", 1)]),
        paragraph([
          text("You've seen the photos — people grinding spices, grilling satay, eating over rice fields. But what does a "),
          text("traditional Balinese cooking class", 1),
          text(" actually involve from start to finish? Here's a detailed walkthrough so you know exactly what to expect before you book.")
        ]),
        heading('h2', 'Step 1: Hotel pickup (8:00 AM — morning class)'),
        paragraph([
          text("We pick you up from your hotel in the Ubud area. The pickup is "),
          text("free for the Ubud area", 1),
          text(" — if you're staying further out (Sanur, Seminyak, Nusa Dua), message us and we'll arrange a shuttle. The van is air-conditioned and comfortable; the drive to the market takes 15–30 minutes depending on your location.")
        ]),
        paragraph([
          text("If you've searched for "),
          text("cooking class with hotel pickup Ubud", 1),
          text(" or "),
          text("Bali cooking class with driver", 1),
          text(", rest easy — this is included at no extra cost. You don't need to figure out transport yourself. Just give us your hotel address when you book.")
        ]),
        heading('h2', 'Step 2: The morning market tour (8:30–9:15 AM)'),
        paragraph([
          text("The market tour is only on the morning class because Ubud's working markets wind down before noon. Vendors start dismantling their stalls around 11 AM, so the afternoon slot skips this entirely.")
        ]),
        paragraph([
          text("At the market, your guide walks you through everything you'll need for the cooking class. You'll see and touch ingredients most visitors have never encountered: fresh turmeric roots (bright orange underneath), galangal (smells like pine and citrus), candlenut (a thickening agent), petai (stink beans — try one if you're brave), and snake fruit (salak), a sweet local fruit that grows in clusters.")
        ]),
        paragraph([
          text("This part is often what people mean when they ask about a "),
          text("Bali culinary tour and cooking class", 1),
          text(". It's not just a cooking lesson — it's a tour of the ingredients that make Balinese food distinctive.")
        ]),
        heading('h2', 'Step 3: Rice field walk (9:15–9:30 AM)'),
        paragraph([
          text("After the market, we walk through the rice terraces to the cooking area. This is the "),
          text("rice paddy walk with cooking class", 1),
          text(" experience — 15 minutes through the green, past farmers tending their fields, past water buffaloes wallowing in the mud.")
        ]),
        paragraph([
          text("Not every cooking class includes this. The ones that do are in the outskirts of Ubud, away from the main roads. That's the advantage of the setting — you're already surrounded by the landscape that defines Ubud before you even start cooking.")
        ]),
        heading('h2', 'Step 4: Grinding the spice paste (9:30–10:30 AM)'),
        paragraph([
          text("This is the heart of the class. You'll sit at a long table with your guide and a stone mortar (cobek) and pestle (ulekan). Together, you'll grind the "),
          text("base genep", 1),
          text(" — the foundational Balinese spice paste that's used in almost every savoury dish on the menu.")
        ]),
        paragraph([
          text("The paste includes shallots, garlic, turmeric, galangal, ginger, lemongrass, candlenut, coriander, black pepper, shrimp paste (or omit for vegan), and palm sugar. Grinding it by hand takes about 20 minutes — it's physical, rhythmic work, and most guests find it unexpectedly satisfying. A food processor can do it in 30 seconds, but the flavour won't be the same. The stone bruises the fibres and releases oils that blending crushes instead.")
        ]),
        paragraph([
          text("If you're curious about "),
          text("traditional Balinese spice making", 1),
          text(" or "),
          text("how to make Balinese food at home", 1),
          text(", this is where the real learning happens. We'll give you a written recipe to take home too.")
        ]),
        heading('h2', 'Step 5: Cooking the dishes (10:30 AM–12:30 PM)'),
        paragraph([
          text("Once the paste is ready, the cooking moves to the charcoal grills and clay pots. Each station has a guide, so you get personal attention. You'll make:")
        ]),
        paragraph([
          text("Base Genep", 1), text(" — the spice paste (finished) · "),
          text("Sate Lilit", 1), text(" — minced satay on lemongrass · "),
          text("Chicken or Tofu Curry", 1), text(" — in coconut sauce · "),
          text("Urab", 1), text(" — coconut vegetable salad · "),
          text("Sambal Matah", 1), text(" — raw shallot sambal · "),
          text("Sambal Goreng", 1), text(" — cooked red chili paste · "),
          text("Nasi Pepes", 1), text(" — fish or tofu steamed in banana leaf · "),
          text("Nasi Goreng", 1), text(" — fried rice · "),
          text("Bubur Injin", 1), text(" — black rice pudding (dessert)")
        ]),
        paragraph([
          text("That's "),
          text("10–12 dishes", 1),
          text(" total, all cooked by you. Some are hands-on (the satay, the curry), some are guided (the sambals, the pepes), and some are already simmering when you arrive.")
        ]),
        paragraph([
          text("This is what people mean when they ask "),
          text("what do you cook in a Bali class", 1),
          text(" — it's a full menu, not a single dish.")
        ]),
        heading('h2', 'Step 6: The feast (12:30–1:30 PM)'),
        paragraph([
          text("Everyone sits down together. The food goes onto banana leaves on a long table in the shade. You eat what you've cooked — most of it, at least. Some dishes (like the curry) take longer, so your guide starts those while you're working on others.")
        ]),
        paragraph([
          text("You'll spend about an hour eating, talking, and enjoying the rice field views. There's no rush. After the meal, you can stay longer if you like — many guests just sit and soak in the atmosphere. The rice fields don't get old.")
        ]),
        heading('h2', 'Step 7: Recipe book and goodbye'),
        paragraph([
          text("Before you go, you'll receive a "),
          text("take-home recipe book", 1),
          text(" with all the dishes from the class written down in English. Most guests say this is the best souvenir they bring back from Bali — because it's not a trinket, it's something they'll actually use.")
        ]),
        paragraph([
          text("Your guide may even share personal recipes that aren't in the book. The market-tour morning class typically ends around 1 PM, and we drive you back to your hotel.")
        ]),
        heading('h2', 'Frequently Asked Questions'),
        paragraph([text("Q: How long is a Balinese cooking class?", 1)]),
        paragraph([text("The morning class (with market tour) takes about 5 hours from pickup to drop-off. The afternoon class is about 3 hours.")]),
        paragraph([text("Q: What time does the class start?", 1)]),
        paragraph([text("Morning class starts at 8:00 AM (pickup). Afternoon class at 2:00 PM.")]),
        paragraph([text("Q: What should I wear to a cooking class in Bali?", 1)]),
        paragraph([text("Comfortable, casual clothes. You'll be sitting cross-legged on the ground at times, so avoid very tight or restrictive clothing. Bring a hat and sunscreen for the market walk. Closed-toe shoes are fine, but the path is flat and well-maintained.")]),
        paragraph([text("Q: What's included in a Balinese cooking class?", 1)]),
        paragraph([
          text("Everything: hotel pickup and drop-off, the market tour (morning class), rice field walk, all ingredients, a full lunch/dinner of what you cook, a take-home recipe book, and beverages during the class. See our "),
          link("pricing page", "/cooking-class-with-market-tour-ubud"),
          text(" for full details.")
        ]),
        paragraph([text("Q: Is the class suitable for beginners?", 1)]),
        paragraph([text("Yes — it's designed for complete beginners. Most of our guests have never cooked Balinese food before. Your guide walks you through every step, and it's as much about culture and fun as it is about cooking.")]),
        paragraph([text("Q: What if I have dietary restrictions?", 1)]),
        paragraph([text("We accommodate vegetarians, vegans, and most allergies. Just let us know when you book and we'll adjust the menu. Every dish has a vegan version.")]),
        paragraph([text("Q: Can I do a cooking class if I'm not staying in Ubud?", 1)]),
        paragraph([text("Yes — we can arrange pickup from other parts of Bali for an additional transport fee. The class itself happens in the Ubud area, surrounded by rice fields.")]),
        heading('h2', 'Everything you need to know, before you book.'),
        paragraph([
          text("Morning class with market tour (5 hours) or afternoon class focused on cooking (3 hours). Free Ubud pickup, vegetarian options, beginner-friendly.")
        ])
      ])
    },
    {
      slug: 'cooking-class-bali-faqs',
      title: 'Cooking Class in Bali — Complete FAQ (Prices, What to Expect, How to Book)',
      author: 'Chef Wayan',
      excerpt: 'Everything you need to know about a Balinese cooking class in Ubud — prices, timing, what\'s included, vegetarian options, how to book, and answers to the most common questions travellers ask.',
      imageFile: 'faq-cooking-class.webp',
      imageAlt: 'Frequently asked questions display setup with recipe notebook and Balinese spices',
      metaTitle: 'Cooking Class in Bali — Complete FAQ (Prices, What to Expect, How to Book)',
      metaDesc: 'Everything you need to know about a Balinese cooking class in Ubud — prices, timing, what\'s included, vegetarian options, how to book, and answers to the most common questions travellers ask.',
      content: root([
        paragraph([text("Cooking class in Bali — all the answers.", 1)]),
        paragraph([
          text("You've probably got a list of questions before you book a cooking class in Ubud. We've collected the ones we hear most often — about price, timing, what you'll cook, dietary needs, and how to actually book.")
        ]),
        heading('h2', 'Price and value'),
        paragraph([
          text("Most cooking classes in Ubud run "),
          text("IDR 350,000–500,000 per person (roughly $22–35)", 1),
          text(". Our morning class with market tour is "),
          text("IDR 450k (~$29)", 1),
          text(" and the afternoon class is "),
          text("IDR 400k (~$26)", 1),
          text(".")
        ]),
        paragraph([text("At that price, you're getting:")]),
        list([
          "Hotel pickup and drop-off in the Ubud area (free)",
          "A real morning market tour (morning class only)",
          "A rice field walk",
          "Two hours of hands-on cooking",
          "A full lunch or dinner of everything you cook (10–12 dishes)",
          "A take-home recipe book",
          "All ingredients and equipment"
        ]),
        paragraph([
          text("If you've looked at "),
          text("affordable cooking class in Ubud", 1),
          text(" options, these prices are right in the middle. Very cheap classes (< IDR 300k) usually skip the market tour and serve a reduced menu. Very expensive ones (> IDR 600k) are rarely meaningfully better — they might add a spa treatment or a transfer from Seminyak.")
        ]),
        heading('h2', 'Timing and scheduling'),
        paragraph([text("We run two classes per day:")]),
        list([
          "Morning: 8:00 AM — includes market tour + rice field walk + full cooking (5 hours)",
          "Afternoon: 2:00 PM — cooking only, no market (3 hours)"
        ]),
        paragraph([
          text("The morning class is our most popular. It's the fuller experience because the market tour is only possible in the morning — Balinese markets close before noon. The market tour is what most guests say was the highlight.")
        ]),
        paragraph([
          text("If you've asked "),
          text("best time for cooking class in Ubud", 1),
          text(" — most people say morning, especially if it's your first or only class in Bali. The afternoon is great if you prefer a relaxed start or have other morning plans.")
        ]),
        heading('h2', 'What you\'ll actually cook'),
        paragraph([
          text("A full Balinese menu — typically 10–12 dishes. The exact dishes vary slightly by season and what's fresh at the market, but the core is always there:")
        ]),
        paragraph([
          text("Base Genep", 1), text(" spice paste (ground by hand) · "),
          text("Sate Lilit", 1), text(" (minced satay) · "),
          text("Chicken Curry", 1), text(" or "),
          text("Tofu Curry", 1), text(" · "),
          text("Urab", 1), text(" (coconut vegetable salad) · "),
          text("Sambal Matah", 1), text(" (raw shallot sambal) · "),
          text("Sambal Goreng", 1), text(" (cooked red sambal) · "),
          text("Nasi Pepes", 1), text(" (steamed in banana leaf) · "),
          text("Nasi Goreng", 1), text(" (fried rice) · "),
          text("Bubur Injin", 1), text(" (black rice pudding, dessert)")
        ]),
        paragraph([
          text("See our "),
          link("guide to choosing a class", "/blog/tumang-vs-ubud-cooking-class"),
          text(" if you're comparing what different operators offer.")
        ]),
        heading('h2', 'Dietary needs'),
        paragraph([
          text("We accommodate "),
          text("vegetarian", 1),
          text(", "),
          text("vegan", 1),
          text(", and most allergy needs at no extra cost. Every dish has a vegan version — we simply leave out the shrimp paste, shrimp, and egg, and lean on the deep flavours of the spices.")
        ]),
        paragraph([
          text("If you're searching for a "),
          text("vegetarian Balinese cooking class", 1),
          text(" or "),
          text("cooking class Ubud vegetarian option", 1),
          text(", you're in the right place. We don't treat vegetarian as an afterthought — it's a full, celebratory menu.")
        ]),
        paragraph([
          text("For severe allergies (nut, shellfish), please mention it when you book so we can plan accordingly.")
        ]),
        heading('h2', 'Booking and logistics'),
        paragraph([
          text("To "),
          text("book a cooking class in Bali", 1),
          text(", just message us by email or WhatsApp with your preferred date, number of guests, and any dietary needs. We'll confirm your spot and arrange pickup.")
        ]),
        paragraph([
          text("We recommend booking "),
          text("a few days ahead in high season", 1),
          text(" (June–August, December) — groups are limited to keep the experience personal. In low season, same-day bookings are usually possible.")
        ]),
        paragraph([
          text("If you're asking about "),
          text("group cooking class in Ubud Bali", 1),
          text(" — yes, we run classes for groups of all sizes. Private classes are available for couples, families, and corporate groups. See our "),
          link("pricing page", "/cooking-class-with-market-tour-ubud"),
          text(".")
        ]),
        heading('h2', 'Frequently Asked Questions'),
        paragraph([text("Q: How much is a cooking class in Bali?", 1)]),
        paragraph([text("Most Ubud classes run IDR 350k–500k (~$22–35) per person. Our morning class is IDR 450k (~$29) and afternoon is IDR 400k (~$26). Both include a full meal, recipe book, and free Ubud pickup.")]),
        paragraph([text("Q: What's included in the price?", 1)]),
        paragraph([text("Everything: market tour (morning class), rice field walk, hands-on cooking of 10+ dishes, a full meal of what you cook, a take-home recipe book, and free hotel pickup in the Ubud area.")]),
        paragraph([text("Q: Is it worth doing a cooking class in Ubud?", 1)]),
        paragraph([text("It's consistently one of the highest-rated things travellers do in Ubud. You learn real skills, eat exceptionally well, and get a genuine look into Balinese family life.")]),
        paragraph([text("Q: What's the difference between the morning and afternoon class?", 1)]),
        paragraph([text("Morning (8 AM) includes the market tour and rice field walk — the fuller experience. Afternoon (2 PM) skips the market and focuses on cooking.")]),
        paragraph([text("Q: Do you cater to vegetarians and vegans?", 1)]),
        paragraph([
          text("Yes — a complete vegetarian or vegan menu is available on every class at no extra cost. See our "),
          link("vegetarian & vegan page", "/vegetarian-cooking-class-ubud"),
          text(".")
        ]),
        paragraph([text("Q: How do I book?", 1)]),
        paragraph([text("Message us by email or WhatsApp with your preferred date, number of guests, and any dietary needs. We'll confirm and arrange pickup. We recommend booking a few days ahead in high season.")]),
        paragraph([text("Q: Where are you located?", 1)]),
        paragraph([text("We're just outside central Ubud, surrounded by rice fields. Free shuttle pickup is included for the Ubud area.")]),
        paragraph([text("Q: Can beginners join?", 1)]),
        paragraph([text("Absolutely. Most guests have never cooked Balinese food before — our chefs guide you through every step.")]),
        paragraph([text("Q: What should I wear?", 1)]),
        paragraph([text("Comfortable, casual clothes. Closed-toe shoes are fine. Bring a hat and sunscreen for the market walk.")]),
        paragraph([text("Q: Is the class suitable for children?", 1)]),
        paragraph([text("Yes — we welcome families. Kids love grinding the spice paste and grilling their own satay. Classes for children 6 and up are a great experience.")]),
        heading('h2', 'Ready to book?'),
        paragraph([
          text("Small groups, full menus, free Ubud pickup. Book your class and cook the real Bali.")
        ])
      ])
    },
    {
      slug: 'private-group-cooking-class-ubud',
      title: 'Private & Group Cooking Class in Ubud — For Couples, Families and Corporate Events',
      author: 'Chef Wayan',
      excerpt: 'Book a private or group cooking class in Ubud — ideal for couples, families with children, and corporate groups. Flexible timing, exclusive use of the kitchen, and a personalised experience.',
      imageFile: 'private-group-class.webp',
      imageAlt: 'Lively private cooking class group smiling and cooking together in Bali',
      metaTitle: 'Private & Group Cooking Class in Ubud — For Couples, Families and Corporate Events',
      metaDesc: 'Book a private or group cooking class in Ubud — ideal for couples, families with children, and corporate groups. Flexible timing, exclusive use of the kitchen, and a personalised experience.',
      content: root([
        paragraph([text("A private or group cooking class, your way.", 1)]),
        paragraph([
          text("The standard class is a small group experience with other travellers — which is wonderful. But sometimes you want the class to yourself: a "),
          text("private cooking class for couples", 1),
          text(", a family day out with kids, a corporate team-building event, or a friend group celebrating something special.")
        ]),
        heading('h2', 'Private class for couples'),
        paragraph([
          text("A private class means just your group — no other guests. It's ideal for a "),
          text("couples cooking class in Bali", 1),
          text(" because you get the kitchen entirely to yourselves, with a flexible schedule and a chef dedicated only to your group.")
        ]),
        paragraph([
          text("Many of our private classes are honeymoons or anniversaries. We're happy to make it special — we might set up extra flowers, arrange a longer sitting time, or prepare a bonus dish you wouldn't normally cook. The menu is the same (10–12 dishes), but the atmosphere is entirely your own.")
        ]),
        paragraph([
          text("You can choose morning (with market tour) or afternoon. The morning class is the fuller experience; the afternoon is more relaxed with a later start. Both end the same way — with a feast together, overlooking the paddies.")
        ]),
        heading('h2', 'Family cooking class'),
        paragraph([
          text("We welcome families with children — kids as young as 6 can fully participate. The class is "),
          text("family-friendly", 1),
          text(" by design: there's plenty to do, the atmosphere is relaxed, and the grilling station is always a favourite with kids.")
        ]),
        paragraph([
          text("For families, we run a private or semi-private session. Your children can help grind the spice paste, wrap their own sate lilit, and choose which dishes to focus on. The adult members of the group can continue with the full menu.")
        ]),
        paragraph([
          text("We provide high chairs and can adjust spice levels for children. It's one of the best things to do in Ubud with kids because it's genuinely educational — they learn where food comes from and leave with skills they can use at home.")
        ]),
        heading('h2', 'Group bookings (friends, celebrations, events)'),
        paragraph([
          text("If you have a larger group — a gathering of friends, a bachelorette party, a family reunion — we can run an exclusive class for your group of up to 16 people. The experience is the same as the standard class but entirely private.")
        ]),
        paragraph([
          text("We can also accommodate "),
          text("corporate group cooking classes", 1),
          text(" for team-building, client entertaining, or retreat activities. The collaborative nature of the class — everyone working together on a shared meal — makes it an effective (and fun) team activity.")
        ]),
        paragraph([
          text("For groups of 10+, we offer a slightly adjusted menu to ensure everything is prepared smoothly. We can also arrange additional seating, extra staff, and extended time.")
        ]),
        heading('h2', 'Pricing and availability'),
        paragraph([
          text("Private and group classes are priced separately from the standard class. The rate depends on group size and timing:")
        ]),
        list([
          "Couples (2 people): Private class, flexible timing, dedicated chef",
          "Small groups (3–6 people): Semi-private or private, same experience",
          "Large groups (7–16 people): Exclusive class, adjusted menu, extra staff"
        ]),
        paragraph([
          text("Message us with your group size and preferred date, and we'll provide a quote. Both morning and afternoon slots are available for private and group bookings.")
        ]),
        heading('h2', 'Frequently Asked Questions'),
        paragraph([text("Q: What is a private Balinese cooking class?", 1)]),
        paragraph([text("It's an exclusive class where only your group participates — no other guests. You get the kitchen entirely to yourselves, a dedicated chef, and flexible timing. Ideal for couples, families, and special celebrations.")]),
        paragraph([text("Q: How many people can join a group cooking class?", 1)]),
        paragraph([text("We can accommodate groups of up to 16 people in an exclusive class. For larger groups, we can arrange two sessions back to back.")]),
        paragraph([text("Q: Is the class suitable for children?", 1)]),
        paragraph([text("Yes — kids 6 and up are welcome and love it. The class is hands-on and interactive, and children can participate in every step.")]),
        paragraph([text("Q: Can we do a private class on a specific date?", 1)]),
        paragraph([text("Yes — private and group classes can be booked on any date, subject to availability. We recommend booking a few days ahead in high season.")]),
        paragraph([text("Q: What's included in a private class?", 1)]),
        paragraph([text("Everything in the standard class: market tour (morning), rice field walk, hands-on cooking of 10–12 dishes, a full meal, recipe book, and free Ubud pickup — but entirely for your group with a dedicated chef.")]),
        heading('h2', 'Make it your own.'),
        paragraph([
          text("Private class for two, family session, or group event — the class adapts to you. Book your exclusive experience.")
        ])
      ])
    }
  ]

  for (const art of newArticles) {
    // Check if article already exists
    const existing = await payload.find({
      collection: 'articles',
      where: { slug: { equals: art.slug } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      console.log(`Article "${art.slug}" already exists — skipping.`)
      continue
    }

    // Upload image
    const imgPath = path.resolve(__dirname, 'public', 'images', 'blog', art.imageFile)
    if (!fs.existsSync(imgPath)) {
      console.error(`Image not found at ${imgPath}. Aborting.`)
      process.exit(1)
    }

    const stat = fs.statSync(imgPath)
    const media = await payload.create({
      collection: 'media',
      data: { alt: art.imageAlt },
      file: {
        data: fs.readFileSync(imgPath),
        mimetype: 'image/webp',
        name: art.imageFile,
        size: stat.size,
      },
    })
    console.log(`Uploaded media "${art.imageFile}" with ID: ${media.id}`)

    // Create article
    await payload.create({
      collection: 'articles',
      data: {
        title: art.title,
        slug: art.slug,
        status: 'published',
        publishedDate: new Date('2026-07-04').toISOString(),
        author: art.author,
        featuredImage: media.id,
        excerpt: art.excerpt,
        content: art.content as unknown as Parameters<typeof payload.create>[0]['data']['content'],
        meta: {
          title: art.metaTitle,
          description: art.metaDesc,
        },
      },
    })
    console.log(`Seeded article "${art.slug}" successfully.`)
  }

  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})

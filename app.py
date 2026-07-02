"""Tumang Bali — public marketing site (Ubud cooking class).

Phase-1 SEO pages: market-tour class, vegetarian/vegan, couples, pricing+FAQ,
plus a recipe content hub. Content is served from Python dicts below; no DB
needed for static marketing content. The site-http service auto-restarts on edit.
"""
from __future__ import annotations

import datetime

from flask import Flask, render_template, abort

from src.db import init_db_app

app = Flask(__name__)
app.config["SESSION_COOKIE_NAME"] = "site_session"

init_db_app(app)


@app.context_processor
def _globals():
    return {"year": datetime.date.today().year}


# ---------------------------------------------------------------------------
# Class landing pages (Phase-1 quick wins)
# ---------------------------------------------------------------------------
CLASS_PAGES = {
    "market-tour": {
        "title": "Market-Tour Cooking Class",
        "meta": "A Bali cooking class with a real morning market tour in Ubud — walk the local market, learn the spices, then cook 10+ dishes by hand with a Balinese family.",
        "eyebrow": "Our signature morning",
        "img": "market.jpg",
        "img_alt": "A local guide showing fresh chilies and turmeric to a traveller at Ubud's morning market",
        "img2": "hero.jpg",
        "img2_alt": "Grinding turmeric and chili into spice paste with a stone mortar and pestle",
        "h1": "A Bali cooking class that starts at the market.",
        "lede": "Meet the spices before you cook them. Our morning class begins in a real Ubud market, then heads to the family kitchen for a full hands-on Balinese menu.",
        "intro": [
            "The heart of Balinese food isn't a recipe — it's the market. Our <strong>market-tour cooking class</strong> begins the way every Balinese meal really does: walking the local morning market in Ubud, where families buy fresh turmeric, galangal, lemongrass, chilies and vegetables picked that morning.",
            "Your guide knows every vendor. You'll touch, smell and taste as you go — snake fruit, fresh coconut, warm spices — and learn what each ingredient does before it ever hits the pan. This is the part most classes skip. It's also the part you'll remember.",
            "From the market we take a short walk through the rice paddies to the family kitchen, where the real cooking begins. Aprons on, mortar and pestle ready — you'll grind the base genep spice paste from scratch and build a full Balinese feast, dish by dish.",
        ],
        "list_eyebrow": "What makes it special",
        "list_head": "Why the market tour matters",
        "highlights": [
            {"h": "The real market", "p": "Not the souvenir stalls — the working market where locals actually shop, before it closes at noon."},
            {"h": "Spices in your hands", "p": "Learn to identify and use fresh turmeric, galangal, kencur, lemongrass and candlenut."},
            {"h": "Rice-field walk", "p": "A gentle stroll through the paddies to see how Bali grows its most important ingredient."},
            {"h": "Cook 10+ dishes", "p": "A complete menu built on the spice paste you grind yourself — meat or vegetarian."},
        ],
        "dishes_head": "A full Balinese menu, cooked by you",
        "dishes": [
            "<strong>Base Genep</strong> — the foundational Balinese spice paste",
            "<strong>Sate Lilit</strong> — minced satay wrapped on lemongrass",
            "<strong>Chicken or Tofu Curry</strong> in fragrant coconut sauce",
            "<strong>Urab</strong> — coconut vegetable salad",
            "<strong>Sambal Matah</strong> — Bali's raw shallot-and-lemongrass sambal",
            "<strong>Black Rice Pudding</strong> for dessert",
        ],
        "dishes_note": "The exact menu changes with the season and the market — vegetarian and vegan versions of every dish are always available.",
        "faqs": [
            {"q": "What time does the market-tour class start?", "a": "The morning class starts at <strong>8:00 AM</strong> — the market tour is only on the morning class, since the market winds down before noon. We pick you up from your Ubud-area hotel."},
            {"q": "How long does it take?", "a": "About <strong>5 hours</strong> door to door: pickup, market tour, rice-field walk, two hours of cooking, and the shared feast."},
            {"q": "Is it suitable for beginners?", "a": "Completely. Most guests have never cooked Balinese food before — our chefs guide you through every step, and it's as much about the culture and fun as the cooking."},
            {"q": "Do you include hotel pickup?", "a": "Yes — free shuttle for the Ubud area is included. If you're staying further out, message us and we'll arrange it."},
        ],
        "cta_head": "Start your day at the market.",
        "cta_p": "The morning class fills up fast — small groups, market tour included, free Ubud pickup. Reserve your spot.",
    },
    "vegetarian": {
        "title": "Vegetarian & Vegan Cooking Class",
        "meta": "A fully vegetarian and vegan Balinese cooking class in Ubud — tofu curry, tempeh satay, urab, sambal matah and more, all plant-based, with a local family.",
        "eyebrow": "100% plant-based option",
        "img": "veg.jpg",
        "img_alt": "A colourful vegetarian Balinese feast of tofu curry, tempeh satay and urab on banana leaves",
        "img2": "market.jpg",
        "img2_alt": "Fresh vegetables and spices at the Ubud morning market",
        "h1": "A vegetarian & vegan Balinese class, done properly.",
        "lede": "Ubud is Bali's plant-based capital — and Balinese cooking is naturally rich in vegetables, tofu, tempeh and coconut. Cook a complete meat-free feast with us.",
        "intro": [
            "Vegetarian and vegan travellers usually get an afterthought menu. Not here. Our <strong>vegetarian cooking class</strong> is a complete, celebratory plant-based feast — because so much of traditional Balinese home cooking already is.",
            "You'll cook tofu curry (kare tahu), tempeh satay, urab coconut salad, steamed tofu in banana leaf, and Bali's iconic sambal matah — all built on the same aromatic <strong>base genep</strong> spice paste we grind by hand. Everything can be made fully vegan on request: we simply leave out the shrimp paste and egg and lean on the deep flavours of the spices.",
            "Like all our classes, it can start with the morning market tour and a rice-field walk, then move to the family kitchen for two hands-on hours and a shared meal over the paddies.",
        ],
        "list_eyebrow": "Plant-based, in full",
        "list_head": "What you'll cook",
        "highlights": [
            {"h": "Kare Tahu", "p": "Silky tofu curry simmered in fragrant, spiced coconut milk."},
            {"h": "Sate Tempe", "p": "Marinated tempeh satay grilled over coconut-husk charcoal."},
            {"h": "Urab", "p": "Fresh vegetables tossed with grated, spiced coconut."},
            {"h": "Sambal Matah", "p": "Raw shallot, lemongrass and chili sambal — vegan and addictive."},
        ],
        "dishes_head": "A complete vegetarian Balinese feast",
        "dishes": [
            "<strong>Kare Tahu</strong> — tofu curry in spiced coconut milk",
            "<strong>Sate Tempe</strong> — tempeh satay on lemongrass or bamboo",
            "<strong>Tofu Pepes</strong> — steamed tofu in banana leaf",
            "<strong>Urab</strong> — Balinese coconut vegetable salad",
            "<strong>Sambal Matah</strong> &amp; <strong>Sambal Goreng</strong>",
            "<strong>Black Rice Pudding</strong> (vegan) for dessert",
        ],
        "dishes_note": "Tell us 'vegan' when you book and we prepare everything plant-based from the start — no shrimp paste, no egg, no compromise on flavour.",
        "faqs": [
            {"q": "Is the class fully vegan, or just vegetarian?", "a": "Both — your choice. Every dish has a vegan version. Just let us know when booking and we'll prepare the whole menu plant-based."},
            {"q": "Can vegetarians and meat-eaters do the same class together?", "a": "Yes. We often run mixed groups — vegetarians cook at their own station with a dedicated menu while others cook the meat version. Everyone eats together."},
            {"q": "What plant-based dishes will I learn?", "a": "Tofu curry, tempeh satay, steamed tofu pepes, urab, sambal matah and sambal goreng, plus vegan black rice pudding — all from the base genep spice paste you grind yourself."},
            {"q": "Do you cater other diets?", "a": "We can usually accommodate gluten-free and nut allergies with notice — mention it when you book and we'll adjust the menu."},
        ],
        "cta_head": "The plant-based feast you'll want to recreate at home.",
        "cta_p": "Vegan and vegetarian menus on every class, at no extra cost. Book your spot and cook the real Bali.",
    },
    "couples": {
        "title": "Cooking Class for Couples",
        "meta": "A romantic Bali cooking class for couples in Ubud — cook together over the rice fields, grill satay side by side, and share the feast you made. Perfect for honeymoons.",
        "eyebrow": "Couples & honeymoons",
        "img": "couple.jpg",
        "img_alt": "A couple laughing while grilling satay together with a Balinese chef over the rice fields",
        "img2": "hero.jpg",
        "img2_alt": "Hands grinding spice paste together in a stone mortar",
        "h1": "Cook together, over the rice fields.",
        "lede": "One of the most memorable — and most hands-on — things to do in Ubud as a couple. Grind, wrap, grill and feast side by side in a family kitchen above the paddies.",
        "intro": [
            "Looking for a <strong>romantic thing to do in Ubud</strong> that isn't just another dinner? Cook the dinner. Our couples cooking class puts the two of you at a shared station in an open-air kitchen surrounded by rice fields — grinding spice paste, wrapping sate lilit, and grilling over coconut-husk charcoal together.",
            "It's playful, hands-on and genuinely local — the kind of shared experience you'll still be talking about long after the trip. Honeymooners are some of our favourite guests, and we're happy to make the day feel special.",
            "Choose our regular small-group class for a social morning with other travellers, or a <strong>private class</strong> for just the two of you with flexible timing. Both end the same way: a feast you made yourselves, eaten together over the green paddies.",
        ],
        "list_eyebrow": "Made for two",
        "list_head": "Why couples love it",
        "highlights": [
            {"h": "A shared station", "p": "Cook side by side — grinding, wrapping and grilling as a team."},
            {"h": "Rice-field setting", "p": "An open-air kitchen with views over the green Ubud paddies."},
            {"h": "Private option", "p": "Upgrade to a private class for just the two of you, with flexible timing."},
            {"h": "A story to keep", "p": "You'll both leave with the recipes — and a day you'll actually remember."},
        ],
        "dishes_head": "What you'll cook together",
        "dishes": [
            "<strong>Base Genep</strong> spice paste — ground by hand, together",
            "<strong>Sate Lilit</strong> — wrap and grill your own satay",
            "<strong>Curry</strong> — chicken, fish or tofu in coconut sauce",
            "<strong>Urab</strong> &amp; <strong>Sambal Matah</strong>",
            "<strong>Black Rice Pudding</strong> to share for dessert",
        ],
        "dishes_note": "Vegetarian and vegan menus are available for one or both of you — just let us know when you book.",
        "faqs": [
            {"q": "Can we do a private class, just the two of us?", "a": "Yes — our private/couples class is just your group with flexible timing. It's a lovely honeymoon option. See <a href='/pricing'>pricing</a> for details."},
            {"q": "Is this a good honeymoon activity?", "a": "It's one of our most popular. Tell us you're celebrating and we'll make the day feel special — many couples say it was a highlight of their Bali trip."},
            {"q": "Do we need any cooking experience?", "a": "None at all. The chefs guide you both step by step, and it's designed to be fun and relaxed rather than serious."},
            {"q": "Morning or afternoon for couples?", "a": "The morning class includes the market tour and rice-field walk (a fuller experience); the afternoon class is a relaxed 2:00 PM start focused on the cooking. Both work beautifully for two."},
        ],
        "cta_head": "A day in Ubud you'll both remember.",
        "cta_p": "Small-group or private, morning or afternoon, with free Ubud pickup. Reserve your class for two.",
    },
}


@app.route("/cooking-class-ubud-market-tour")
def market_tour():
    return render_template("class_page.html", page=CLASS_PAGES["market-tour"])


@app.route("/vegetarian-vegan-cooking-class-ubud")
def vegetarian():
    return render_template("class_page.html", page=CLASS_PAGES["vegetarian"])


@app.route("/bali-cooking-class-for-couples")
def couples():
    return render_template("class_page.html", page=CLASS_PAGES["couples"])


# ---------------------------------------------------------------------------
# Pricing & FAQ
# ---------------------------------------------------------------------------
PRICING_FAQS = [
    {"q": "How much is a cooking class in Bali?", "a": "Most Ubud cooking classes run around <strong>IDR 350k–500k (roughly $25–35)</strong> per person. Our morning class with market tour is <strong>IDR 450k (~$29)</strong> and the afternoon class is <strong>IDR 400k (~$26)</strong> — both include a full meal, a recipe book and free Ubud pickup."},
    {"q": "What's included in the price?", "a": "Everything: the market tour (morning class), rice-field walk, hands-on cooking of 10+ dishes, a full lunch or dinner of what you cook, a take-home recipe book, and free hotel pickup in the Ubud area."},
    {"q": "Is it worth doing a cooking class in Ubud?", "a": "It's consistently one of the highest-rated things travellers do in Ubud — you learn real skills, eat exceptionally well, and get a genuine window into Balinese family life. If you enjoy food and culture, it's absolutely worth it."},
    {"q": "What's the difference between the morning and afternoon class?", "a": "The <strong>morning class (8:00 AM)</strong> includes the market tour and rice-field walk — the fuller experience. The <strong>afternoon class (2:00 PM)</strong> skips the market (it's closed by then) and focuses on the hands-on cooking."},
    {"q": "Do you cater to vegetarians and vegans?", "a": "Yes — a complete vegetarian or vegan menu is available on every class at no extra cost. See our <a href='/vegetarian-vegan-cooking-class-ubud'>vegetarian &amp; vegan class</a>."},
    {"q": "How do I book?", "a": "Send us your preferred date, number of guests and any dietary needs by email or WhatsApp. We'll confirm your spot and arrange pickup. We recommend booking a few days ahead in high season — groups are small."},
    {"q": "Where are you located?", "a": "We're just outside central Ubud, surrounded by rice fields. Free shuttle pickup is included for the Ubud area; message us if you're staying further afield."},
]


@app.route("/pricing")
def pricing():
    return render_template("pricing.html", faqs=PRICING_FAQS)


# ---------------------------------------------------------------------------
# Recipes (Phase-2 content hub)
# ---------------------------------------------------------------------------
RECIPES = {
    "balinese-spice-paste-base-genep": {
        "slug": "balinese-spice-paste-base-genep",
        "title": "Balinese Spice Paste (Base Genep)",
        "tag": "The foundation recipe",
        "img": "hero.jpg",
        "img_alt": "Grinding turmeric, chili and aromatics into base genep spice paste with a stone mortar",
        "meta": "How to make base genep, the complete Balinese spice paste that starts almost every Balinese dish — an authentic recipe from a family kitchen in Ubud.",
        "blurb": "If you learn one Balinese recipe, make it this. Base genep (the 'complete spice') is the aromatic base for curries, satays and sambals across Bali.",
        "serves": "About 1 cup", "prep": "20 min", "cook": "10 min", "difficulty": "Beginner",
        "intro": [
            "Almost every savoury Balinese dish begins here. <strong>Base genep</strong> — literally 'complete spice' — is the wet spice paste that gives Balinese food its warm, layered, unmistakable flavour. Master it and you've unlocked half the cuisine.",
            "Traditionally it's ground by hand in a stone mortar (<em>cobek</em>), which bruises the aromatics and releases their oils. A food processor works too — just scrape down often and don't over-purée; you want a coarse, fragrant paste.",
        ],
        "ingredients": [
            "8 shallots, peeled", "5 cloves garlic", "5 cm fresh turmeric (or 1 tbsp ground)",
            "5 cm galangal, chopped", "3 cm ginger, chopped", "2 cm kencur (lesser galangal), if available",
            "2 stalks lemongrass, white part, sliced", "4–8 red chilies (to taste)",
            "3 candlenuts (or macadamia)", "1 tsp coriander seeds", "½ tsp black peppercorns",
            "1 tsp shrimp paste (terasi) — omit for vegan", "2 tbsp coconut oil", "Pinch of salt",
        ],
        "steps": [
            "Toast the coriander seeds and peppercorns in a dry pan for a minute until fragrant, then grind to a powder.",
            "Pound the candlenuts, chilies, shallots and garlic into a rough paste in a mortar (or pulse in a processor).",
            "Add the turmeric, galangal, ginger, kencur and lemongrass and keep grinding until you have a coarse, uniform paste.",
            "Work in the ground coriander and pepper, the shrimp paste, and a pinch of salt.",
            "Heat the coconut oil in a pan over medium-low, add the paste, and fry gently for 6–10 minutes, stirring, until it darkens a few shades and smells deeply aromatic.",
            "Cool and store in a jar. It keeps 1–2 weeks in the fridge, or freeze in portions.",
        ],
        "tip": "The frying step is not optional — raw paste tastes harsh. Cook it slowly until the oil separates and the colour deepens; that's when the flavour is right.",
    },
    "sate-lilit": {
        "slug": "sate-lilit",
        "title": "Sate Lilit (Balinese Minced Satay)",
        "tag": "Iconic Balinese satay",
        "img": "couple.jpg",
        "img_alt": "Sate lilit satay grilling over coconut-husk charcoal",
        "meta": "Authentic sate lilit recipe — Balinese minced satay of fish or chicken with coconut and spice paste, wrapped on lemongrass and grilled. From our Ubud cooking class.",
        "blurb": "Unlike skewered satay, sate lilit is minced meat or fish mixed with coconut and spice paste, moulded onto lemongrass stalks and grilled until fragrant.",
        "serves": "4 (about 12 skewers)", "prep": "25 min", "cook": "12 min", "difficulty": "Easy",
        "intro": [
            "<strong>Sate lilit</strong> is Bali's signature satay — 'lilit' means 'to wrap'. Instead of cubes on a skewer, seasoned minced fish or chicken is pressed around a stalk of lemongrass, which perfumes the meat as it grills.",
            "It's built on the base genep spice paste, so make that first (or use a couple of tablespoons of a good ready-made Balinese paste).",
        ],
        "ingredients": [
            "500 g minced fish (mackerel/snapper) or chicken", "1 cup freshly grated coconut",
            "3 tbsp base genep spice paste", "1 kaffir lime leaf, very finely sliced",
            "1 tsp palm sugar", "½ tsp salt", "1 egg white (helps it bind), optional",
            "10–12 lemongrass stalks (or bamboo skewers)",
        ],
        "steps": [
            "Mix the minced fish or chicken with the grated coconut, spice paste, lime leaf, palm sugar and salt until sticky and well combined. Add the egg white if the mix feels loose.",
            "Chill for 15 minutes — it's easier to shape when cold.",
            "Take a heaped tablespoon and press it firmly around the thick end of a lemongrass stalk, forming a sausage about 8 cm long.",
            "Grill over medium charcoal (or a hot grill pan), turning, for 8–12 minutes until golden and cooked through.",
            "Serve hot with sambal matah and steamed rice.",
        ],
        "tip": "Wet your hands before shaping so the mixture doesn't stick. Charcoal makes a real difference here — that faint smoke is part of the flavour.",
    },
    "sambal-matah": {
        "slug": "sambal-matah",
        "title": "Sambal Matah (Raw Balinese Sambal)",
        "tag": "Bali's raw sambal",
        "img": "veg.jpg",
        "img_alt": "Fresh sambal matah of sliced shallots, lemongrass and chili",
        "meta": "Authentic sambal matah recipe from a Bali chef — the raw shallot, lemongrass and chili sambal that lifts every Balinese meal. Naturally vegan.",
        "blurb": "Bright, sharp and aromatic, sambal matah is a raw sambal of thinly sliced shallots, lemongrass and chili dressed in hot coconut oil. It goes with everything.",
        "serves": "4 as a condiment", "prep": "15 min", "cook": "2 min", "difficulty": "Easy",
        "intro": [
            "Where most sambals are cooked and pounded, <strong>sambal matah</strong> ('raw sambal') is all freshness and crunch — thinly sliced aromatics barely warmed by hot oil. It's the condiment Balinese cooks reach for to lift grilled fish, satay, rice, tofu, almost anything.",
            "The secret is slicing everything very finely and using genuinely fresh lemongrass. Naturally vegan if you skip the shrimp paste.",
        ],
        "ingredients": [
            "10 shallots, very thinly sliced", "3 stalks lemongrass, white part, very thinly sliced",
            "5 red bird's-eye chilies, thinly sliced", "3 kaffir lime leaves, finely shredded",
            "2 cloves garlic, minced", "½ tsp terasi (shrimp paste), toasted — omit for vegan",
            "Juice of 1 lime", "½ tsp salt", "4 tbsp coconut oil",
        ],
        "steps": [
            "Combine the shallots, lemongrass, chilies, lime leaves and garlic in a bowl.",
            "Add the salt, lime juice and toasted terasi (if using) and scrunch everything together with your fingers to bruise the aromatics.",
            "Heat the coconut oil until just smoking, then pour it over the mixture — it should sizzle. Toss well.",
            "Taste and adjust salt and lime. Serve at room temperature.",
        ],
        "tip": "Make it fresh and eat it the same day — sambal matah is all about the crunch and the raw aromatics. Slice with a sharp knife, not a processor.",
    },
    "black-rice-pudding": {
        "slug": "black-rice-pudding",
        "title": "Black Rice Pudding (Bubur Injin)",
        "tag": "The classic dessert",
        "img": "veg.jpg",
        "img_alt": "Balinese black rice pudding topped with coconut cream",
        "meta": "Authentic bubur injin recipe — Balinese black rice pudding with palm sugar and coconut cream. Naturally vegan. From our Ubud cooking class.",
        "blurb": "Nutty black glutinous rice slow-cooked with palm sugar and pandan, finished with salty coconut cream. The dessert that ends every class.",
        "serves": "4", "prep": "10 min (+ soaking)", "cook": "45 min", "difficulty": "Easy",
        "intro": [
            "<strong>Bubur injin</strong> — black rice pudding — is Bali's favourite way to finish a meal. Black glutinous rice is simmered until tender and sweetened with palm sugar, then crowned with a slick of salty coconut cream that cuts the sweetness beautifully.",
            "It's naturally vegan and hard to get wrong. Soak the rice ahead of time and it mostly looks after itself.",
        ],
        "ingredients": [
            "1 cup black glutinous rice, soaked 4 hours or overnight", "4 cups water",
            "1 pandan leaf, knotted (optional)", "100 g palm sugar, chopped", "Pinch of salt",
            "For the topping: ½ cup coconut cream + pinch of salt",
        ],
        "steps": [
            "Drain the soaked rice and simmer with the water and pandan leaf, stirring occasionally, for 35–45 minutes until soft and thick.",
            "Stir in the palm sugar and a pinch of salt; cook another 5 minutes until dissolved and glossy.",
            "Warm the coconut cream with a pinch of salt (don't boil).",
            "Spoon the warm pudding into bowls and top with the salted coconut cream.",
        ],
        "tip": "Add a little extra water if it thickens too much — it should be spoonable, not stiff. A few slices of ripe banana or jackfruit on top is a lovely touch.",
    },
    "nasi-goreng": {
        "slug": "nasi-goreng",
        "title": "Nasi Goreng (Indonesian Fried Rice)",
        "tag": "The national favourite",
        "img": "veg.jpg",
        "img_alt": "A plate of nasi goreng topped with a fried egg",
        "meta": "Authentic nasi goreng recipe — Indonesia's beloved fried rice with sweet soy, shallots and chili, topped with a fried egg. From our Ubud cooking class.",
        "blurb": "Indonesia's most famous dish and the ultimate use for yesterday's rice — smoky, savoury-sweet fried rice finished with a runny fried egg.",
        "serves": "2", "prep": "15 min", "cook": "10 min", "difficulty": "Easy",
        "intro": [
            "<strong>Nasi goreng</strong> — literally 'fried rice' — is the dish every Indonesian household makes and every traveller falls for. The secret is cold, day-old rice, a hot wok, and the sweet-savoury depth of <em>kecap manis</em> (sweet soy sauce).",
            "It's endlessly adaptable: add chicken, prawns, or keep it vegetarian with extra veg and tofu. A fried egg on top is non-negotiable.",
        ],
        "ingredients": [
            "3 cups cold cooked rice (ideally a day old)", "3 shallots, sliced", "3 cloves garlic, minced",
            "2 red chilies, sliced (to taste)", "2 tbsp kecap manis (sweet soy sauce)",
            "1 tbsp soy sauce", "1 tsp shrimp paste (terasi) — omit for vegan",
            "2 spring onions, sliced", "2 eggs (plus more to fry on top)", "2 tbsp oil",
            "To serve: cucumber, tomato, fried shallots",
        ],
        "steps": [
            "Pound or blend the shallots, garlic, chilies and shrimp paste into a rough paste.",
            "Heat oil in a wok over high heat and fry the paste for 2 minutes until fragrant.",
            "Push to one side, crack in the eggs and scramble briefly, then mix through.",
            "Add the cold rice and stir-fry, breaking up any clumps, for 2–3 minutes.",
            "Add the kecap manis and soy sauce and toss until every grain is coated and lightly smoky. Stir through the spring onions.",
            "Serve topped with a fried egg, with cucumber, tomato and fried shallots on the side.",
        ],
        "tip": "Cold rice is essential — fresh warm rice turns to mush. If you must use fresh, spread it on a tray and chill it for an hour first.",
    },
    "gado-gado": {
        "slug": "gado-gado",
        "title": "Gado-Gado (Indonesian Salad with Peanut Sauce)",
        "tag": "Vegetarian classic",
        "img": "veg.jpg",
        "img_alt": "Gado-gado salad of vegetables, tofu and egg with peanut sauce",
        "meta": "Authentic gado-gado recipe — Indonesia's beloved vegetable salad with a rich, spiced peanut sauce. Naturally vegetarian, easily vegan. From our Ubud cooking class.",
        "blurb": "A hearty salad of blanched vegetables, tofu, tempeh and egg smothered in a warm, spiced peanut sauce — Indonesia's answer to a perfect lunch.",
        "serves": "4", "prep": "25 min", "cook": "15 min", "difficulty": "Easy",
        "intro": [
            "<strong>Gado-gado</strong> means 'mix-mix', and that's exactly what it is — a generous jumble of lightly cooked vegetables, tofu, tempeh and egg, brought together by a rich, spiced peanut sauce. It's one of the most beloved vegetarian dishes in Indonesia.",
            "The sauce is the star: make it as mild or fiery as you like, and thin it to a pourable consistency with a little warm water.",
        ],
        "ingredients": [
            "200 g green beans, trimmed", "200 g cabbage, shredded", "100 g bean sprouts",
            "2 potatoes, boiled and sliced", "200 g firm tofu, fried", "150 g tempeh, fried",
            "2 eggs, boiled (omit for vegan)", "For the sauce: 200 g roasted peanuts (or 6 tbsp peanut butter)",
            "2 cloves garlic", "2 red chilies", "1 tbsp palm sugar", "1 tbsp tamarind or lime juice",
            "1 tbsp kecap manis", "Salt to taste", "Warm water to thin",
        ],
        "steps": [
            "Blanch the green beans, cabbage and bean sprouts separately in boiling water for 1–2 minutes each, then drain.",
            "For the sauce, grind the peanuts, garlic and chilies to a coarse paste (or whisk peanut butter with minced garlic and chili).",
            "Stir in the palm sugar, tamarind or lime, kecap manis and a pinch of salt, then loosen with warm water to a thick, pourable sauce. Taste and balance sweet, sour, salty and spicy.",
            "Arrange the vegetables, potato, fried tofu and tempeh, and egg on a platter.",
            "Pour the peanut sauce over generously, or serve it on the side. Top with fried shallots and prawn crackers if you like.",
        ],
        "tip": "Balance is everything in the sauce — keep tasting and adjusting the palm sugar and lime until it's savoury, sweet and tangy all at once.",
    },
}

# Ordered list for the index page
RECIPE_ORDER = [
    "balinese-spice-paste-base-genep", "sate-lilit", "sambal-matah",
    "nasi-goreng", "gado-gado", "black-rice-pudding",
]


@app.route("/balinese-recipes")
def recipes_index():
    recipes = [RECIPES[s] for s in RECIPE_ORDER]
    return render_template("recipes_index.html", recipes=recipes)


@app.route("/balinese-recipes/<slug>")
def recipe(slug):
    r = RECIPES.get(slug)
    if not r:
        abort(404)
    return render_template("recipe.html", r=r)


# ---------------------------------------------------------------------------
# Guides (Phase-3 discovery content — top-of-funnel SEO)
# ---------------------------------------------------------------------------
GUIDES = {
    "best-cooking-classes-ubud": {
        "title": "Best Cooking Classes in Ubud (2026): An Honest Local Guide",
        "meta": "A local's honest guide to choosing the best cooking class in Ubud, Bali — what to look for, morning vs afternoon, market tours, vegetarian options, and typical prices.",
        "eyebrow": "Choosing a class",
        "img": "market.jpg",
        "img_alt": "Travellers walking through the Ubud morning market with a local guide",
        "h1": "How to choose the best cooking class in Ubud",
        "lede": "Ubud has dozens of cooking classes and they are not all the same. Here's what actually makes a good one — from someone who cooks here every day.",
        "intro": [
            "A cooking class is one of the most rewarding things you can do in Ubud — you learn real skills, eat brilliantly, and get a genuine look inside Balinese family life. But the experience varies enormously between operators, and the reviews rarely tell you why.",
            "This is an honest, local guide to picking the class that fits you. We run <a href='/cooking-class-ubud-market-tour'>our own class</a>, so we're not pretending to be neutral — but everything below is what we'd tell a friend, whoever they booked with.",
        ],
        "sections": [
            {"h": "1. Does it include a real market tour?", "body": [
                "The single biggest quality difference. A proper class starts at a <strong>working local market</strong> in the morning — not a staged souvenir stall — where you learn to recognise fresh turmeric, galangal, kencur, lemongrass and candlenut before you cook with them.",
                "Because Balinese markets wind down before noon, a market tour is only possible on a <strong>morning class</strong>. If the market matters to you (it should), book the early slot.",
            ]},
            {"h": "2. How hands-on is it, really?", "body": [
                "Some 'classes' are really cooking demonstrations where you watch a chef and eat. A good class puts a mortar and pestle in your hands and has you grind the <strong>base genep</strong> spice paste, wrap your own sate lilit, and grill over charcoal yourself.",
                "Look for wording like 'hands-on', small group sizes, and a menu of 8–12 dishes rather than two or three.",
            ]},
            {"h": "3. Group size and setting", "body": [
                "Smaller groups mean more attention and a better seat at the table. A setting among the rice fields, in a real family compound, beats a hotel function room every time — it's the difference between a class and an experience.",
            ]},
            {"h": "4. Dietary options", "body": [
                "Ubud is Bali's plant-based capital, and Balinese home cooking is naturally rich in tofu, tempeh, coconut and vegetables. A good class offers a <strong>full vegetarian or vegan menu</strong> at no extra cost — not a token side dish. If you're plant-based, confirm this when you book. (Ours is on our <a href='/vegetarian-vegan-cooking-class-ubud'>vegetarian &amp; vegan class</a> page.)",
            ]},
            {"h": "5. What you should pay", "body": [
                "Most Ubud classes run <strong>IDR 350k–500k (roughly $25–$35)</strong> per person, and a fair price includes the market tour, a full meal of what you cook, a recipe book, and hotel pickup. Be wary of very cheap classes that cut the market tour, and of very expensive ones that aren't meaningfully better. See our <a href='/pricing'>pricing &amp; FAQ</a> for a real example.",
            ]},
        ],
        "faqs": [
            {"q": "Is a cooking class in Ubud worth it?", "a": "For most food-loving travellers, yes — it's consistently one of the highest-rated Ubud activities. You leave able to actually recreate the dishes at home, which few other experiences give you."},
            {"q": "Morning or afternoon class — which is better?", "a": "Morning if you want the market tour and rice-field walk (the fuller experience). Afternoon if you'd rather a relaxed start and just focus on the cooking."},
            {"q": "How long does a cooking class take?", "a": "Usually 4–5 hours door to door for a morning class with market tour; around 3 hours for an afternoon class."},
            {"q": "Do I need any experience?", "a": "None. A good class is built for complete beginners and guides you through every step."},
        ],
        "cta_head": "Prefer to skip the research?",
        "cta_p": "Our morning class ticks every box above — real market tour, fully hands-on, small groups, vegetarian menus, free Ubud pickup.",
    },
    "things-to-do-ubud-food-lovers": {
        "title": "Things to Do in Ubud for Food Lovers: A Foodie's Guide",
        "meta": "The best food experiences in Ubud, Bali — morning markets, warungs, a cooking class, coffee and cacao, and where to eat like a local. A foodie's guide to Ubud.",
        "eyebrow": "Foodie guide",
        "img": "veg.jpg",
        "img_alt": "A spread of colourful Balinese dishes on banana leaves",
        "h1": "Things to do in Ubud for food lovers",
        "lede": "If you travel to eat, Ubud is one of the best towns in Southeast Asia. Here's how to spend your appetite well — from dawn markets to the perfect black rice pudding.",
        "intro": [
            "Ubud rewards a hungry traveller. Wrapped in rice terraces and steeped in ritual, its food culture runs from smoky roadside warungs to some of Bali's most creative plant-based kitchens. This guide picks the experiences worth building a day around.",
        ],
        "sections": [
            {"h": "Start at a morning market", "body": [
                "Ubud's local markets come alive before dawn and are mostly done by mid-morning. Go early to see families buying fresh turmeric, chilies, snake fruit, warm coconut and just-cut vegetables. It's the real pulse of Balinese food — and the best way to understand what's on your plate later.",
                "The easiest way to do it well is with a guide who knows the vendors: our <a href='/cooking-class-ubud-market-tour'>market-tour cooking class</a> begins exactly here.",
            ]},
            {"h": "Take a hands-on cooking class", "body": [
                "The most useful souvenir you can bring home from Ubud is the ability to cook its food. A hands-on class teaches you the <strong>base genep</strong> spice paste that underpins the whole cuisine, plus sate lilit, curries, urab and sambals. See our <a href='/best-cooking-classes-ubud'>guide to choosing a class</a> if you're comparing options.",
            ]},
            {"h": "Eat at a warung", "body": [
                "For the real thing, eat where locals eat. Look for <strong>nasi campur</strong> (rice with a little of everything), <strong>babi guling</strong> (Balinese suckling pig, for the adventurous), and freshly grilled <strong>sate</strong>. A busy warung with a short menu and a queue is almost always a good sign.",
            ]},
            {"h": "Go plant-based", "body": [
                "Ubud is the vegetarian and vegan capital of Bali. Even if you're not plant-based, the town's raw and vegan kitchens are genuinely excellent — and traditional Balinese food is more vegetable-forward than most visitors expect. Try tofu curry, tempeh satay, urab and sambal matah.",
            ]},
            {"h": "Coffee, cacao and the sweet stuff", "body": [
                "Bali grows both coffee and cacao. Skip the tourist-trap 'luwak coffee' hard-sells and instead find a small plantation or café that lets you taste properly. And don't leave without <strong>bubur injin</strong> — black rice pudding with salty coconut cream, the dessert that ends every good Balinese meal.",
            ]},
        ],
        "faqs": [
            {"q": "What food is Ubud known for?", "a": "Balinese classics like sate lilit, babi guling, nasi campur and lawar, alongside a thriving healthy/vegan scene. The base genep spice paste flavours much of it."},
            {"q": "Is Ubud good for vegetarians and vegans?", "a": "Exceptionally — it's the best town in Bali for plant-based eating, with both dedicated vegan kitchens and naturally veg-friendly Balinese dishes."},
            {"q": "What's the one food experience I shouldn't miss?", "a": "A hands-on cooking class that starts with a real market tour — it ties together the market, the spices and the cooking in one morning, and you take the skills home."},
        ],
        "cta_head": "Turn your appetite into a skill.",
        "cta_p": "Spend a morning at the market and the family kitchen, and cook the food you came to Ubud for.",
    },
}


@app.route("/best-cooking-classes-ubud")
def guide_best_classes():
    return render_template("guide.html", g=GUIDES["best-cooking-classes-ubud"])


@app.route("/things-to-do-ubud-food-lovers")
def guide_foodie():
    return render_template("guide.html", g=GUIDES["things-to-do-ubud-food-lovers"])


@app.route("/")
def home():
    return render_template("index.html")

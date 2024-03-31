/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("product_details").del();
  await knex("product_details").insert([
    {
      id: 1,
      product_name: "Mushroom Bag Charm - Mini",
      category: "Accessories",
      price: 8.99,
      description:
        "Customize your look with these adorable mushroom charms with secret storage. Use these charms to add decor to your purse, backpack or tote plus an extra pocket to store your trinkets. Mini size is perfect for holding chapstick, lighters and other similar-sized objects.",
      primary_image:
        "http://localhost:8080/images/product_images/1_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/1_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/1_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/1_secondary3.jpeg",
    },
    {
      id: 2,
      product_name: "Mushroom Bag Charm - Chubby",
      category: "Accessories",
      price: 10.99,
      description:
        "Customize your look with these adorable mushroom charms with secret storage. Use these charms to add decor to your purse, backpack or tote plus an extra pocket to store your trinkets. Chubby size is perfect for holding hand sanitizer, prescription bottles, airpods and other similar-sized objects.",
      primary_image:
        "http://localhost:8080/images/product_images/2_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/2_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/2_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/2_secondary3.jpeg",
    },
    {
      id: 3,
      product_name: "Drink Carrier",
      category: "Accessories",
      price: 15.0,
      description:
        "Elevate your beverage experience with our charming crochet drink carrier, meticulously handcrafted to snugly hold your favorite drinks while adding a touch of artisanal flair to your outings. Perfect for picnics, beach days, or simply enjoying a stroll, this carrier combines practicality with timeless style.",
      primary_image:
        "http://localhost:8080/images/product_images/3_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/3_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/3_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/3_secondary3.jpeg",
    },
    {
      id: 4,
      product_name: "Rubiks Cube Pouf",
      category: "Accessories",
      price: 150.0,
      description:
        "Introducing our 3-foot tall Crochet Rubik's Cube, a whimsical and cozy addition to any lounge space. Handcrafted with vibrant colors and soft materials, it's both a playful decor piece and a comfortable seat for relaxation.",
      primary_image:
        "http://localhost:8080/images/product_images/4_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/4_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/4_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/4_secondary3.jpeg",
    },
    {
      id: 5,
      product_name: "Balloon Dog",
      category: "Accessories",
      price: 25.0,
      description:
        "Add a whimsical touch to your home decor with our adorable crocheted balloon dog, meticulously crafted with vibrant yarns and intricate detailing to capture the playful spirit of the classic inflatable. Perfect for both children and adults alike, this charming creation brings a pop of color and joy to any space.",
      primary_image:
        "http://localhost:8080/images/product_images/5_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/5_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/5_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/5_secondary3.jpeg",
    },
    {
      id: 6,
      product_name: "Laptop Case",
      category: "Accessories",
      price: 30.0,
      description:
        "Protect your laptop with this stylish and practical laptop sleeve. Popcorn stitches protect your laptop from bumps and scratches.",
      primary_image:
        "http://localhost:8080/images/product_images/6_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/6_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/6_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/6_secondary3.jpeg",
    },
    {
      id: 7,
      product_name: "Winter Toque",
      category: "Hats",
      price: 25.0,
      description:
        "Stay cozy and stylish through the cold season with our handcrafted crocheted winter toque, expertly made with soft, insulating yarns to keep you warm while showcasing intricate stitching for a touch of artisanal charm. Embrace comfort and fashion effortlessly with this essential accessory for chilly days.",
      primary_image:
        "http://localhost:8080/images/product_images/7_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/7_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/7_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/7_secondary3.jpeg",
    },
    {
      id: 8,
      product_name: "Granny Square Bucket Hat",
      category: "Hats",
      price: 35.0,
      description:
        "Step into retro-inspired style with our crocheted granny square pattern bucket hat, blending nostalgic charm with contemporary flair. Handcrafted with vibrant yarns and meticulous attention to detail, this hat adds a playful twist to any outfit, perfect for fashion-forward individuals looking to make a statement.",
      primary_image:
        "http://localhost:8080/images/product_images/8_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/8_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/8_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/8_secondary3.jpeg",
    },
    {
      id: 9,
      product_name: "Two Toned Bucket Hat",
      category: "Hats",
      price: 40.0,
      description:
        "Elevate your headwear game with our crocheted bucket hat, showcasing a unique two-colored design crafted from soft cotton yarns. With its blend of vibrant hues and intricate stitching, this hat offers a stylish twist on a classic silhouette, perfect for adding a pop of color to any ensemble.",
      primary_image:
        "http://localhost:8080/images/product_images/9_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/9_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/9_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/9_secondary3.jpeg",
    },
    {
      id: 10,
      product_name: "Pickle Hat",
      category: "Hats",
      price: 30.0,
      description:
        "Celebrate your love for whimsy with our crocheted pickle hat, meticulously crafted to resemble everyone's favorite crunchy snack. Made with soft yarn and attention to detail, this hat adds a playful touch to any outfit or event, perfect for pickle enthusiasts and novelty seekers alike.",
      primary_image:
        "http://localhost:8080/images/product_images/10_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/10_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/10_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/10_secondary3.jpeg",
    },
    {
      id: 11,
      product_name: "Crescent Bag",
      category: "Bags",
      price: 45.0,
      description:
        "Carry your essentials in style with our crocheted crescent bag, a chic and versatile accessory designed to complement any outfit. Handcrafted with care and featuring a unique crescent shape, this bag offers both functionality and fashion-forward flair for the modern trendsetter.",
      primary_image:
        "http://localhost:8080/images/product_images/11_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/11_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/11_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/11_secondary3.jpeg",
    },
    {
      id: 12,
      product_name: "Granny Square Bag",
      category: "Bags",
      price: 30.0,
      description:
        "Make a statement with our crocheted granny square pattern bag, blending vintage charm with contemporary style. Handcrafted with precision and featuring a classic granny square motif, this bag offers both bohemian flair and practicality for carrying your everyday essentials.",
      primary_image:
        "http://localhost:8080/images/product_images/12_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/12_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/12_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/12_secondary3.jpeg",
    },
    {
      id: 13,
      product_name: "No Shades of Grey Cardigan",
      category: "Cardigans",
      price: 200.0,
      description:
        "Wrap yourself in vibrant hues and eclectic charm with our crocheted rainbow cardigan, a whimsical masterpiece that blends every color of the rainbow and seamlessly mixes patterns for a truly one-of-a-kind look. Handcrafted with meticulous attention to detail, this cardigan is a bold expression of individuality and style, sure to turn heads wherever you go.",
      primary_image:
        "http://localhost:8080/images/product_images/13_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/13_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/13_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/13_secondary3.jpeg",
    },
    {
      id: 14,
      product_name: "Granny Square Cardigan",
      category: "Cardigans",
      price: 125.0,
      description:
        "Elevate your wardrobe with our short sleeve crocheted cardigan, expertly crafted using the timeless granny square stitch for a charming, bohemian vibe. Perfect for layering in any season, this versatile piece seamlessly combines comfort and style, making it a must-have addition to your collection.",
      primary_image:
        "http://localhost:8080/images/product_images/14_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/14_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/14_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/14_secondary3.jpeg",
    },
    {
      id: 15,
      product_name: "Patchwork Cardigan",
      category: "Cardigans",
      price: 150.0,
      description:
        "Indulge in the artistry of our patchwork crochet cardigan, where each square boasts a distinct stitch and color combination, creating a kaleidoscope of individuality. Handcrafted with care, this one-of-a-kind garment ensures a truly unique statement piece for those who embrace creativity and craftsmanship in their wardrobe.",
      primary_image:
        "http://localhost:8080/images/product_images/15_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/15_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/15_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/15_secondary3.jpeg",
    },
    {
      id: 16,
      product_name: "Lemon Peel Turtle Neck",
      category: "Sweaters",
      price: 150.0,
      description:
        "Wrap yourself in understated elegance with our lemon peel stitch turtleneck sweater, meticulously crafted to exude both warmth and sophistication. Featuring the delicate texture of the lemon peel stitch, this sweater offers a timeless blend of comfort and style, perfect for cozying up on chilly days while making a refined fashion statement.",
      primary_image:
        "http://localhost:8080/images/product_images/16_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/16_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/16_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/16_secondary3.jpeg",
    },
    {
      id: 17,
      product_name: "Flower Power Sweater",
      category: "Sweaters",
      price: 250.0,
      description:
        "Embrace retro-inspired flair with our Flower Power sweater, adorned with large, vibrant flowers on both the front and back, offering a bold statement whichever way you wear it. Crafted with attention to detail and reversible design, this sweater exudes versatility and fun, making it a must-have for those seeking a touch of nostalgic charm in their wardrobe.",
      primary_image:
        "http://localhost:8080/images/product_images/17_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/17_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/17_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/17_secondary3.jpeg",
    },
    {
      id: 18,
      product_name: "Backless Sweater",
      category: "Sweaters",
      price: 85.0,
      description:
        "Dare to bare with our backless crochet sweater, crafted from irresistibly soft yarn for a luxurious feel against your skin. With its alluring design and sumptuous texture, this sweater effortlessly combines comfort with bold style, perfect for making a statement wherever you go.",
      primary_image:
        "http://localhost:8080/images/product_images/18_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/18_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/18_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/18_secondary3.jpeg",
    },
    {
      id: 19,
      product_name: "Flower Power Blanket",
      category: "Blankets",
      price: 300.0,
      description: "",
      primary_image:
        "http://localhost:8080/images/product_images/19_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/19_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/19_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/19_secondary3.jpeg",
    },
    {
      id: 20,
      product_name: "Star Blanket",
      category: "Blankets",
      price: 125.0,
      description:
        "Brighten up any space with our crochet Flower Power blanket, bursting with colorful blooms and retro charm. Perfect for adding a touch of nostalgia and warmth to your home decor, this blanket is meticulously crafted with soft yarn to wrap you in comfort and style.",
      primary_image:
        "http://localhost:8080/images/product_images/20_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/20_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/20_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/20_secondary3.jpeg",
    },
    {
      id: 21,
      product_name: "Couch Blanket",
      category: "Blankets",
      price: 150.0,
      description:
        "Snuggle up in style with our crocheted striped pattern couch blanket, designed to add a cozy yet modern touch to your living space. Meticulously crafted with soft yarn and featuring timeless stripes, this blanket promises both warmth and aesthetic appeal for relaxing evenings at home.",
      primary_image:
        "http://localhost:8080/images/product_images/21_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/21_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/21_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/21_secondary3.jpeg",
    },
    {
      id: 22,
      product_name: "Granny Square Blanket",
      category: "Blankets",
      price: 75.0,
      description:
        "Embrace classic charm and warmth with our crocheted square granny square blanket, meticulously crafted to evoke a sense of nostalgia and comfort. Made with soft yarn and featuring intricate granny square motifs, this blanket is a timeless addition to any home, perfect for cozying up on chilly nights or adding a touch of vintage flair to your decor.",
      primary_image:
        "http://localhost:8080/images/product_images/22_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/22_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/22_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/22_secondary3.jpeg",
    },
    {
      id: 23,
      product_name: "Desk Blanket",
      category: "Blankets",
      price: 100.0,
      description:
        "Elevate your workspace comfort with our crocheted desk blanket, designed to provide warmth and coziness during long hours at your desk. Meticulously crafted with soft yarn, this blanket offers a perfect balance of functionality and style, ensuring comfort while you work or relax.",
      primary_image:
        "http://localhost:8080/images/product_images/23_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/23_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/23_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/23_secondary3.jpeg",
    },
    {
      id: 24,
      product_name: "Variegated Sweater",
      category: "Knit",
      price: 50.0,
      description:
        "Elevate your wardrobe with our machine-knit handmade variegated patterned sweater, blending artisanal craftsmanship with modern technology for a unique and stylish look. Crafted with precision and attention to detail, this sweater boasts vibrant variegated patterns that add a pop of color and personality to any outfit, ensuring both comfort and fashion-forward flair.",
      primary_image:
        "http://localhost:8080/images/product_images/24_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/24_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/24_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/24_secondary3.jpeg",
    },
    {
      id: 25,
      product_name: "Bright Sweater",
      category: "Knit",
      price: 50.0,
      description:
        "Brighten up your wardrobe with our machine-knit handmade sweater, bursting with vibrant colors that add a playful and energetic flair to your look. Crafted with care and precision, this sweater combines bold hues with cozy comfort, making it the perfect statement piece for any occasion.",
      primary_image:
        "http://localhost:8080/images/product_images/25_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/25_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/25_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/25_secondary3.jpeg",
    },
    {
      id: 26,
      product_name: "Summer Dress",
      category: "Dresses",
      price: 130.0,
      description:
        "Elevate your summer wardrobe with our enchanting Crochet Summer Dress, delicately crafted with intricate patterns and breathable fabric to keep you cool and stylish on sunny days. Embrace effortless elegance with every wear, whether strolling along the beach or attending a garden party.",
      primary_image:
        "http://localhost:8080/images/product_images/26_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/26_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/26_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/26_secondary3.jpeg",
    },
    {
      id: 27,
      product_name: "Pickle Dress Costume",
      category: "Dresses",
      price: 100.0,
      description:
        "Dill-ight the crowd with our quirky Crochet Pickle Costume Dress, a whimsical ensemble that adds a splash of fun to any occasion. Handcrafted with attention to detail, it's the perfect choice for Halloween parties, themed events, or simply showcasing your love for pickles in style.",
      primary_image:
        "http://localhost:8080/images/product_images/27_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/27_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/27_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/27_secondary3.jpeg",
    },
  ]);
};

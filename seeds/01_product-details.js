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
      product_name: "Mushroom Bag Charms",
      category: "Accessories",
      price: "$10.99",
      description:
        "Customize your look with these adorable mushroom charms with secret storage. Use these charms to add decor to your purse, backpack or tote plus an extra pocket to store your trinkets.Mini size is perfect for holding chapstick, lighters and other similar-sized objects. Chubby size is perfect for holding hand sanitizer, prescription bottles, airpods and other similar-sized objects.",
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
      product_name: "Airpod Max cover",
      category: "Accessories",
      price: "$20.00",
      description:
        "Protect and personalize your AirPods Max headphones with our handmade crochet covers, designed to offer both style and cushioning comfort. Crafted with care, these covers ensure a snug fit and add a unique touch to your listening experience.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 3,
      product_name: "Drink Carrier",
      category: "Accessories",
      price: "$15.00",
      description:
        "Elevate your beverage experience with our charming crochet drink carrier, meticulously handcrafted to snugly hold your favorite drinks while adding a touch of artisanal flair to your outings. Perfect for picnics, beach days, or simply enjoying a stroll, this carrier combines practicality with timeless style.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 4,
      product_name: "Tunisian Scarf",
      category: "Accessories",
      price: "$40.00",
      description:
        "Embrace warmth and elegance with our Tunisian crochet scarf, meticulously woven and made with soft, luxurious yarn to create a cozy accessory that effortlessly elevates any outfit while providing unparalleled comfort during chilly days. Experience the timeless charm of Tunisian craftsmanship with every wrap around your neck.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 5,
      product_name: "Balloon Dog",
      category: "Accessories",
      price: "$25.00",
      description:
        "Add a whimsical touch to your home decor with our adorable crocheted balloon dog, meticulously crafted with vibrant yarns and intricate detailing to capture the playful spirit of the classic inflatable. Perfect for both children and adults alike, this charming creation brings a pop of color and joy to any space.",
      primary_image:
        "http://localhost:8080/images/product_images/1_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 6,
      product_name: "Laptop Case",
      category: "Accessories",
      price: "$30.00",
      description:
        "Protect your laptop with this stylish and practical laptop sleeve. Popcorn stitches protect your laptop from bumps and scratches.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 7,
      product_name: "Winter Toque",
      category: "Hats",
      price: "$",
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
      price: "$35.00",
      description:
        "Step into retro-inspired style with our crocheted granny square pattern bucket hat, blending nostalgic charm with contemporary flair. Handcrafted with vibrant yarns and meticulous attention to detail, this hat adds a playful twist to any outfit, perfect for fashion-forward individuals looking to make a statement.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 9,
      product_name: "Terry Bucket Hat",
      category: "Hats",
      price: "$35.00",
      description:
        "Experience ultimate comfort and style with our crocheted bucket hat crafted from plush terry cloth material, offering a soft and absorbent feel perfect for sunny days and outdoor adventures. Designed with care, this hat combines the classic bucket silhouette with the luxurious texture of terry cloth for a trendy yet practical accessory.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/9_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 10,
      product_name: "Two Toned Bucket Hat",
      category: "Hats",
      price: "$40.00",
      description:
        "Elevate your headwear game with our crocheted bucket hat, showcasing a unique two-colored design crafted from soft cotton yarns. With its blend of vibrant hues and intricate stitching, this hat offers a stylish twist on a classic silhouette, perfect for adding a pop of color to any ensemble.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 11,
      product_name: "Pickle Hat",
      category: "Hats",
      price: "$30.00",
      description:
        "Celebrate your love for whimsy with our crocheted pickle hat, meticulously crafted to resemble everyone's favorite crunchy snack. Made with soft yarn and attention to detail, this hat adds a playful touch to any outfit or event, perfect for pickle enthusiasts and novelty seekers alike.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 12,
      product_name: "Crescent Bag",
      category: "Bags",
      price: "$45.00",
      description:
        "Carry your essentials in style with our crocheted crescent bag, a chic and versatile accessory designed to complement any outfit. Handcrafted with care and featuring a unique crescent shape, this bag offers both functionality and fashion-forward flair for the modern trendsetter.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/12_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/12_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 13,
      product_name: "Granny Square Bag",
      category: "Bags",
      price: "$30.00",
      description:
        "Make a statement with our crocheted granny square pattern bag, blending vintage charm with contemporary style. Handcrafted with precision and featuring a classic granny square motif, this bag offers both bohemian flair and practicality for carrying your everyday essentials.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 14,
      product_name: "No Shades of Grey Cardigan",
      category: "Cardigans",
      price: "$200.00",
      description:
        "Wrap yourself in vibrant hues and eclectic charm with our crocheted rainbow cardigan, a whimsical masterpiece that blends every color of the rainbow and seamlessly mixes patterns for a truly one-of-a-kind look. Handcrafted with meticulous attention to detail, this cardigan is a bold expression of individuality and style, sure to turn heads wherever you go.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/14_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/14_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/14_secondary3.jpeg",
    },
    {
      id: 15,
      product_name: "Granny Square Cardigan",
      category: "Cardigans",
      price: "$125.00",
      description:
        "Elevate your wardrobe with our short sleeve crocheted cardigan, expertly crafted using the timeless granny square stitch for a charming, bohemian vibe. Perfect for layering in any season, this versatile piece seamlessly combines comfort and style, making it a must-have addition to your collection.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 16,
      product_name: "Patchwork Cardigan",
      category: "Cardigans",
      price: "$150.00",
      description:
        "Indulge in the artistry of our patchwork crochet cardigan, where each square boasts a distinct stitch and color combination, creating a kaleidoscope of individuality. Handcrafted with care, this one-of-a-kind garment ensures a truly unique statement piece for those who embrace creativity and craftsmanship in their wardrobe.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/16_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/16_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 17,
      product_name: "Lemon Peel Turtle Neck",
      category: "Sweaters",
      price: "$150.00",
      description:
        "Wrap yourself in understated elegance with our lemon peel stitch turtleneck sweater, meticulously crafted to exude both warmth and sophistication. Featuring the delicate texture of the lemon peel stitch, this sweater offers a timeless blend of comfort and style, perfect for cozying up on chilly days while making a refined fashion statement.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 18,
      product_name: "Flower Power Sweater",
      category: "Sweaters",
      price: "$250.00",
      description:
        "Embrace retro-inspired flair with our Flower Power sweater, adorned with large, vibrant flowers on both the front and back, offering a bold statement whichever way you wear it. Crafted with attention to detail and reversible design, this sweater exudes versatility and fun, making it a must-have for those seeking a touch of nostalgic charm in their wardrobe.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/18_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/18_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/18_secondary3.jpeg",
    },
    {
      id: 19,
      product_name: "Backless Sweater",
      category: "Sweaters",
      price: "$85.00",
      description:
        "Dare to bare with our backless crochet sweater, crafted from irresistibly soft yarn for a luxurious feel against your skin. With its alluring design and sumptuous texture, this sweater effortlessly combines comfort with bold style, perfect for making a statement wherever you go.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/19_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/19_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 20,
      product_name: "Flower Power Blanket",
      category: "Blankets",
      price: "$300.00",
      description: "",
      primary_image:
        "http://localhost:8080/images/product_images/20_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/20_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/20_secondary2.jpeg",
    },
    {
      id: 21,
      product_name: "Star Blanket",
      category: "Blankets",
      price: "$125.00",
      description:
        "Brighten up any space with our crochet Flower Power blanket, bursting with colorful blooms and retro charm. Perfect for adding a touch of nostalgia and warmth to your home decor, this blanket is meticulously crafted with soft yarn to wrap you in comfort and style.",
      primary_image:
        "http://localhost:8080/images/product_images/21_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 22,
      product_name: "Couch Blanket",
      category: "Blankets",
      price: "$150.00",
      description:
        "Snuggle up in style with our crocheted striped pattern couch blanket, designed to add a cozy yet modern touch to your living space. Meticulously crafted with soft yarn and featuring timeless stripes, this blanket promises both warmth and aesthetic appeal for relaxing evenings at home.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/22_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 23,
      product_name: "Granny Square Blanket",
      category: "Blankets",
      price: "$75.00",
      description:
        "Embrace classic charm and warmth with our crocheted square granny square blanket, meticulously crafted to evoke a sense of nostalgia and comfort. Made with soft yarn and featuring intricate granny square motifs, this blanket is a timeless addition to any home, perfect for cozying up on chilly nights or adding a touch of vintage flair to your decor.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 24,
      product_name: "Desk Blanket",
      category: "Blankets",
      price: "$100.00",
      description:
        "Elevate your workspace comfort with our crocheted desk blanket, designed to provide warmth and coziness during long hours at your desk. Meticulously crafted with soft yarn, this blanket offers a perfect balance of functionality and style, ensuring comfort while you work or relax.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 25,
      product_name: "Wheelchair Blanket",
      category: "Blankets",
      price: "$100.00",
      description:
        "Enhance comfort and convenience with our specially designed crocheted wheelchair blanket, featuring a practical pocket for storage or to keep hands warm while on the move. Meticulously crafted with soft yarn, this blanket provides warmth and functionality, ensuring a cozy and accessible experience for wheelchair users.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 26,
      product_name: "Variegated Sweater",
      category: "Knit",
      price: "$50.00",
      description:
        "Elevate your wardrobe with our machine-knit handmade variegated patterned sweater, blending artisanal craftsmanship with modern technology for a unique and stylish look. Crafted with precision and attention to detail, this sweater boasts vibrant variegated patterns that add a pop of color and personality to any outfit, ensuring both comfort and fashion-forward flair.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 27,
      product_name: "Bright Sweater",
      category: "Knit",
      price: "$50.00",
      description:
        "Brighten up your wardrobe with our machine-knit handmade sweater, bursting with vibrant colors that add a playful and energetic flair to your look. Crafted with care and precision, this sweater combines bold hues with cozy comfort, making it the perfect statement piece for any occasion.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 28,
      product_name: "Love Sweater",
      category: "Knit",
      price: "$70.00",
      description:
        "Add a personal touch to your style with our machine-knit handmade sweater, lovingly hand-embroidered with you and your loved ones' initials for a truly bespoke touch. Crafted with attention to detail and care, this sweater not only provides warmth and comfort but also celebrates the unique bond you share with your nearest and dearest.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
    {
      id: 29,
      product_name: "Tube Top",
      category: "Knit",
      price: "$25.00",
      description:
        "Elevate your summer wardrobe with our machine-knit handmade tube top, expertly crafted for a seamless and flattering fit. Made with care and attention to detail, this versatile piece offers both style and comfort, perfect for effortlessly chic looks all season long.",
      primary_image:
        "http://localhost:8080/images/product_images/x_primary.jpeg",
      second_image:
        "http://localhost:8080/images/product_images/x_secondary1.jpeg",
      third_image:
        "http://localhost:8080/images/product_images/x_secondary2.jpeg",
      fourth_image:
        "http://localhost:8080/images/product_images/x_secondary3.jpeg",
    },
  ]);
};

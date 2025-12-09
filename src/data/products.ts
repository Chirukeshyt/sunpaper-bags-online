import weddingBags from "@/assets/wedding-bags.jpg";
import retailBags from "@/assets/retail-bags.jpg";
import foodBags from "@/assets/food-bags.jpg";
import hospitalBags from "@/assets/hospital-bags.jpg";
import jewelryBags from "@/assets/jewelry-bags.jpg";
import duplexBags from "@/assets/duplex-bags.jpg";
import kraftBags from "@/assets/kraft-bags.jpg";

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  imageLink?: string;
  sizes: string[];
}

// Products for Home Page Gallery
export const homePageProducts: ProductCategory[] = [
  {
    id: "wedding",
    name: "Wedding Bags",
    description: "Elegant bags for your special occasions",
    image: weddingBags,
    sizes: ["Small", "Medium", "Large", "Custom"]
  },
  {
    id: "retail",
    name: "Retail & Shopping",
    description: "Branded bags for fashion & retail stores",
    image: retailBags,
    sizes: ["6x9", "11x13", "16x13", "18x13", "Custom"]
  },
  {
    id: "food",
    name: "Food & Bakery",
    description: "Food-safe kraft bags for restaurants",
    image: foodBags,
    sizes: ["1/4 KG", "1/2 KG", "1 KG", "Custom"]
  },
  {
    id: "hospital",
    name: "Hospital & Pharmacy",
    description: "Clean white bags for healthcare",
    image: hospitalBags,
    sizes: ["Small", "Medium", "Large", "Custom"]
  },
  {
    id: "jewelry",
    name: "Jewelry & Boutique",
    description: "Premium small bags with foil printing",
    image: jewelryBags,
    sizes: ["Small", "Medium", "Custom"]
  },
  {
    id: "fashion",
    name: "Fashion & Apparel",
    description: "Stylish duplex bags with multicolor print",
    image: duplexBags,
    sizes: ["20x23", "20x28", "Custom"]
  },
  {
    id: "kraft",
    name: "Eco-Friendly Kraft",
    description: "Sustainable brown kraft paper bags",
    image: kraftBags,
    sizes: ["All sizes available"]
  }
];

// Simple interface for Products Page (only image links)
export interface ProductImage {
  imageLink: string;
}

// Products for Products Page (only image links)
export const productsPageProducts: ProductImage[] = [
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/6073ED9A-5391-4C56-9B1A-6458AA73E6DF.PNG"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/E1A5BA04-4488-46AF-8538-580FAF3A0383.PNG"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/F7866231-B9A6-4B58-A00D-7F07EEC8C1E5.PNG"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/C0ED7A37-1D33-4214-A200-BBDED7E062EF.PNG"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/C700FC4E-0E74-43AD-9E92-941DF1188C69.PNG"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/9F9678AA-9B75-4C22-BC7E-CAA45CCE2406.PNG"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/461E706F-6571-4E35-82FD-23CF1CD49646.PNG"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/7527D4FA-47C2-4516-9DDF-6B2B9AAB791B.PNG"
  },
  


  // Add more image links here as needed
];

// Legacy export for backward compatibility (uses home page products)
export const productCategories = homePageProducts;


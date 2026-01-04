import weddingBags from "@/assets/wedding-bags.jpg";
import retailBags from "@/assets/retail-bags.jpg";
import foodBags from "@/assets/food-bags.jpg";
import hospitalBags from "@/assets/hospital-bags.jpg";
import jewelryBags from "@/assets/jewelry-bags.jpg";
import duplexBags from "@/assets/duplex-bags.jpg";
import kraftBags from "@/assets/kraft-bags.jpg";
import heroBags from "@/assets/hero-bags.jpg";

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
    id: "paper-bags",
    name: "Paper Bags",
    description: "Durable and eco-friendly paper bags for retail, events, and promotions",
    image: "https://ik.imagekit.io/pstron/SunPaper/2df67cc25081abae70d8c3f6a4f63228.jpg",
    sizes: ["6x9", "11x13", "20x23", "Custom"]
  },
  {
    id: "files-office-stationery",
    name: "Files & Office Stationery",
    description: "Professional files, binders, and office stationery products",
    image: "https://ik.imagekit.io/pstron/SunPaper/0ba692e0afdf4821a80ee241550f7330.jpg",
    sizes: ["A4", "A5", "Custom", "Various"]
  },
  {
    id: "food-packaging-covers",
    name: "Food Packaging Covers",
    description: "Food-grade packaging boxes and covers for restaurants and cafes",
    image: "https://ik.imagekit.io/pstron/SunPaper/f7abfc9e8eca529f75efc64753b94d99.jpg",
    sizes: ["1/4 KG", "1/2 KG", "1 KG", "Custom"]
  },
  {
    id: "books-notebooks",
    name: "Books & Notebooks",
    description: "High-quality books, notebooks, and writing pads",
    image: "https://i.pinimg.com/1200x/bc/ec/59/bcec591335dfd7a21508ce963270ae71.jpg",
    sizes: ["A4", "A5", "Custom", "Various"]
  },
  {
    id: "all-paper-products",
    name: "All Paper Products",
    description: "Comprehensive range of paper products for every need",
    image: "https://ik.imagekit.io/pstron/SunPaper/e3d534d198a6a27195efe718bcd48712.jpg",
    sizes: ["All sizes", "Custom", "Bulk orders"]
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
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.31.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.21%20(1).jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.32.02%20(1).jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.32.04.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.24.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.29.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.24%20(1).jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.40.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.41.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.40%20(1).jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.55.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.28%20(2).jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.26.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.39.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.42%20(1).jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.32.01.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.58.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.46.jpeg"
  },
  {
    imageLink: "https://ik.imagekit.io/pstron/SunPaper/WhatsApp%20Image%202025-12-26%20at%2019.31.23%20(1).jpeg"
  }


  // Add more image links here as needed
];

// Legacy export for backward compatibility (uses home page products)
export const productCategories = homePageProducts;


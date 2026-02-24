export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  categoryId: number; // Қай категорияға жататыны
  likes: number; // Лайк саны
}

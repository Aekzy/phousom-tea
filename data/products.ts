export interface product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Phou Sam Tea Red",
        price: 150000,
        image: [
            "products/images/product-2-1.png", 
            // "products/images/product-2-2.png",
            // "products/images/product-2-3.png"
        ],
        description: "Luxury tea red recipe from Phou Sam mountain.",
        category: "Red Tea"
    },
    {
        id: 2,
        name: "Phou Sam Tea Green",
        price: 125000,
        image: [
            "products/images/product-1-1.png",
            // "products/images/product-1-2.png",
        ],
        description: "Luxury tea green recipe from Phou Sam mountain.",
        category: "Special Tea"
    },
];
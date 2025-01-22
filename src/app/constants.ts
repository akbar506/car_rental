const car_detail = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolor vero in magnam reiciendis labore pariatur cumque blanditiis omnis, ipsam modi ipsa? Culpa a ratione possimus ab sunt ex nostrum! Corporis, nam, ab voluptas qui excepturi atque officia nostrum cumque eligendi quasi vitae quam. Hic deserunt cupiditate ipsa dolores eum iusto, neque accusamus mollitia magni exercitationem autem molestiae sit est maxime, ab maiores? Iusto dicta eaque eos ut officiis quaerat quam temporibus incidunt accusantium corrupti eius impedit autem asperiores unde saepe quibusdam neque iure quae illum, placeat commodi porro ullam ducimus! Inventore aperiam sequi animi tempora omnis beatae, porro maiores temporibus. Adipisci soluta officia nisi porro quia reiciendis, sit optio totam perspiciatis quis praesentium blanditiis libero magni obcaecati aliquam."

type Car = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    detail: string;
};

export const cars: Car[] = [
    {
        id: 1,
        name: "Sedan",
        category: "Economy",
        price: 50,
        image: "/sedan.webp?height=200&width=300",
        description: "Fuel-efficient and perfect for city driving.",
        detail: car_detail
    },
    {
        id: 2,
        name: "Luxury Sedan",
        category: "Luxury",
        price: 150,
        image: "/luxury2.webp?height=200&width=300",
        description: "Experience ultimate comfort and style with our top-of-the-line luxury sedan.",
        detail: car_detail
    },
    {
        id: 3,
        name: "Midsize SUV",
        category: "SUV",
        price: 100,
        image: "/SUV.webp?height=200&width=300",
        description: "Spacious and versatile, ideal for family trips and outdoor adventures.",
        detail: car_detail
    },
    {
        id: 4,
        name: "Electric Hatchback",
        category: "Electric",
        price: 80,
        image: "/economy_electric.webp?height=200&width=300",
        description: "Eco-friendly and modern, perfect for environmentally conscious drivers.",
        detail: car_detail
    },
    {
        id: 5,
        name: "Economy Hatchback",
        category: "Economy",
        price: 45,
        image: "/economy2.webp?height=200&width=300",
        description: "Our most affordable option, great for budget-conscious travelers.",
        detail: car_detail
    },
    {
        id: 6,
        name: "Full-size SUV",
        category: "SUV",
        price: 120,
        image: "/SUV2.webp?height=200&width=300",
        description: "Maximum space and comfort for large groups or extra cargo.",
        detail: car_detail
    },
]

export const categories = [
    { name: "Economy", image: "/Economy.webp?height=200&width=300" },
    { name: "Luxury", image: "/luxury2.webp?height=300&width=300" },
    { name: "SUV", image: "/SUV.webp?height=200&width=300" },
    { name: "Electric", image: "/electric2.webp?height=200&width=300" },
]
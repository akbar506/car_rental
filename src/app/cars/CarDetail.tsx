"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cars } from "@/app/constants";

export default function CarsClient() {
    const searchParams = useSearchParams();
    const [filteredCars, setFilteredCars] = useState(cars);

    useEffect(() => {
        const category = searchParams.get("category");
        if (category) {
            setFilteredCars(
                cars.filter(
                    (car) => car.category.toLowerCase() === category.toLowerCase()
                )
            );
        } else {
            setFilteredCars(cars);
        }
    }, [searchParams]);

    return (
        <div className="min-h-[730px]">
            <h1 className="text-3xl font-bold text-blue-600 mb-8">All Cars</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCars.map((car) => (
                    <div
                        key={car.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <Image
                            src={car.image || "/placeholder.svg"}
                            alt={car.name}
                            width={300}
                            height={200}
                            className="w-full h-48 object-contain"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-blue-600">
                                {car.name}
                            </h2>
                            <p className="text-gray-600">{car.category}</p>
                            <p className="text-lg text-gray-600 font-bold mt-2">
                                ${car.price}/day
                            </p>
                            <Link
                                href={`/cars/${car.id}`}
                                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cars } from "../../constants"

export default async function CarDetail(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    const car = cars.find((c) => c.id === Number.parseInt(id))

    if (!car) {
        notFound()
    }

    const relatedCars = cars.filter((c) => c.category === car.category && c.id !== car.id).slice(0, 3)

    return (
        <>
            <div className="min-h-[730px]">
                <div>
                    <div className="flex flex-col md:flex-row gap-8 mb-12 mt-10">
                        <div className="md:w-1/2">
                            <Image
                                src={car.image || "/placeholder.svg"}
                                alt={car.name}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-3xl font-bold text-blue-600 mb-4">{car.name}</h1>
                            <p className="text-xl text-gray-600 mb-4">{car.category}</p>
                            <p className="text-2xl text-gray-400 font-bold mb-4">${car.price}/day</p>
                            <p className="text-gray-700 mb-6">{car.description}</p>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                                Book Now
                            </button>
                            <h3 className="text-2xl font-bold text-black mt-5">Detail</h3>
                            <p className="text-gray-700 mb-6 mt-3">{car.detail}</p>
                        </div>
                    </div>

                    {relatedCars.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold text-blue-600 mb-6">Other {car.category} Cars</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedCars.map((relatedCar) => (
                                    <div key={relatedCar.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <Image
                                            src={relatedCar.image || "/placeholder.svg"}
                                            alt={relatedCar.name}
                                            width={300}
                                            height={200}
                                            className="w-full h-48 object-contain"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold text-blue-600">{relatedCar.name}</h3>
                                            <p className="text-gray-600">{relatedCar.category}</p>
                                            <p className="text-lg font-bold mt-2">${relatedCar.price}/day</p>
                                            <Link
                                                href={`/cars/${relatedCar.id}`}
                                                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}


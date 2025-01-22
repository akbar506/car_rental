import Image from "next/image"
import Link from "next/link"
import { categories } from "./constants"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold text-black mb-4">Find Your Perfect Ride - quickly and easily</h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover our wide range of vehicles for any occasion. From economy to luxury, we&lsquo;ve got you covered.
          </p>
          <Link
            href="/cars"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Browse Cars
          </Link>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/hero.webp?height=600&width=600"
            alt="Car rental hero image"
            width={600}
            height={600}
            className=""
          />
        </div>
      </section>
      {/* Category Section */}
      <section>
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Car Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={`${category.name} category`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600">{category.name}</h3>
                <Link
                  href={`/cars?category=${category.name.toLowerCase()}`}
                  className="mt-2 inline-block text-blue-600 hover:underline"
                >
                  View Cars
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}


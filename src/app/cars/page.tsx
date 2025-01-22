import { Suspense } from "react";
import CarClient from "../cars/CarDetail";

export default function CarsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CarClient />
        </Suspense>
    );
}
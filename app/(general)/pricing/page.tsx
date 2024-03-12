import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Esta es la página de precios de la aplicación.',
    keywords: ['Pricing Page', 'Precios'],
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}
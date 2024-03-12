import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'SEO Description',
    keywords: ['Contact Page', 'Contacto'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}
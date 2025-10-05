import type { Metadata, Viewport } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { I18nProviderClient } from "@/locales/client";
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/footer";


const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-oswald',
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Portfolio | Quentin T'JAMPENS",
    description: "Portfolio de Quentin T'JAMPENS"
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1
}

export default async function RootLayout({ children, params }: LayoutProps<'/[locale]'>) {
    const { locale } = await params;

    return (
        <html lang={locale} className={"dark"}>
            <body className={`${oswald.variable} antialiased min-h-screen flex flex-col gap-y-20`}>
                <Analytics />
                <I18nProviderClient locale={locale}>
                    {children}
                    <Footer />
                </I18nProviderClient>
            </body>
        </html>
    );
}

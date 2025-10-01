import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { I18nProviderClient } from "@/locales/client";
import { Analytics } from "@vercel/analytics/next"


const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-oswald',
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Portfolio | Quentin T'JAMPENS",
    description: "Portfolio de Quentin T'JAMPENS",
};

export default async function RootLayout({ children, params }: LayoutProps<'/[locale]'>) {
    const { locale } = await params;

    return (
        <html lang={locale} className={"dark"}>
            <body className={`${oswald.variable} antialiased`}>
                <Analytics />
                <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
            </body>
        </html>
    );
}

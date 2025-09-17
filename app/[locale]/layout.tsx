import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProviderClient } from "@/locales/client";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio | Quentin T'JAMPENS",
    description: "Portfolio de Quentin T'JAMPENS",
};

export default async function RootLayout({ children, params }: LayoutProps<'/[locale]'>) {
    const { locale } = await params;

    return (
        <html lang={locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        </body>
        </html>
    );
}

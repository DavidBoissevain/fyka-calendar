import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import "./globals.css";
import FykaMark from "@/components/fyka-mark";
import { buttonVariants } from "@/components/ui/button";

// The root layout lives under [lang], so unmatched URLs have no layout to
// render into. This page brings its own <html>, styles and font, and is
// bilingual because we don't know the visitor's language here.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 – Fyka",
  description: "Page not found · Pagina niet gevonden",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex min-h-screen items-center justify-center px-6">
        <main className="max-w-md text-center">
          <div className="flex justify-center">
            <FykaMark tile="h-14 w-14" />
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight">
            Page not found
          </h1>
          <p lang="nl" className="mt-2 text-lg text-muted-foreground">
            Pagina niet gevonden
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/en" className={buttonVariants({ size: "lg" })}>
              Home
            </Link>
            <Link
              href="/nl"
              lang="nl"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Naar de homepage
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}

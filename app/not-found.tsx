import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <div className="text-center">
        <p className="mb-4 text-7xl font-bold text-primary">404</p>
        <h1 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
          This page could not be found.
        </h1>
        <Link
          href="/services"
          className="inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Back to services
        </Link>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-4xl bg-primary/20 blur-2xl animate-pulse" />
          <Image
            src="/paha.jpg"
            alt="Pahadi"
            width={100}
            height={100}
            className="relative rounded-[1.75rem] object-cover shadow-2xl"
            priority
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Loading</p>
          <p className="mt-2 text-lg font-semibold text-foreground">Pahadi is getting ready</p>
        </div>
      </div>
    </div>
  );
}
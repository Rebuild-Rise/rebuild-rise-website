export default function Loading() {
  return (
    <main className="min-h-screen bg-cream" aria-busy="true" aria-live="polite">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 lg:px-10">
        <p className="sr-only">Loading page…</p>
        <div className="h-14 w-52 animate-pulse bg-parchment motion-reduce:animate-none" aria-hidden="true" />
        <div className="mt-[clamp(4rem,12vh,8rem)] max-w-3xl" aria-hidden="true">
          <div className="h-4 w-40 animate-pulse bg-line motion-reduce:animate-none" />
          <div className="mt-6 h-14 w-full animate-pulse bg-parchment motion-reduce:animate-none sm:h-20" />
          <div className="mt-3 h-14 w-4/5 animate-pulse bg-parchment motion-reduce:animate-none sm:h-20" />
          <div className="mt-8 h-4 w-3/4 animate-pulse bg-line motion-reduce:animate-none" />
          <div className="mt-3 h-4 w-2/3 animate-pulse bg-line motion-reduce:animate-none" />
        </div>
      </div>
    </main>
  );
}


export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-background flex-col gap-y-8">
      <figure className="relative animate-spin-slow">
      <span className="icon-[whh--loadingalt] text-lg text-black"></span>
      </figure>
      <p className="font-clashDisplay text-xl tracking-wide font-medium text-[#151515] animate-pulse">Loading...</p>
    </div>
  );
}

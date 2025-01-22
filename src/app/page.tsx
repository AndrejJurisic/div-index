import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-7 bg-white p-20">
      <Image
        src="/under-construction.jpg"
        alt="under construction"
        width={534}
        height={400}
        className="rounded-lg"
        priority
      />
      <h5 className="text-center text-xl font-bold text-black lg:text-2xl">
        Please come back later.
      </h5>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative w-full h-[80vh]">
      <Image
        src="/Hero Img.jpg"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          ذكية. مستدامة. منازل جاهزة للسكن
        </h1>
        <p className="max-w-xl text-lg md:text-xl">
          استمتع بمستقبل عيشٍ أفضل مع منازلنا الجاهزة المصممة بإتقان. تصميم مستدام يتناغم مع الراحة العصرية.
        </p>
        <Link href='/projects'
          className="mt-4 bg-[#C09059] transition-color duration-200 hover:bg-[#ddac73] px-6 py-3 rounded-lg text-white font-semibold"
        >
          اكتشفنا
        </Link>
      </div>
    </section>
  );
};

export default Hero;

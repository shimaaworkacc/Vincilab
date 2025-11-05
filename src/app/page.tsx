import Link from "next/link";
import CarouselSize from "./_components/Carousel";

export default function Home() {
  return (
    <div className="text-center">

      <h1 className="my-5 mx-auto bg-brown-color text-beige-color text-3xl w-1/2 p-2 rounded-2xl">Welcome to VinciLab</h1>

      <CarouselSize></CarouselSize>

      <div className="my-6 mx-auto w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      </div>
      <p className="my-2 mx-auto bg-beige-color opacity-90 w-1/2 p-2 rounded-2xl text-lg text-brown-color">Discover the world of art and creativity at VinciLab. Book a visit for a wonderful experience.</p>
      <Link href="/booking" className="inline-block my-2 px-4 py-2 bg-beige-color text-dark-color rounded-lg hover:bg-green-color shadow-2xl">Book a Visit</Link>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Image
        src={"/hero.gif"}
        alt="Hero Image"
        width={800}
        height={400}
        className="mx-auto w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute w-full flex flex-col items-center mt-24">
        <h1 className="font-bold text-7xl font-game z-10">Start Your</h1>
        <p
          className="font-bold text-8xl font-game text-rose-600"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }}
        >
          Coding Adventure
        </p>

        <p className="mt-5 font-game text-3xl">
          Beginner friendly coding courses and projjects{" "}
        </p>

        <Button className="font-game text-3xl p-6 mt-7" variant={"pixel"}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
export default Hero;

import Header from "@/app/_compnents/Header";
import Hero from "./_compnents/Hero";

export default function Page() {
  return (
    // Navbar
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
    </div>
  );
}

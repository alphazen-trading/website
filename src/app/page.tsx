import Image from "next/image";
import Header from "@/components/header.tsx";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="mx-3 md:mx-12 grow border-r border-l border-dashed border-blue-200 dark:border-blue-300/15">
        <Hero />
      </div>
    </div>
  );
}

import Chip from "@/components/chip";
import Headline from "@/components/headline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="py-24 border-b border-b-gray-200">
        <Headline/>
      </section>
      <section className="py-24 border-b border-b-gray-200">
        <Chip />
      </section>
      <section className="py-24 border-b border-b-gray-200">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </section>
    </div>
  );
}

import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Empowering <strong>data-driven businesses</strong> with{" "}
        <strong>AI-driven</strong> analyst insights
      </p>
      <a
        href="https://www.resonancecrowd.com/"
        target="_blank"
        rel="noreferrer"
        className="flex gap-2 mt-8 items-center text-m  text-gray-500 font-thin"
      >
        <p className="mr-4">An app by</p>
        <Image
          src="/resonance-logo.png"
          alt="Resonance Logo"
          width={160}
          height={24}
        />
      </a>
    </div>
  );
}

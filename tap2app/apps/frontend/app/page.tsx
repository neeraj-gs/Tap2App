import { Navbar } from "@/components/Navbar";
import { SearchPrompt } from "@/components/SearchPrompt";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen pt-16 pb-8 px-4">
        <SearchPrompt />
      </div>
    </main>
  );
}

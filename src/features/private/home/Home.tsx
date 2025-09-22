import { Separator } from "@/shared/components/ui/separator";
import BookCard from "./components/BookCard";

const Home = () => {
  return (
    <main className="h-full p-6 max-w-[1200px] mx-auto space-y-6">
      <section className="w-full h-[600px] rounded-lg overflow-hidden">
        <img
          src="https://placehold.co/1200x600"
          alt="A Placeholder Image"
          className="w-full h-full rounded-lg object-cover"
        />
      </section>
      <Separator />
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Latest Books</h1>
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <BookCard
              key={index}
              title="Book Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.
"
              image="https://placehold.co/180x180"
              author="Book Author"
              publishYear="2025"
              genre={["Genre 1", "Genre 2"]}
              pages={100}
              language="English"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

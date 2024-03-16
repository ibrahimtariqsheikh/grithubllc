import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 min-h-screen mx-10">
      <section className="grid grid-cols-2">
        <div className="grid gap-4 p-10">
          <h1 className="text-3xl font-semibold">
            Your Personal Shopping Hub.
          </h1>
          <h2>GRITHUB</h2>
          <p>
            We are a personal brand for all your shopping needs and want to give
            the best top notch quality to our customers so but now.
          </p>
          <Button>BUY NOW</Button>
        </div>

        <div className="p-10">
          <div className="bg-neutral-100 w-full h-full rounded-2xl"></div>
        </div>
      </section>
    </main>
  );
}
